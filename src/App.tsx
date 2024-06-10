import React, { FunctionComponent } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainView from "./components/balance-sheet/main-view";

const App: FunctionComponent = () => {
  return (
    <div className="App" data-testid="App">
      <Routes>
        <Route path="/" element={<MainView />} key="/" />
      </Routes>
    </div>
  );
};

export default App;
