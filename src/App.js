import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import "./index.css";
import Summary from "./components/Summary";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [data, setData] = useState([]);
  const showDetails = async () => {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    setData(res.data);
  };
  useEffect(() => {
    showDetails();
  });
  const [index, setIndex] = useState();
  const IndexNumber = (index) => {
    setIndex(index);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Title dataSecond={data} onSelect={IndexNumber}></Title>}
          />
          <Route
            path="/summary"
            element={<Summary dataFirst={data} sumIndex={index}></Summary>}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
