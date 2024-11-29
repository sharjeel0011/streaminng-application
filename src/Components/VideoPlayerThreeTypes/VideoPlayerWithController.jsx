


// import React, { useState, useRef, useEffect } from "react";
// import ReactPlayer from "react-player";
// import { FaArrowLeft, FaPlay, FaPause, FaVolumeUp, FaCog, FaClosedCaptioning, FaExpand, FaCompress } from "react-icons/fa";

// const VideoPlayer = () => {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [controlsVisible, setControlsVisible] = useState(true); // Controls visibility state
//   const [playing, setPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.8);
//   const [played, setPlayed] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const videoRef = useRef(null);

//   // Toggle fullscreen mode
//   const toggleFullscreen = () => {
//     if (!isFullscreen) {
//       if (videoRef.current.requestFullscreen) {
//         videoRef.current.requestFullscreen(); // Standard method
//       } else if (videoRef.current.mozRequestFullScreen) { // Firefox
//         videoRef.current.mozRequestFullScreen();
//       } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari, Opera
//         videoRef.current.webkitRequestFullscreen();
//       } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
//         videoRef.current.msRequestFullscreen();
//       }
//       setIsFullscreen(true);
//       setControlsVisible(false); // Hide controls when entering fullscreen
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen(); // Standard method
//       } else if (document.mozCancelFullScreen) { // Firefox
//         document.mozCancelFullScreen();
//       } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
//         document.webkitExitFullscreen();
//       } else if (document.msExitFullscreen) { // IE/Edge
//         document.msExitFullscreen();
//       }
//       setIsFullscreen(false);
//       setControlsVisible(true); // Show controls when exiting fullscreen
//     }
//   };

//   // Handle fullscreen changes
//   const handleFullscreenChange = () => {
//     if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
//       setIsFullscreen(true);
//       setControlsVisible(false); // Hide controls in fullscreen
//     } else {
//       setIsFullscreen(false);
//       setControlsVisible(true); // Show controls when exiting fullscreen
//     }
//   };

//   // Play/Pause logic
//   const handlePlayPause = () => {
//     setPlaying(!playing);
//   };

//   // Handle volume change
//   const handleVolumeChange = () => {
//     setVolume(volume === 1 ? 0 : 1); // Toggle volume between 0 and 1
//   };

//   // Progress bar logic
//   const handleProgress = (progress) => {
//     setPlayed(progress.played);
//     setCurrentTime(progress.playedSeconds);
//   };

//   // Handle duration change (initializing the video duration)
//   const handleDuration = (duration) => {
//     setDuration(duration);
//   };

//   // Handle seeking progress
//   const handleSeekChange = (e) => {
//     setPlayed(parseFloat(e.target.value));
//     videoRef.current.seekTo(parseFloat(e.target.value));
//   };

//   useEffect(() => {
//     // Add event listener for fullscreen changes
//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     document.addEventListener("webkitfullscreenchange", handleFullscreenChange); // Safari
//     document.addEventListener("mozfullscreenchange", handleFullscreenChange); // Firefox
//     document.addEventListener("MSFullscreenChange", handleFullscreenChange); // IE/Edge

//     return () => {
//       // Clean up event listeners
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//       document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
//       document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
//       document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
//     };
//   }, []);

//   return (
//     <div className="bg-black w-full h-full">
//       <div className="flex justify-center items-center w-full h-full">
//         <div className="relative w-[1920px] h-[1080px]">
//           {/* ReactPlayer */}
//           <ReactPlayer
//             ref={videoRef}
//             url="https://path_to_video.mp4" // Replace with actual video URL
//             className="w-full h-full object-cover"
//             playing={playing}
//             volume={volume}
//             progressInterval={100}
//             onProgress={handleProgress}
//             onDuration={handleDuration}
//             controls={false} // We will create custom controls
//             width="100%"
//             height="100%"
//           />

//           {/* Title and Description */}
//           <div className="absolute top-0 left-0 p-4 text-white">
//             <div className="flex items-center">
//               <FaArrowLeft className="mr-2" />
//               <div>
//                 <h1 className="text-lg font-semibold">Loki</h1>
//                 <p className="text-sm">TELE Un glorioso propósito</p>
//               </div>
//             </div>
//           </div>

//           {/* Controls */}
//           {controlsVisible && (
//             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black">
//               <div className="flex items-center justify-between text-white">
//                 <div className="flex items-center">
//                   <FaPlay
//                     className="mr-4 cursor-pointer"
//                     onClick={handlePlayPause}
//                     style={{ display: playing ? "none" : "block" }}
//                   />
//                   <FaPause
//                     className="mr-4 cursor-pointer"
//                     onClick={handlePlayPause}
//                     style={{ display: playing ? "block" : "none" }}
//                   />
//                   <FaVolumeUp className="mr-4 cursor-pointer" onClick={handleVolumeChange} />
//                   {/* Progress Bar */}
//                   <div className="w-1/2 h-1 bg-gray-500 rounded-full overflow-hidden">
//                     <div className="h-full bg-teal-500" style={{ width: `${played * 100}%` }}></div>
//                   </div>
//                   <span className="ml-4">{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)} / ${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaCog className="mr-4 cursor-pointer" />
//                   <FaClosedCaptioning className="mr-4 cursor-pointer" />
//                   <FaExpand className="mr-4 cursor-pointer" onClick={toggleFullscreen} />
//                   <FaCompress className="cursor-pointer" onClick={toggleFullscreen} />
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Fullscreen Button */}
//           <button
//             onClick={toggleFullscreen}
//             className="absolute top-4 right-4 text-white p-2 bg-opacity-50 bg-black rounded-full"
//           >
//             {isFullscreen ? <FaCompress /> : <FaExpand />}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;



























import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { FaArrowLeft, FaPlay, FaPause, FaVolumeUp, FaCog, FaClosedCaptioning, FaExpand, FaCompress } from "react-icons/fa";

const VideoPlayer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true); // Controls visibility state
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef(null);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen(); // Standard method
      } else if (videoRef.current.mozRequestFullScreen) { // Firefox
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { // Chrome, Safari, Opera
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { // IE/Edge
        videoRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
      setControlsVisible(false); // Hide controls when entering fullscreen
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); // Standard method
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
      setControlsVisible(true); // Show controls when exiting fullscreen
    }
  };

  // Handle fullscreen changes
  const handleFullscreenChange = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      setIsFullscreen(true);
      setControlsVisible(false); // Hide controls in fullscreen
    } else {
      setIsFullscreen(false);
      setControlsVisible(true); // Show controls when exiting fullscreen
    }
  };

  // Play/Pause logic
  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  // Handle volume change
  const handleVolumeChange = () => {
    setVolume(volume === 1 ? 0 : 1); // Toggle volume between 0 and 1
  };

  // Progress bar logic
  const handleProgress = (progress) => {
    setPlayed(progress.played);
    setCurrentTime(progress.playedSeconds);
  };

  // Handle duration change (initializing the video duration)
  const handleDuration = (duration) => {
    setDuration(duration);
  };

  // Handle seeking progress
  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
    videoRef.current.seekTo(parseFloat(e.target.value));
  };

  useEffect(() => {
    // Add event listener for fullscreen changes
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange); // Safari
    document.addEventListener("mozfullscreenchange", handleFullscreenChange); // Firefox
    document.addEventListener("MSFullscreenChange", handleFullscreenChange); // IE/Edge

    return () => {
      // Clean up event listeners
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="bg-black w-full h-full flex justify-center items-center">
      <div className="relative" style={{ width: "1920px", height: "1080px" }}>
        {/* ReactPlayer */}
        <ReactPlayer
          ref={videoRef}
          url="https://path_to_video.mp4" // Replace with actual video URL
          className="w-full h-full object-cover"
          playing={playing}
          volume={volume}
          progressInterval={100}
          onProgress={handleProgress}
          onDuration={handleDuration}
          controls={false} // We will create custom controls
          width="100%"
          height="100%"
        />

        {/* Title and Description */}
        <div className="absolute top-0 left-0 p-4 text-white">
          <div className="flex items-center">
            <FaArrowLeft className="mr-2" />
            <div>
              <h1 className="text-lg font-semibold">Loki</h1>
              <p className="text-sm">TELE Un glorioso propósito</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        {controlsVisible && (
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center">
                <FaPlay
                  className="mr-4 cursor-pointer"
                  onClick={handlePlayPause}
                  style={{ display: playing ? "none" : "block" }}
                />
                <FaPause
                  className="mr-4 cursor-pointer"
                  onClick={handlePlayPause}
                  style={{ display: playing ? "block" : "none" }}
                />
                <FaVolumeUp className="mr-4 cursor-pointer" onClick={handleVolumeChange} />
                {/* Progress Bar */}
                <div className="w-1/2 h-1 bg-gray-500 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500" style={{ width: `${played * 100}%` }}></div>
                </div>
                <span className="ml-4">{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)} / ${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`}</span>
              </div>
              <div className="flex items-center">
                <FaCog className="mr-4 cursor-pointer" />
                <FaClosedCaptioning className="mr-4 cursor-pointer" />
                <FaExpand className="mr-4 cursor-pointer" onClick={toggleFullscreen} />
                <FaCompress className="cursor-pointer" onClick={toggleFullscreen} />
              </div>
            </div>
          </div>
        )}

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 text-white p-2 bg-opacity-50 bg-black rounded-full"
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
