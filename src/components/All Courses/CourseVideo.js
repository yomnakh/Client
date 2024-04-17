// // import { useState, useEffect } from "react";
// // import { Accordion } from "react-bootstrap";
// // import axios from "axios";

// // const CourseVideo = () => {
// //   const [selectedVideo, setSelectedVideo] = useState(null);
// //   const [playlistVideos, setPlaylistVideos] = useState([]);

// //   useEffect(() => {
// //     // Function to fetch playlist videos
// //     const fetchPlaylistVideos = async () => {
// //       try {
// //         const playlistId = "PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA"; // Replace with your YouTube playlist ID
// //         const apiKey = "AIzaSyA78gCg5xNX3rwoq529yqWsLADzwqwr0xg"; // Replace with your YouTube API key

// //         const response = await axios.get(
// //           `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=28&playlistId=${playlistId}&key=${apiKey}&hl=en`
// //         );

// //         const videos = response.data.items.map((item) => ({
// //           id: item.snippet.resourceId.videoId,
// //           title: item.snippet.title,
// //         }));


// //         setPlaylistVideos(videos);
// //       } catch (error) {
// //         console.error("Error fetching playlist videos:", error);
// //       }
// //     };

// //     fetchPlaylistVideos();
// //   }, []);

// //   return (
// //     <div className="course-container">
// //       <div className="row align-content-center mx-auto" >
// //         <div className="video-player-container col-9 d-flex justify-content-center">
// //           <div className="video-player">
// //             {selectedVideo && (
// //               <iframe
// //                 width="750"
// //                 height="450"
// //                 src={`https://www.youtube.com/embed/${selectedVideo}`}
// //                 frameBorder="0"
// //                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
// //                 allowFullScreen
// //                 title="YouTube Video Player"
// //               ></iframe>
// //             )}
// //           </div>
// //         </div>
// //         <div className="side-video-content col-3" style={{overflowY:"scroll", position:"sticky"}}>
// //           <div className="course-sidebar-head">
// //             <h2>The Complete HTML course for Beginners from zero to hero</h2>
// //           </div>
// //           <ul className="fixed-video-list">
// //             {playlistVideos.map((video) => (
// //               <li key={video.id} onClick={() => setSelectedVideo(video.id)}>
// //                 {video.title}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CourseVideo;


import { useState, useEffect } from "react";
import axios from "axios";

const CourseVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [videoTitle, setVideoTitle] = useState(""); // State to hold the title of the selected video

  useEffect(() => {
    // Function to fetch playlist videos
    const fetchPlaylistVideos = async () => {
      try {
        const playlistId = "PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA"; // Replace with your YouTube playlist ID
        const apiKey = "AIzaSyA78gCg5xNX3rwoq529yqWsLADzwqwr0xg"; // Replace with your YouTube API key

        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=28&playlistId=${playlistId}&key=${apiKey}`
        );

        const videos = response.data.items.map(async (item) => {
          const videoId = item.snippet.resourceId.videoId;
          const videoResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
          );
          const englishTitle =
            videoResponse.data.items[0].snippet.localized.title;
          return {
            id: videoId,
            title: englishTitle,
          };
        });

        const resolvedVideos = await Promise.all(videos);

        setPlaylistVideos(resolvedVideos);
      } catch (error) {
        console.error("Error fetching playlist videos:", error);
      }
    };

    fetchPlaylistVideos();
  }, []);

  useEffect(() => {
    // Set the title of the selected video
    if (selectedVideo) {
      const video = playlistVideos.find((video) => video.id === selectedVideo);
      if (video) {
        setVideoTitle(video.title);
      }
    }
  }, [selectedVideo, playlistVideos]);

  return (
    <div className="course-container">
      <div className="row align-content-center mx-auto text-start rowVideo">
        <div className="col-12">
          <h5>{videoTitle}</h5> {/* Display the title above the video */}
        </div>
        <div className="col-8">
          <div className="video-player">
            {selectedVideo && (
              <iframe
                width="750"
                height="450"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Player"
              ></iframe>
            )}
            {/* <Link to=""> */}
            <button className="next_video">Next Video</button>
            {/* </Link> */}
          </div>
        </div>
        <div
          className="side-video-content col-4"
          style={{
            height: "100vh",
            overflow: "scroll",
            position: "static",
            top: 0,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom:"120px"
          }}
        >
          <div className="course-sidebar-head">
            <h2 className="playlist_header">The Complete HTML course for Beginners from zero to hero</h2>
          </div>
          <ul className="fixed-video-list ">
            {playlistVideos.map((video) => (
              <li key={video.id} onClick={() => setSelectedVideo(video.id)}>
                {video.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
