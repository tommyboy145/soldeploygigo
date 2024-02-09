import Link from "next/link";
import React from 'react';

const Bottom = () => {
    return (
        <>
            <div className="bottom section-padding triangle-top-dark triangle-bottom-dark">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
                            <div className="bottom-logo">
                                <img
                                    className="pb-3"
                                    src="/images/soldeploy.png"
                                    alt=""
                                    width={200}
                                />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 col-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">About us</h4>
                                <ul>
                                    <li>
                                        <Link legacyBehavior href="/explore"><a>Explore</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/item"><a>Item</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/collection"><a>Collection</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/connect"><a>Connect</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Settings</h4>
                                <ul>
                                    <li>
                                        <Link legacyBehavior href="/settings"><a>Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/application"><a>Application</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/security"><a>Security</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/activity"><a>Activity</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                            <div className="bottom-widget">
                                <h4 className="widget-title">Profile</h4>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <ul>
                                            <li>
                                                <Link legacyBehavior href="/profile"><a>Profile</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/created"><a>Created</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/collected"><a>Collected</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/activity"><a>Activity</a></Link>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                        <ul>
                                            <li>
                                                <Link legacyBehavior href="/onsale"><a>On Sale</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/liked"><a>Liked</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/following"><a>Following</a></Link>
                                            </li>
                                            <li>
                                                <Link legacyBehavior href="/followers"><a>Followers</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Bottom;