import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AllLaunches from "../AllLaunches/AllLaunches";

const Dashboard = () => {
  const history = useHistory();
  const callDashboardPage = async () => {
    try {
      const res = await fetch("/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callDashboardPage();
  }, []);
  return (
    <div>
    <AllLaunches/>
    </div>
  );
};

export default Dashboard;
