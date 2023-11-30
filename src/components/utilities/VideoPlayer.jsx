"use client"

import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
  const option = {
    width : "400",
    height : "225",
  }
  
    return (
    <>
    <div>
        <YouTube 
        videoId={youtubeId} 
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
        />
    </div>
    </>
  )
}

export default VideoPlayer