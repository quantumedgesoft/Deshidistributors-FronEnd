import React from "react";
import PageRouteBanner from './../../components/shared/pageRouteBanner/PageRouteBanner';

const ReturnPolicy = () => {
  return (
    <>
    <PageRouteBanner PageName="Return-Policy"/>
    <div className="container py-5">
      <h2 className="mb-4 text-center">Return & Refund Policy</h2>
      <p>
        At <strong>Deshi Distributors</strong>, we value customer satisfaction. If you are not completely satisfied with your purchase, we are here to help.
      </p>

      <h4>Returns</h4>
      <p>
        You have <strong>7 days</strong> to return an item from the date you received it.
      </p>
      <p>To be eligible for a return, the item must:</p>
      <ul>
        <li>Be unused and in the same condition you received it.</li>
        <li>Be in the original packaging.</li>
        <li>Have the receipt or proof of purchase.</li>
      </ul>

      <h4>Refunds</h4>
      <p>
        Once we receive your item, we will inspect it and notify you of the status of your refund.  
        If approved, the refund will be processed to your original method of payment within a few days.
      </p>

      <h4>Shipping</h4>
      <p>
        You will be responsible for the shipping costs for returning your item.  
        Shipping costs are non-refundable unless the return is due to an error on our part.
      </p>

      <h4>Contact Us</h4>
      <p>
        If you have any questions about our return policy, feel free to <a href="/contact">contact us</a>.
      </p>
    </div>
    </>
  );
};

export default ReturnPolicy;