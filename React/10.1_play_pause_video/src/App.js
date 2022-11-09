import './App.css';
import React from 'react';

function VideoDemo() {
  const videoRef = React.useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />

      <div>
        <button onClick={playVideo}>Play!</button>
        <button onClick={pauseVideo}>Pause!</button>
      </div>
    </div>
  );
}

export default VideoDemo;

