import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SpotDetails = ({ spot }) => {
  if (!spot) {
    return <div>call api to get the spot details</div>;
  }

  return (
    <div>
      <h2>{spot}</h2>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default SpotDetails;

SpotDetails.propTypes = {
  spot: PropTypes.string.isRequired
};
