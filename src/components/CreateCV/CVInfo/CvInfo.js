import './CvInfo.css'
import '../CVButtons.css'
const CvInfo = () => {
  return (
   
     <div>
        <p className='cv-subtitle'>Create CV</p>
        <span className="cv-subtitle-line"></span>
        <p className='cv-date'>6th June 2023</p>
        <h2 className='cv-heading'> Customize your cv </h2>
        <p className='cv-desc'> Here you can create your CV by answering questions and getting it <span className='break-line'>ready for download or applying to jobs through the platform.</span></p>
     </div>
    
  );
};
export default CvInfo;