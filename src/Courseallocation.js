
import React, { Component } from "react";
import { useNavigate, Redirect, Routes, Route, Link, NavLink } from "react-router-dom";

import Topstrip from "./topstrip";
import Navbar from "./navbar";
import Selectcourse from "./Selectcourse";

class Courseallocation extends React.Component {

    constructor() {
      super();
      this.state = {
        message: "This is message",
      };
    }

    changeMessage = () => {
    //   alert("In");
      console.log('test message');
      this.setState({
        message: "message changed",
      });
    };
    
    render = () => {
      return (
        <div id="page-wrapper">
            <header id="header" className="navbar-static-top">
                <Topstrip />
                <Navbar />
            </header>
            <div className="page-title-container">
                <div className="container">
                    <div className="page-title pull-left">
                        <h2 className="entry-title">Welcome</h2>
                    </div>
                    <ul className="breadcrumbs pull-right">
                        <li><a href="main.php"><Link to='/'>HOME</Link></a></li> 
                        <li className="active"><a href="logout.php">Logout</a></li>
                    </ul>                             
                </div>
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="main.php"><Link to='/'>HOME</Link></a></li>
                            <li className="breadcrumb-item active"><a href="course_allocation.php">Course Allocation</a></li>
                        </ol>
                    </nav>
                </div>
                <section id="content" className="gray-area">
                    <div className="container shortcode">
                        <div className="row">
                            <a href="">
                                <div className="col-xs-6 col-sm-4 col-md-2 blue"><Link to='/Selectcourse'>Selectcourse</Link></div>
                            </a>
                            <a href="">
                                <div className="col-xs-6 col-sm-4 col-md-2 blue">Course Allotted</div>
                            </a>
                            <a href="">
                                <div className="col-xs-6 col-sm-4 col-md-2 blue">Allot Course</div>
                            </a>

                            <div className="block clearfix">
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      );
    };
  }
  export default Courseallocation;
  
  