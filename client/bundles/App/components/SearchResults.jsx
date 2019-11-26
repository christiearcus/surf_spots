import PropTypes from 'prop-types';
import React from 'react';

const SearchResults = props => {
  console.log(props);
  
  return (
    <div>
      <h1>Surf spots app</h1>
    </div>
  );  
}
SearchResults.propTypes = {
  spots: PropTypes.array.isRequired,
};

export default SearchResults;
