import React from "react";
import { reviews } from "../data/reviews";

const Ratings = () => {
  const { name, review } = reviews;

  return (
    <aside className="review">
      <div>
        <h2>Alice's ratings and reviews</h2>
        <span>⭐⭐⭐⭐⭐</span>
      </div>

      {reviews.map((review) => {
        return (
          <div key={review.id} className="review-bubble">
            <h3 className="review-author">{review.name}</h3>
            <p className="review-p-text">{review.review}</p>
          </div>
        );
      })}
    </aside>
  );
};

export default Ratings;
