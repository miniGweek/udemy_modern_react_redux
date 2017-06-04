import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY='AIzaSyANuCesK5DCpO0NKqdECVrtW0Ra7W62JlI';

const App = () =>{
    return (
    <div>
        <SearchBar/>
    </div>);
}

ReactDOM.render(<App/>, document.querySelector('.container'));