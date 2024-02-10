"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, FC, useMemo } from "react";
import useClickOutside from "./../../util/outsideClick";
const ThemeSwitch = dynamic(
  () => import("../../components/elements/ThemeSwitch"),
  {
    ssr: false,
  }
);

// Web3 imports
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from "../../contexts/AutoConnectProvider";
require("@solana/wallet-adapter-react-ui/styles.css");

function HeaderLanding() {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const networkOptions = ["Devnet", "Testnet", "Mainnet"];
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  let domNode = useClickOutside(() => {
    setIsActive({
      status: false,
    });
  });

  return (
    <>
      <div className="header landing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <div className="brand-logo">
                    {/* Header Logo */}
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="/images/soldeploy.png"
                          alt=""
                          className="logo-primary"
                          width={200}
                        />
                        <img
                          src="/images/logow.png"
                          alt=""
                          className="logo-white"
                        />
                      </a>
                    </Link>
                  </div>

                  {/* Search Bar */}
                  {/* <div className="search">
                                        <form>
                                            <span><i className="ri-search-line"></i></span>
                                            <input type="text" placeholder="Search Here" />
                                        </form>
                                    </div> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleTrueFalse}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className={
                      isToggled
                        ? "collapse navbar-collapse show"
                        : "collapse navbar-collapse"
                    }
                  >
                    {/* Navigation */}
                    <ul className="navbar-nav" ref={domNode}>
                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(1)}
                      >
                        <Link legacyBehavior href="/">
                          <a className="nav-link">Home</a>
                        </Link>
                      </li>
                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(1)}
                      >
                        <Link legacyBehavior href="/mint-token-native">
                          <a className="nav-link">Mint</a>
                        </Link>
                      </li>
                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(1)}
                      >
                        <Link legacyBehavior href="/mint-token-2022">
                          <a className="nav-link">Mint 2022</a>
                        </Link>
                      </li>

                      {/* <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(2)}
                      >
                        <a className="nav-link">Mint</a>
                        <div
                          className={
                            isActive.key == 2
                              ? "dropdown-menu show"
                              : "dropdown-menu"
                          }
                        >
                          <Link legacyBehavior href="/mint-token-native">
                            <a className="dropdown-item">Token</a>
                          </Link>
                          <Link legacyBehavior href="/mint-token-2022">
                            <a className="dropdown-item">Token-2022</a>
                          </Link>
                        </div>
                      </li> */}
                    </ul>
                  </div>

                  <div className="signin-btn d-flex align-items-center">
                    <WalletMultiButton className="btn btn-ghost mr-4" />
                    {/* <Link legacyBehavior href="/signin">
                      <a className="btn btn-primary">Sign In</a>
                    </Link> */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderLanding;
