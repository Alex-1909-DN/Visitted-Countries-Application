import React, { useState } from "react";
import axios from "axios";

function Addingcountry() {
  const [country, setCountryName] = useState("");
  const [message, setMessage] = useState("Enter country name");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/add", {
        country,
      });

      if (response.data.status === "success") {
        setMessage("Country has been added successfully!");
      } else if (response.data.status === "exists") {
        setMessage("Country already exists in visited countries.");
      } else {
        setMessage("Country name does not exist, try again.");
      }
      setCountryName("");
    } catch (error) {
      console.error("Error adding country:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="country"
        value={country}
        onChange={(e) => setCountryName(e.target.value)}
        placeholder={message}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Addingcountry;
