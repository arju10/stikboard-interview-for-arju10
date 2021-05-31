import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

const SignleLaunch = () => {
  const { flight_number } = useParams();
  console.log(flight_number);
  const [singleLaunch, setSingleLaunch] = useState({});
  console.log(singleLaunch);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
      .then((res) => res.json())
      .then((data) => setSingleLaunch(data));
  }, []);

  return (
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="container">
        <div class="d-flex justify-content-center">
          <div className="bg-light">
            <h4>Flight Number : {singleLaunch.flight_number}</h4>
            <h4>Mission Name : {singleLaunch.mission_name}</h4>
            <h4>Launch Date : {singleLaunch.launch_date_utc}</h4>
            <p> Details : {singleLaunch.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignleLaunch;
