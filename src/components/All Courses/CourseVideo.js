// import { useState, useEffect } from "react";
// import axios from "axios";

// const CourseVideo = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [playlistVideos, setPlaylistVideos] = useState([]);
//   const [videoTitle, setVideoTitle] = useState(""); // State to hold the title of the selected video

//   useEffect(() => {
//     // Function to fetch playlist videos
//     const fetchPlaylistVideos = async () => {
//       try {
//         const playlistId = "PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA"; // Replace with your YouTube playlist ID
//         const apiKey = "AIzaSyB_jr_dntXXwwv-Mox-GcGGSrtj7JVEdqw"; // Replace with your YouTube API key

//         const response = await axios.get(
//           `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=28&playlistId=${playlistId}&key=${apiKey}`
//         );

//         const videos = response.data.items.map(async (item) => {
//           const videoId = item.snippet.resourceId.videoId;
//           const videoResponse = await axios.get(
//             `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
//           );
//           const englishTitle =
//             videoResponse.data.items[0].snippet.localized.title;
//           return {
//             id: videoId,
//             title: englishTitle,
//           };
//         });

//         const resolvedVideos = await Promise.all(videos);

//         setPlaylistVideos(resolvedVideos);
//       } catch (error) {
//         console.error("Error fetching playlist videos:", error);
//       }
//     };

//     fetchPlaylistVideos();
//   }, []);

//   useEffect(() => {
//     // Set the title of the selected video
//     if (selectedVideo) {
//       const video = playlistVideos.find((video) => video.id === selectedVideo);
//       if (video) {
//         setVideoTitle(video.title);
//       }
//     }
//   }, [selectedVideo, playlistVideos]);

//   return (
//     <div className="course-container">
//       <div className="row align-content-center mx-auto text-start rowVideo">

//         <div className="col-8 vidcontainer ">
//           <div className="video-player">
//           <div className="col-8 video_title ">
//           <h4>{videoTitle}</h4> {/* Display the title above the video */}
//         </div>
//             {selectedVideo && (
//               <iframe
//                 width="750"
//                 height="450"
//                 src={`https://www.youtube.com/embed/${selectedVideo}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title="YouTube Video Player"
//               ></iframe>
//             )}
//             {/* <Link to=""> */}
//             <button className="video_btn">previous</button>
//             <button className="video_btn">Next</button>
//             {/* </Link> */}
//           </div>
//         </div>
//         <div
//           className="side-video-content col-4"
//           style={{
//             height: "100vh",
//             overflow: "scroll",
//             position: "static",
//             top: 0,
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",
//             paddingBottom:"120px"
//           }}
//         >
//           <div className="course-sidebar-head">
//             <h2 className="playlist_header">The Complete HTML course for Beginners from zero to hero</h2>
//           </div>
//           <ul className="fixed-video-list ">
//             {playlistVideos.map((video) => (
//               <li key={video.id} onClick={() => setSelectedVideo(video.id)}>
//                 {video.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div> 

//     </div> //main container


// );
// };

// export default CourseVideo;








/////////////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react";

const CourseVideo = ({ lectures , course }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Function to extract the YouTube ID from the link
  const getYoutubeId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  return (
    <div className="course-container">
      <div className="row align-content-center mx-auto text-start rowVideo">
        <div className="col-8 vidcontainer ">
          <div className="video-player">
            <div className="col-8 video_title ">
              <h4 style={{marginTop:"-85px",marginBottom:"-10px"}}>{selectedVideo ? selectedVideo.name : "Select a video"}</h4>
            </div>
            {selectedVideo && (
              <iframe
                width="750"
                height="450"
                src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo.link)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideo ? selectedVideo.name : "Video player"}
              ></iframe>
            )}
            <button className="video_btn">Previous</button>
            <button className="video_btn">Next</button>
          </div>
        </div>
        <div className="side-video-content col-4" style={{ height: "100vh", overflow: "scroll", position: "static", top: 0, scrollbarWidth: "none", msOverflowStyle: "none", paddingBottom:"120px" }}>
          <div className="course-sidebar-head">
            <h2 className="playlist_header">{course ? course.title : "Course Title"}</h2>
          </div>
          <ul className="fixed-video-list">
            {lectures.map((video) => (
              <li key={video._id} onClick={() => setSelectedVideo(video)}>
                {video.name}
              </li>
            ))}
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default CourseVideo;
