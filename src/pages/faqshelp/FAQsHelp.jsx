import React from "react";
import PageRouteBanner from "../../components/shared/pageRouteBanner/PageRouteBanner";

const FAQsHelp = () => {
  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, mobile banking, and cash on delivery for your convenience.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times vary by location. Typically, orders are delivered within 3-7 business days.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, once your order is shipped, you will receive a tracking number via email or SMS.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return unused items within 7 days. Please check our Return Policy page for details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@deshidistributors.com or call our helpline at +880123456789.",
    },
  ];

  return (
    <>
    <PageRouteBanner PageName="FAQ"/>
    <div className="container py-5">
      <h2 className="mb-4 text-center">FAQs & Help</h2>
      <div className="accordion" id="faqsAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqsAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-5">Need More Help?</h3>
      <p>If your question isn't listed here, feel free to <a href="/contact">contact us</a> for assistance.</p>
    </div>
    </>
  );
};

export default FAQsHelp;