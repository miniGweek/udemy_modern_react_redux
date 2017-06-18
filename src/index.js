import React, {Component} from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'

const API_KEY='AIzaSyANuCesK5DCpO0NKqdECVrtW0Ra7W62JlI';

class App extends Component{
    constructor(props){
        super(props);
        this.state = { 
            videos : [],
            selectedVideo : null
        }
        
    YTSearch({key:API_KEY, term:'javascript'},
     videos => { 
         this.setState({videos})
        });

    }


    render(){
        return (
                <div>
                    <SearchBar/>
                    <VideoDetail video = {this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} 
                                onVideoSelect = { video => 
                                this.setState({selectedVideo : video})
                                }
                    />
                </div>);
          }       
}

ReactDOM.render(<App/>, document.querySelector('.container'));