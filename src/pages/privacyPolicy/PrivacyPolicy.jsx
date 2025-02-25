import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5 bg-gradient-to-b">
      <div className="max-w-4xl mx-auto bg-white p-10 shadow-2xl rounded-2xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-md text-gray-600 text-center mb-6">Last updated: February 2025</p>

        {[
          {
            title: "1. Introduction",
            content:
              "Welcome to Deshidistributors. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.",
          },
          {
            title: "2. Information We Collect",
            content: (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Personal Information</strong> (Name, Email, Phone Number, etc.)</li>
                <li><strong>Usage Data</strong> (IP Address, Browser Type, Device Information)</li>
                <li><strong>Cookies & Tracking Technologies</strong> for better user experience</li>
              </ul>
            ),
          },
          {
            title: "3. How We Use Your Information",
            content: (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To enhance user experience and support</li>
                <li>To send important updates and promotions</li>
              </ul>
            ),
          },
          {
            title: "4. Data Security",
            content:
              "We take reasonable precautions to protect your data. However, no online transmission method is 100% secure. We encourage you to stay informed about security best practices.",
          },
          {
            title: "5. Your Rights",
            content:
              "You have the right to access, update, or delete your personal data. If you wish to make a request, please contact us via email.",
          },
          {
            title: "6. Contact Us",
            content: (
              <p>
                For any inquiries or privacy concerns, reach out to us at{" "}
                <a
                  href="mailto:support@yourcompany.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition"
                >
                  info@Deshidistributors.com
                </a>
                .
              </p>
            ),
          },
        ].map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
            {index !== 5 && <hr className="my-6 border-gray-300" />}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
