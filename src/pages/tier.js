import LayoutFront from "../components/layout/LayoutFront";

const Tier = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Tier"}
                pageTitle={"Tier"}
                pageTitleSub={"Welcome Tier Page"}
                parent={"Home"}
                child={"Tier"}
            >
                <div className="tier section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tier-content">
                                    <div className="difference__table">
                                        <div className="difference__row">
                                            <div className="difference__cell difference__cell--feature"></div>
                                            <div className="difference__cell difference__cell--qbo">
                                                Pro
                                            </div>
                                            <div className="difference__cell difference__cell--qbo">
                                                Premier
                                            </div>
                                            <div className="difference__cell difference__cell--qbo">
                                                Premier
                                            </div>
                                        </div>
                                        <div className="difference__row">
                                            <div className="difference__cell difference__cell--feature">Monthly subscription cost (excl. VAT)</div>
                                            <div className="difference__cell">
                                                <strong>From &pound;22</strong>
                                            </div>
                                            <div className="difference__cell">
                                                <strong>From &pound;45</strong>
                                            </div>
                                            <div className="difference__cell">
                                                <strong>From &pound;45</strong>
                                            </div>
                                        </div>
                                        <div className="difference__section">
                                            Get started easily
                                        </div>
                                        <div className="difference__row">
                                            <div className="difference__cell difference__cell--feature">30 days' free telephone support 2 and 60 day money back guarantee</div>
                                            <div className="difference__cell">
                                                <span className="difference__tick"></span>
                                            </div>
                                            <div className="difference__cell">
                                                <span className="difference__tick"></span>
                                            </div>
                                            <div className="difference__cell">
                                                <span className="difference__tick"></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Tier;