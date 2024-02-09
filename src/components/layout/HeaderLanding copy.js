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
                      {/* <PerfectScrollbar> */}
                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(1)}
                      >
                        {/* <a className="nav-link">Home
                                                    </a> */}
                        <Link legacyBehavior href="/">
                          <a className="nav-link">Home</a>
                        </Link>

                        {/* <div className={
                                                        isActive.key == 1
                                                            ? "dropdown-menu show"
                                                            : "dropdown-menu"
                                                    }>
                                                        <Link legacyBehavior href="/"><a className="dropdown-item">Home 1</a></Link>
                                                        <Link legacyBehavior href="/index2"><a className="dropdown-item">Home 2</a></Link>
                                                    </div> */}
                      </li>
                      

                      <li
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
                      </li>

                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(2)}
                      >
                        <a className="nav-link">Explore</a>
                        <div
                          className={
                            isActive.key == 2
                              ? "dropdown-menu show"
                              : "dropdown-menu"
                          }
                        >
                          <Link legacyBehavior href="/explore-grid">
                            <a className="dropdown-item">Explore Grid</a>
                          </Link>
                          <Link legacyBehavior href="/explore-list">
                            <a className="dropdown-item">Explore List</a>
                          </Link>
                          <Link legacyBehavior href="/explore-details">
                            <a className="dropdown-item">Explore Details</a>
                          </Link>
                          <Link legacyBehavior href="/explore-calendar"><a className="dropdown-item">Explore Calendar</a></Link>
                        </div>
                      </li>
                      <li
                        className="nav-item dropdown"
                        onClick={() => handleToggle(3)}
                      >
                        <Link legacyBehavior href="/staking-one">
                          <a className="nav-link">Staking</a>
                        </Link>
                        {/* <div className={
                                                    isActive.key == 3
                                                        ? "dropdown-menu show"
                                                        : "dropdown-menu"
                                                }>
                                                    <Link legacyBehavior href="/staking-one"><a className="dropdown-item">Staking One</a></Link>
                                                    <Link legacyBehavior href="/staking-two"><a className="dropdown-item">Staking Two</a></Link>
                                                </div> */}
                      </li>
                      <li
                        className="nav-item dropdown position-statics"
                        onClick={() => handleToggle(4)}
                      >
                        <a className="nav-link">Pages</a>
                        <div
                          className={
                            isActive.key == 4
                              ? "dropdown-menu mega-menu show"
                              : "dropdown-menu mega-menu"
                          }
                        >
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="mega-menu-nav">
                                {/* <h5>Auth</h5> */}
                                {/* <Link legacyBehavior href="/kyc"><a className="dropdown-item">Kyc</a></Link> */}
                                <Link legacyBehavior href="/farming">
                                  <a className="dropdown-item">Farming</a>
                                </Link>
                                <Link legacyBehavior href="/leaderboard">
                                  <a className="dropdown-item">Leaderboard</a>
                                </Link>
                                <Link legacyBehavior href="/ranking">
                                  <a className="dropdown-item">Ranking</a>
                                </Link>
                                <Link legacyBehavior href="/roadmap">
                                  <a className="dropdown-item">Roadmap</a>
                                </Link>
                                {/* <Link legacyBehavior href="/tokenomics"><a className="dropdown-item">Tokenomics</a></Link> */}
                                {/* <Link legacyBehavior href="/tier"><a className="dropdown-item">Tier</a></Link> */}
                                <Link legacyBehavior href="/team">
                                  <a className="dropdown-item">Team</a>
                                </Link>
                                <Link legacyBehavior href="/contact">
                                  <a className="dropdown-item">Contact</a>
                                </Link>
                                {/* <Link legacyBehavior href="/apply"><a className="dropdown-item">Apply</a></Link> */}
                                {/* </div>
                                                        </div>
                                                        <div className="col-xl-6">
                                                            <div className="mega-menu-nav"> */}
                                {/* <h5>Auth</h5> */}
                                <Link legacyBehavior href="/signin">
                                  <a className="dropdown-item">Sign in</a>
                                </Link>

                                <Link legacyBehavior href="/signup">
                                  <a className="dropdown-item">Sign Up</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* </PerfectScrollbar> */}
                    </ul>
                  </div>

                  <div className="signin-btn d-flex align-items-center">
                    <WalletMultiButton className="" />
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
