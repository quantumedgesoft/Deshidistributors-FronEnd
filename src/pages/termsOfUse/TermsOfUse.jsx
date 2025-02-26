import React from "react";

const TermsOfUse = () => {
  return (
    <section className="container py-5 bg-gradient-to-b" style={{marginTop: "150px"}}>
      <div className="max-w-4xl mx-auto bg-white p-10 shadow-2xl rounded-2xl border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">Terms of Use</h1>

        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing and using Deshidistributors.com, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use our services.",
          },
          {
            title: "2. User Responsibilities",
            content: (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Provide accurate and up-to-date information.</li>
                <li>Do not engage in illegal or fraudulent activities.</li>
                <li>Respect intellectual property rights and user privacy.</li>
              </ul>
            ),
          },
          {
            title: "3. Account Security",
            content:
              "You are responsible for maintaining the confidentiality of your account credentials. Any unauthorized use of your account should be reported immediately.",
          },
          {
            title: "4. Prohibited Activities",
            content: (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Unauthorized access to other accounts or data.</li>
                <li>Distributing harmful or malicious content.</li>
                <li>Using automated systems (bots, scrapers) without permission.</li>
              </ul>
            ),
          },
          {
            title: "5. Termination of Service",
            content:
              "We reserve the right to suspend or terminate your account if you violate these terms. We may also modify or discontinue any part of our service without notice.",
          },
          {
            title: "6. Limitation of Liability",
            content:
              "Deshidistributors.com is not liable for any indirect, incidental, or consequential damages resulting from your use of our website and services.",
          },
          {
            title: "7. Changes to Terms",
            content:
              "We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated effective date.",
          },
          {
            title: "8. Contact Information",
            content: (
              <p>
                If you have any questions, please contact us at{" "}
                <a
                  href="mailto:support@deshidistributors.com"
                  className="text-green-600 hover:text-green-800 font-semibold transition"
                >
                  support@deshidistributors.com
                </a>
                .
              </p>
            ),
          },
        ].map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
            {index !== 7 && <hr className="my-6 border-gray-300" />}
          </section>
        ))}
      </div>
    </section>
  );
};

export default TermsOfUse;
