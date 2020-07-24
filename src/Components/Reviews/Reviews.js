import React, { useEffect, useState } from "react";

import { movieReview } from "../../helpers/Api";

const Reviews = ({ props, singleMovieId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    movieReview(singleMovieId)
      .then((response) => setReviews(response.data.results))
      .catch((error) => console.log(error));
  }, [singleMovieId]);

  return (
    <div>
      {(!!reviews.length && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )) || <p>no reviews</p>}
    </div>
  );
};

export default Reviews;
