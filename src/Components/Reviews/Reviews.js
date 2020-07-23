import React, { useEffect, useState } from "react";

import { movieReview } from "../../helpers/Api";

const Reviews = ({ props, singleMovieId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    movieReview(singleMovieId)
      .then((response) => setReviews(response.data.results))
      .catch((error) => console.log(error));
  }, []);
  console.log("reviews", reviews);
  return (
    <div>
      {!!reviews.length && <p>loading...</p> && (
        <ul>
          {reviews.map((review) => (
            <li>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
