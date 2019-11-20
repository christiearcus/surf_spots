import React from "react"
import PropTypes from "prop-types"

class SearchResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.greeting}
      </React.Fragment>
    );
  }
}

SearchResults.propTypes = {
  greeting: PropTypes.string
}

export default SearchResults
