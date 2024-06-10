// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CourseVideo = ({ lectures, course }) => {
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const navigate = useNavigate();

//   const getYoutubeId = (url) => {
//     const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[7].length === 11) ? match[7] : null;
//   };
//   return (
//     <div className="course-container">
//       <div className="row align-content-center mx-auto text-start rowVideo">
//         <div className="col-8 vidcontainer">
//           <div className="video-player">
//             <div className="col-8 video_title">
//               <h4 style={{ marginTop: "-100px", marginBottom: "-10px", fontWeight: "600" }}>
//                 {selectedVideo ? selectedVideo.name : "Select a video"}
//               </h4>
//             </div>
//             {selectedVideo && (
//               <iframe
//                 width="750"
//                 height="450"
//                 src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo.link)}`}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title={selectedVideo ? selectedVideo.name : "Video player"}
//               ></iframe>
//             )}
//             <button className="video_btn">Previous</button>
//             <button className="video_btn"></button>Next</button>
//           </div>
//         </div>
//         <div
//           className="side-video-content col-4"
//           style={{
//             height: "100vh",
//             overflow: "scroll",
//             position: "fixed",
//             top: 0,
//             right: 0,
//             scrollbarWidth: "none",
//             msOverflowStyle: "none",

//           }}
//         >
//           <div className="course-sidebar-head">
//             <h2 className="playlist_header">{course ? course.title : "Course Title"}</h2>
//           </div>
//           <ul className="fixed-video-list">
//             {lectures.map((video) => (
//               <li key={video._id} onClick={() => { setSelectedVideo(video); }}>
//                 {video.name}
//               </li>
//             ))}
//             <li onClick={() => navigate(`/course-final-exam/${course._id}`)}>Final Exam</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseVideo;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseVideo = ({ lectures, course }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const navigate = useNavigate();

  // Function to extract the YouTube ID from the link
  const getYoutubeId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  const handlePrevious = () => {
    setSelectedVideoIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setSelectedVideoIndex((prevIndex) => Math.min(prevIndex + 1, lectures.length - 1));
  };

  return (
    <div className="course-container">
      <div className="row align-content-center mx-auto text-start rowVideo">
        <div className="col-8 vidcontainer">
          <div className="video-player">
            <div className="col-8 video_title">
              <h4 style={{ marginTop: "-100px", marginBottom: "-10px", fontWeight: "600" }}>
                {selectedVideoIndex !== null ? lectures[selectedVideoIndex].name : "Select a video"}
              </h4>
            </div>
            {selectedVideoIndex !== null && (
              <iframe
                width="750"
                height="450"
                src={`https://www.youtube.com/embed/${getYoutubeId(lectures[selectedVideoIndex].link)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedVideoIndex !== null ? lectures[selectedVideoIndex].name : "Video player"}
              ></iframe>
            )}
            <button className="video_btn" onClick={handlePrevious} disabled={selectedVideoIndex === 0}>Previous</button>
            <button className="video_btn" onClick={handleNext} disabled={selectedVideoIndex === lectures.length - 1}>Next</button>
          </div>
        </div>
        <div
          className="side-video-content col-4"
          style={{
            height: "100vh",
            overflow: "scroll",
            position: "fixed",
            top: 0,
            right: 0,
            scrollbarWidth: "none",
            msOverflowStyle: "none",

          }}
        >
          <div className="course-sidebar-head">
            <h2 className="playlist_header">{course ? course.title : "Course Title"}</h2>
          </div>
          <ul className="fixed-video-list">
            {lectures.map((video, index) => (
              <li key={video._id} onClick={() => { setSelectedVideoIndex(index); }}>
                {video.name}
              </li>
            ))}
            <li onClick={() => navigate(`/course-final-exam/${course._id}`)}>Final Exam</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;

