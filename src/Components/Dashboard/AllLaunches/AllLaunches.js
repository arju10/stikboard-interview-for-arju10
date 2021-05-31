import React, { useState, useEffect } from "react";

import { Link, history } from "react-router-dom";
import Header from "../Header/Header";

const AllLaunches = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches`)
      .then((res) => res.json())
      .then((data) => setLaunches(data));
  }, []);

  return (
    <div>
      <Header />

      <h1>All Launches</h1>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>No:</th>
            <th>Launched(UTC)</th>
            <th>Location</th>
            <th>Mission</th>
            <th>Orbit</th>

            <th>Rocket</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {launches.map((launche, index) => (
            <tr key={index}>
              <td>{launche.flight_number}</td>
              <td>{launche.launch_date_utc}</td>
              <td>
                {launche.launch_site.site_name && launche.launch_site.site_name}
              </td>
              <td>{launche.mission_name}</td>
              <td>{launche.rocket.second_stage.payloads[0].orbit}</td>

              <td>
                {launche.rocket.rocket_name && launche.rocket.rocket_name}
              </td>
              <td>
                <Link
                  class="read-more btn"
                  to={`/singleLaunch/${launche.flight_number}`}
                >
                  <button className="btn btn-primary">See</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllLaunches;
