import React from "react";
import "../SortModal/SortModal.css";

const SortModal = () => {
  return (
    <div className="modal-card-root">
      <ul>
        <li>Relevance</li>
        <li>Delivery Time</li>
        <li>Rating</li>
        <li>Cost: Low to high</li>
        <li>Cost: High to Low</li>
      </ul>
    </div>
  );
};

export default SortModal;
