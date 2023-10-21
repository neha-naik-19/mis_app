import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

import App from './App';
import Courseupload from './Courseupload';
import Courseallocation from './Courseallocation';
import reportWebVitals from './reportWebVitals';
import Selectcourse from "./Selectcourse";
import Courseapproval from "./Courseapproval";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Courseallocation />
  // </React.StrictMode>

  <Router basename={"/"}>
    <Routes>
      <Route path="/" exact strict element={<Courseallocation />} />
      <Route exact path="/selectcourse" element={<Selectcourse />} />
      <Route path="/Courseapproval" exact strict element={<Courseapproval />} />
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
