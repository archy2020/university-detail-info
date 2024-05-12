import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListView from "./components/ListView/ListView";
import DetailView from "./components/DetailView/DetailView";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/university/:name" element={<DetailView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
