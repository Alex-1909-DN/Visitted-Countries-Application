import React from "react";
import Allcountries from "./Allcountries";
import Totalvisitedcountries from "./Totalvisitedcountries";
import Addingcountry from "./Addingcountryform";

function App() {
  return (
    <div className="App">
      <Addingcountry
        type="text"
        name="country"
        autofocus
        placeholder="Enter country name"
      />
      <Allcountries />
      <Totalvisitedcountries />
    </div>
  );
}

export default App;
