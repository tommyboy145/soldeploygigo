import LayoutFront from "../../components/layout/LayoutFront";

const Contact = () => {

    return (
        <>
            <LayoutFront
                pageClass={"front"}
                headTitle={"Contact"}
                pageTitle={"Contact"}
                pageTitleSub={"Welcome Contact Page"}
                parent={"Home"}
                child={"Contact"}
            >
                <div className="contact-form section-padding" id="contact">
                    <div className="container">
                        <div className="row py-lg-5 justify-content-center">
                            <div className="col-xl-7">
                                <div className="section-title text-center">
                                    <span>Ask Question</span>
                                    <h3>Let us hear from you directly!</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-sm-4">
                                <div className="info-list">
                                    <h4 className="mb-3">Address</h4>
                                    <ul>
                                        <li><i className="fa fa-map-marker"></i> California, USA</li>
                                        <li><i className="fa fa-phone"></i> (+880) 1243 665566</li>
                                        <li><i className="fa fa-envelope"></i> hello@example.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-md-8 col-sm-8">
                                <form method="post" name="myform" className="contact_validate">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <div className="mb-3">
                                                <label for="contactName">
                                                    Full name
                                                </label>
                                                <input type="text" className="form-control" id="contactName" placeholder="Full name"
                                                    name="firstname" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="mb-3">
                                                <label for="contactEmail">
                                                    Email
                                                </label>
                                                <input type="email" className="form-control" name="email"
                                                    placeholder="hello@domain.com" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <textarea className="form-control p-3" name="message" rows="5" style={{ "height": "200px" }}
                                                    placeholder="Tell us what we can help you with!"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary px-4">
                                        Send message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Contact;