import React from "react";
import { reviews } from "../data/reviews";

const Ratings = () => {
  const { name, review } = reviews;
  console.log(reviews);

  return (
    <aside className="rattings">
      <div>
        <h2>Alina's ratings</h2>
        <div className="ratings-score">⭐⭐⭐⭐⭐</div>
      </div>

      {reviews.map((review) => {
        return (
          <div key={review.id} className="review-bubble">
            <h3 className="review-author">{review.name}</h3>
            <p>{review.review}</p>
          </div>
        );
      })}
    </aside>
  );
};

export default Ratings;
