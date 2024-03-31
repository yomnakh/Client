import React from 'react'
import wave from '../Assets/wave.png';
const HeaderTitles = ({title}) => {
    return (
        <div className='justify-content-center text-center'>
            <h3 className='text-center courseSection_title my-4'>{title}</h3>
            <img src={wave}  className="title_img" style={{ width: "15%", objectFit: "contain", margin: 'auto', marginTop: "-50px"  }} />
        </div>
    )
}

export default HeaderTitles;