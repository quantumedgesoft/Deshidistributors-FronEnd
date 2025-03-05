import TestimonialSlider from "../../components/sliders/TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="container-flui testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-5 mb-5 text-dark">Our Customer Saying!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
