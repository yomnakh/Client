import React, { useEffect, useState } from "react";
import "./Road.css";
import { data } from "../Data";
import { Fragment } from "react";
import cap from '../../Assets/cap.png'
import { Link } from "react-router-dom";
const Front = () => {
  const [tracks, setTracks] = useState(data[1]);
  useEffect(() => {
    setTracks([...data[1]]);
  }, []);

  return (
    <div className="container-fluid ">
      <div className="col">
        <div className="road-header">
          <div className="d-flex justify-content-center align-content-center">
            <img src={cap} className="header-img" />
            <h2 className="header-map">Front End</h2>
          </div>
          <p className="road-des">
            If you want to become a strong Front End, you must follow this map
            in order.
          </p>
        </div>
      </div>
      {tracks.length >= 1 ? (
        tracks.map((track) => {
          return (
            <Fragment>
              <div className="row px-5 mb-3 mt-3" key={track.id}>
                <div className="col-md-1 col-lg-1 icon-col">
                  <div className=" mt-4 p-1 text-center">
                    <i class={track.icon} ></i>
                  </div>
                </div>
                <div className="col-md-11 col-lg-11 jump-col col-sm-12">
                  <div class="mt-2 px-5 py-4 bg-light shadow rounded jump">
                    <h2 className="jumpheader mb-2">{track.title}</h2>
                    <p className="mt-2">{track.info}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })
      ) : (
        <h2>nbgfrerte</h2>
      )}
    </div>
  );
};

export default Front;
