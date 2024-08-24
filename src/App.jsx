import "./app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRouters from "./router";

function App() {
  //  Remember to write className instead of class
  return (
    <div>
      <AllRouters />
    </div>
  );
}

export default App;
