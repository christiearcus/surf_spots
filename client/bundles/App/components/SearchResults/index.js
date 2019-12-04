import React from "react";
import View from "./View";

const SearchResults = props => {
  if (!props.spots) {
    return <div>call api to get spots</div>;
  }
  return <View spots={JSON.parse(props.spots)} />;
};

export default SearchResults;
