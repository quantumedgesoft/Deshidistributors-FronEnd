import PageRouteBanner from "../../components/shared/pageRouteBanner/PageRouteBanner";

const Contact = () => {
  return (
      <div>
        <PageRouteBanner title="Contact" />
        <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="p-5 bg-light rounded">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="text-center mx-auto" style={{ maxWidth: "700px" }}>
                                <h1 className="text-primary">Office Location</h1>
                                <p className="mb-4">
                                Denver,Colorado,USA
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="h-100 rounded">
                                <iframe className="rounded w-100" 
                                style={{ height: "400px" }} 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12594198.750371633!2d-105.59546820185362!3d41.521104492115775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sbd!4v1613364573924!5m2!1sen!2sbd" 
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form action="" className="">
                                <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                                <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" />
                                <textarea className="w-100 form-control border-0 mb-4" rows="5" cols="10" placeholder="Your Message"></textarea>
                                <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-2">Denver,Colorado,USA</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">info@Deshidistributors.com</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded bg-white">
                                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-2">(+012) 3456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Contact;
