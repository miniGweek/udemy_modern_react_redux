import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) =>
{
    const videoItems = props.videos.map( v => {return <VideoListItem 
    key={v.etag} 
    video = {v}
    onVideoSelect={props.onVideoSelect}></VideoListItem>})
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
         </ul>
    );
}

export default VideoList;  