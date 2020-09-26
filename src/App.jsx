import React from "react";
import "./styles.css";
import Home from "./UseCalback";

export default function App() {
  // const [kelas, setKelas] = React.useState();
  return (
    <div className="App mt-3">
      {/* <button onClick={() => setKelas("XII RPL")}>click</button> */}
      <div>
        <Home kelas="XII RPL" />
      </div>
    </div>
  );
}
