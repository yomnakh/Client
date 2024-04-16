import { Accordion, Button } from "react-bootstrap";

const CourseVideo = () => {
  return (
    <div>
      <div>
        <div className="course-video-header">
          <div className="left-video-header">
            <Button
              className="video-header-btn m-3"
              variant="primary"
            >
              <i class="fas fa-arrow-left"></i>
              Next Video
            </Button>

            <i class="fas fa-cog"></i>
          </div>
          {/* left-video-header */}
          <div className="right-video-header">
            <i class="fa-regular fa-house i-house"></i>
          </div>
        </div>
        {/* course-video-header */}
      </div>

      <div>
        <div className="course-video-body">
          <div className="video-play">
            <h2 className="course-heading">
              1- What will you learn in this course?
            </h2>
            <iframe src="https://www.youtube.com/watch?v=Wvb28Iucq9g&list=PL5gCk5NdNx58jcohY_gnMR2WI1Lhl2uNK&index=29" width={600} height={330} style={{display:"block"}}></iframe>

            <Button
              className="video-header-button m-3 vid-head-btn2"
              variant="primary"
            >
              <i class="fas fa-arrow-left"></i>
              Next Video
            </Button>
          </div>
          <div className="side-video-content">
            <div className="course-sidebar-head">
              <h2>
                The Complete HTML course for Beginners from zero to hero
              </h2>
            </div>
            {/* course-sidbar-head */}

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  1- Introduction
                </Accordion.Header>
                <Accordion.Body>
                <ul className="">
                    <li className="lesson">1- What will you learn in this course?</li>
                    <li className="lesson">2- Downlaod VScode</li>
                    <li className="lesson">3- Creating Website Files</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>2- Section 1</Accordion.Header>
                <Accordion.Body>
            Lorem Ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore mag
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          {/* side-video-content */}
        </div>
        {/* course-video-body */}
      </div>
    </div>
  );
};

export default CourseVideo;
