import { useForm } from "react-hook-form";
import PageRouteBanner from "../../components/shared/pageRouteBanner/PageRouteBanner";
import useDataFetcher from "../../utils/FetchDatas";

const Contact = () => {
  const { data } = useDataFetcher("/site-content/");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div>
      <PageRouteBanner PageName="Contact" />
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              {/* Office Location */}
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="fw-bold">Office Location</h1>
                  <p className="mb-4">{data?.address}</p>
                </div>
              </div>

              {/* Google Map */}
              <div className="col-lg-12">
                <div className="h-100 rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: "400px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12594198.750371633!2d-105.59546820185362!3d41.521104492115775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sbd!4v1613364573924!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-7">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="needs-validation"
                >
                  {/* Name */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className={`form-control border-0 py-3 ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Your Name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <input
                      type="email"
                      className={`form-control border-0 py-3 ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <textarea
                      className={`form-control border-0 py-3 ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      rows="5"
                      placeholder="Your Message"
                      {...register("message", {
                        required: "Message cannot be empty",
                      })}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">
                        {errors.message.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white shadow-sm">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h5>Address</h5>
                    <p className="mb-2">{data?.data?.address}</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white shadow-sm">
                  <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h5>Email</h5>
                    <p className="mb-2">{data?.data?.email}</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded bg-white shadow-sm">
                  <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h5>Phone</h5>
                    <p className="mb-2">{data?.data?.phone}</p>
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
