// import { Accordion, Button } from "react-bootstrap";

// const CourseVideo = () => {
//   return (
//     <div>
//       <div>
//         <div className="course-video-header">
//           <div className="left-video-header">
//             <Button
//               className="video-header-btn m-3"
//               variant="primary"
//             >
//               <i class="fas fa-arrow-left"></i>
//               Next Video
//             </Button>

//             <i class="fas fa-cog"></i>
//           </div>
//           {/* left-video-header */}
//           <div className="right-video-header">
//             <i class="fa-regular fa-house i-house"></i>
//           </div>
//         </div>
//         {/* course-video-header */}
//       </div>

//       <div>
//         <div className="course-video-body">
//           <div className="video-play">
//             <h2 className="course-heading">
//               1- What will you learn in this course?
//             </h2>
// {/**        <iframe src="https://www.youtube.com/watch?v=Wvb28Iucq9g&list=PL5gCk5NdNx58jcohY_gnMR2WI1Lhl2uNK&index=29" width={600} height={330} style={{display:"block"}}></iframe>
//  */}
//             <Button
//               className="video-header-button m-3 vid-head-btn2"
//               variant="primary"
//             >
//               <i class="fas fa-arrow-left"></i>
//               Next Video
//             </Button>
//           </div>
//           <div className="side-video-content">
//             <div className="course-sidebar-head">
//               <h2>
//                 The Complete HTML course for Beginners from zero to hero
//               </h2>
//             </div>
//             {/* course-sidbar-head */}

//             <Accordion>
//               <Accordion.Item eventKey="0">
//                 <Accordion.Header>
//                   1- Introduction
//                 </Accordion.Header>
//                 <Accordion.Body>
//                 <ul className="">
//                     <li className="lesson">1- What will you learn in this course?</li>
//                     <li className="lesson">2- Downlaod VScode</li>
//                     <li className="lesson">3- Creating Website Files</li>
//                   </ul>
//                 </Accordion.Body>
//               </Accordion.Item>
//               <Accordion.Item eventKey="1">
//                 <Accordion.Header>2- Section 1</Accordion.Header>
//                 <Accordion.Body>
//             Lorem Ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag
//                 </Accordion.Body>
//               </Accordion.Item>
//             </Accordion>
//           </div>
//           {/* side-video-content */}
//         </div>
//         {/* course-video-body */}
//       </div>
//     </div>
//   );
// };

// export default CourseVideo;


import React, { useState, useEffect } from 'react';
import { Accordion, Button } from "react-bootstrap";

const CourseVideo = () => {
  // YouTube Playlist ID
  const playlistId = "PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA";
  const [videoIndex, setVideoIndex] = useState(0);
  const [player, setPlayer] = useState(null);
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    // Function to load the YouTube IFrame Player API asynchronously
    const loadYTApi = () => {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    // Setting up the API ready callback
    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };

    loadYTApi();

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Only create the player if the API is ready
    if (apiReady && !player) {
      const newPlayer = new window.YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
          listType: 'playlist',
          list: playlistId,
          enablejsapi: 1,
          origin: window.location.origin
        },
        events: {
          'onReady': onPlayerReady,
        }
      });
      setPlayer(newPlayer);
    }
  }, [apiReady]); // This effect depends on apiReady

  const onPlayerReady = (event) => {
    event.target.playVideoAt(videoIndex);
  };

  const handleVideoChange = (index) => {
    if (player) {
      player.playVideoAt(index);
      setVideoIndex(index);
    }
  };

  return (
    <div>
      <div className="course-video-body">
        <div className="video-play">
          <div id="player"></div>
        </div>
        <div className="side-video-content">
          <div className="course-sidebar-head">
            <h2>The Complete HTML course for Beginners from zero to hero</h2>
          </div>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>1- Introduction</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {/* Placeholder for lessons list */}
                  <li className="lesson" onClick={() => handleVideoChange(0)}>Introduction Video</li>
                  <li className="lesson" onClick={() => handleVideoChange(1)}>Next Video</li>
                  <li className="lesson" onClick={() => handleVideoChange(2)}>Next Video</li>
                  <li className="lesson" onClick={() => handleVideoChange(3)}>Next Video</li>
                  <li className="lesson" onClick={() => handleVideoChange(4)}>Next Video</li>
                  <li className="lesson" onClick={() => handleVideoChange(5)}>Next Video</li>
                  <li className="lesson" onClick={() => handleVideoChange(6)}>Next Video</li>
                  <li className="lesson" onClick={() => handleVideoChange(7)}>Next Video</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div id="player"></div>
    </div>
    
  );
};

export default CourseVideo;

