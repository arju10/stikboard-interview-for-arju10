import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 ">
          <div className="dropdown flex">
            <Link
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Month
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" href="#">
                  last 6 Months
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  last 12 months
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                 last 24 months
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dropdown">
            <Link
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Launches
            </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/dashboard/launches">
                  All Launches
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/upcomingLaunch">
                  Upcomming Launches
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Successfull Launches
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Failed Launches
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
