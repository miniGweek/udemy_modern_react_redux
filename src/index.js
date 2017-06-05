import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY='AIzaSyANuCesK5DCpO0NKqdECVrtW0Ra7W62JlI';

class App extends Component{
    constructor(props){
        super(props);

    YTSearch({key:API_KEY, term:'surfboards'},
     videos => { 
         this.setState(videos)
        });

    }


    render(){
        return (
                <div>
                    <SearchBar/>
                </div>);
          }       
}

ReactDOM.render(<App/>, document.querySelector('.container'));