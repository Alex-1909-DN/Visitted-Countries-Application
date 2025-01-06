import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Totalvisitedcountries() {
  const [totalVisitedCountries, settotalVisitedCountries] = useState([]);

  useEffect(() => {
    const fetchVisitedCountries = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/visited");

        settotalVisitedCountries(response.data.length);
      } catch (error) {
        console.error("Error fetching visited countries:", error);
      }
    };
    fetchVisitedCountries();
  }, []);
  return (
    <div>
      <h2 className="total-count">Total Countries: {totalVisitedCountries}</h2>
    </div>
  );
}

export default Totalvisitedcountries;
