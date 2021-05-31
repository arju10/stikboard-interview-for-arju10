import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const UpcomingLaunch = () => {
    const [upcomingLaunches, setUpcomingLaunch ] = useState([]);

    useEffect(() => {
fetch("https://api.spacexdata.com/v3/launches/upcoming")
.then(res => res.json())
.then(data => setUpcomingLaunch(data))
    },[])
    return (
        <div>
      <Header />
      

      <h3>Upcoming Launches</h3>

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
          {upcomingLaunches.map((upcomingLaunche, index) => (
            <tr key={index}>
              <td>{upcomingLaunche.flight_number}</td>
              <td>{upcomingLaunche.launch_date_utc}</td>
              <td>
                {upcomingLaunche.launch_site.site_name && upcomingLaunche.launch_site.site_name}
              </td>
              <td>{upcomingLaunche.mission_name}</td>
              <td>{upcomingLaunche.rocket.second_stage.payloads[0].orbit}</td>

              <td>
                {upcomingLaunche.rocket.rocket_name && upcomingLaunche.rocket.rocket_name}
              </td>
              <td>
                <Link
                  class="read-more btn"
                  to={`/singleLaunch/${upcomingLaunche.flight_number}`}
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

export default UpcomingLaunch;