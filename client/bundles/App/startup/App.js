import React from 'react';

import SearchResults from '../components/SearchResults';

const App = (props) => (
    <SearchResults spots={JSON.parse(props.spots)} />
);

export default App;
