"use client";

import LayoutFront from "../../components/layout/LayoutFront";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useCallback, useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  createInitializeMintInstruction,
  getMinimumBalanceForRentExemptMint,
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
} from "@solana/spl-token";
import {
  createCreateMetadataAccountV3Instruction,
  PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

const initialValues = {
  tokenName: "",
  tokenSymbol: "",
  metadataURL: "",
  amount: 0,
  decimals: 9,
};

const MintToken = () => {
  //Set variables needed to create token
  const wallet = useWallet();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [metadata, setMetadata] = useState("");
  const [amount, setAmount] = useState("");
  const [decimals, setDecimals] = useState("");
  const mintFormSchema = Yup.object().shape({
    tokenName: Yup.string().required("Token Name is Required"),
    tokenSymbol: Yup.string().required("Token Symbol is Required"),
    metadataURL: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter a proper URL!"
      )
      .required("Metadata URL is required"),
    amount: Yup.number().required("Amount is required"),
    decimals: Yup.number().required("Decimal value is required"),
  });

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
    }
  }, [wallet.publicKey, connection]);

  //Fire Token Create based on form data
  const createToken = useCallback(
    async (form) => {
      const lamports = await getMinimumBalanceForRentExemptMint(connection);
      const mintKeypair = Keypair.generate();
      const tokenATA = await getAssociatedTokenAddress(
        mintKeypair.publicKey,
        publicKey
      );

      //Create Metadata Instruction
      const createMetadataInstruction =
        createCreateMetadataAccountV3Instruction(
          {
            metadata: PublicKey.findProgramAddressSync(
              [
                Buffer.from("metadata"),
                PROGRAM_ID.toBuffer(),
                mintKeypair.publicKey.toBuffer(),
              ],
              PROGRAM_ID
            )[0],
            mint: mintKeypair.publicKey,
            mintAuthority: publicKey,
            payer: publicKey,
            updateAuthority: publicKey,
          },
          {
            createMetadataAccountArgsV3: {
              data: {
                name: form.tokenName,
                symbol: form.symbol,
                uri: form.metadata,
                creators: null,
                sellerFeeBasisPoints: 0,
                uses: null,
                collection: null,
              },
              isMutable: false,
              collectionDetails: null,
            },
          }
        );

      //Creates the new token by creating a TRANSACTION with multiple INSTRUCTIONS
      const createNewTokenTransaction = new Transaction().add(
        //INSTRUCTION: Create New Mint Account
        SystemProgram.createAccount({
          fromPubkey: publicKey,
          newAccountPubkey: mintKeypair.publicKey,
          space: MINT_SIZE,
          lamports: lamports,
          programId: TOKEN_PROGRAM_ID,
        }),

        //INSTRUCTION: Create Mint Instruction
        createInitializeMintInstruction(
          mintKeypair.publicKey,
          form.decimals,
          publicKey,
          publicKey,
          TOKEN_PROGRAM_ID
        ),

        //Create Associated Token Account Instruction
        createAssociatedTokenAccountInstruction(
          publicKey,
          tokenATA,
          publicKey,
          mintKeypair.publicKey
        ),

        //INSTRUCTION: Create Mint To Instruction
        createMintToInstruction(
          mintKeypair.publicKey,
          tokenATA,
          publicKey,
          form.amount * Math.pow(10, form.decimals)
        ),

        //Create the Metadata instruction
        createMetadataInstruction
      );

      //Send the transaction to process
      await sendTransaction(createNewTokenTransaction, connection, {
        signers: [mintKeypair],
      });

      //Consider error success message here.
      console.log("Creating on: " + process.env.SELECTED_NETWORK);
    },
    [publicKey, connection, sendTransaction]
  );
  return (
    <>
      <LayoutFront
        pageClass={"front"}
        headTitle={"Mint Native Token"}
        pageTitle={"Mint Native Token"}
        // pageTitleSub={"Mint a native Solana"}
        parent={"Home"}
      >
        {/* only show form if the wallet is connected */}
        {wallet.publicKey ? (
          <div className="form-container center-block p-4 mt-5">
            <Formik
              initialValues={initialValues}
              validationSchema={mintFormSchema}
              onSubmit={(fields) => {
                createToken({
                  decimals: Number(fields.decimals),
                  amount: Number(fields.amount),
                  metadata: fields.metadataURL,
                  symbol: fields.tokenSymbol,
                  tokenName: fields.tokenName,
                });
              }}
            >
              {({ errors, status, touched }) => (
                <Form>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="form-label">Token Name</label>
                      <Field
                        name="tokenName"
                        type="text"
                        className={
                          "form-control" +
                          (errors.tokenName && touched.tokenName
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="tokenName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Symbol</label>
                      <Field
                        name="tokenSymbol"
                        type="text"
                        className={
                          "form-control" +
                          (errors.tokenSymbol && touched.tokenSymbol
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="tokenSymbol"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-label">Metadata URL</label>
                      <Field
                        name="metadataURL"
                        type="text"
                        className={
                          "form-control" +
                          (errors.metadataURL && touched.metadataURL
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="metadataURL"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Amount</label>
                      <Field
                        name="amount"
                        type="text"
                        className={
                          "form-control" +
                          (errors.amount && touched.amount ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="amount"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label className="form-label">Decimals</label>
                      <Field
                        as="select"
                        name="decimals"
                        className={
                          "form-control" +
                          (errors.decimals && touched.decimals
                            ? " is-invalid"
                            : "")
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </Field>
                      <ErrorMessage
                        name="decimals"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    {/* <div className="col-12 mb-3">
                      <label className="form-label">Decimals</label>
                      <Field
                        name="decimals"
                        type="text"
                        className={
                          "form-control" +
                          (errors.decimals && touched.decimals
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="decimals"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div> */}
                  </div>

                  <div className="mt-3 d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Create Token
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        ) : (
          // If no wallet is connected, show message asking they connect wallet

          <div className="col-xs-1 p-10 mt-5" align="center">
            <h1>PLEASE CONNECT A WALLET FIRST</h1>
          </div>
        )}
      </LayoutFront>
    </>
  );
};

export default MintToken;
