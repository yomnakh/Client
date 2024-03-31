import React, { useEffect, useState } from 'react';
import { stepperData } from './data';
import { NavLink, useLocation } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CreateCVStipper({ data }) {
  const [activePage, setActivePage] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // handel change index in stepper depends location.pathname
  const location = useLocation();
  useEffect(() => {
    const activePageIndex = stepperData.findIndex((step) =>
      location.pathname.includes(step.link)
    );
    setActivePage(activePageIndex);
    swiperInstance?.slideTo(activePage, 300);
  }, [location.pathname, activePage, swiperInstance]);

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  return (
    <section className="container-fluid container-fluid-0">
      <div className="stepper-container bg_black-opc py-7 px-7 rounded">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          onSwiper={handleSwiperInit}
          initialSlide={activePage}
          centeredSlides={true}
          centeredSlidesBounds={true}
        >
          {stepperData?.map((step) => (
            <SwiperSlide key={step.id}>
              <NavLink
                to={`/createcv/${step.link}`}
                className="step d-flex gap-3 align-items-center underline-none "
              >
                <div className="step d-flex gap-3 align-items-center">
                  <div
                    className={`step-button outline-indicator btn-indicator
									${step.id <= activePage + 1 ? 'createcv-active' : ''} `}
                  >
                    {step.id}
                  </div>
                  <h5 className="text-light fw-normal m-0">{step.title}</h5>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default CreateCVStipper;
