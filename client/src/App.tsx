import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Fib from "./Fib";
import { Route, Link, Routes } from "react-router-dom";
import OtherPage from "./OtherPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HelloSite</h1>
        <div>
          <Link to="/">Home {"  "}</Link>
          <Link to="/otherpage">Other Page</Link>
        </div>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
