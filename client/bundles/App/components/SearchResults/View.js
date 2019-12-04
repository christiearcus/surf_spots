import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const View = ({ spots }) => {
  return (
    <div>
      <h1>Surf spots home / search</h1>
      {spots.map((spot, index) => {
        return (
          <section key={`${spot.name}-${index}`}>
            <Link to={`/spot/${spot.id}`}>
              <h2>{spot.name}</h2>
            </Link>
            <p>{spot.description}</p>
          </section>
        );
      })}
    </div>
  );
};

View.propTypes = {
  spots: PropTypes.array.isRequired
};

export default View;
