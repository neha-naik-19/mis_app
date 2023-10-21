
import React, { Component } from "react";
import { useNavigate, Redirect, Routes, Route, Link, NavLink } from "react-router-dom";

import Topstrip from "./topstrip";
import Navbar from "./navbar";

class Courseapproval extends React.Component {

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
          <header id="header" class="navbar-static-top">
              <Topstrip />
              <Navbar />
          </header>
          <div class="page-title-container">
            <div class="container">
                <div class="page-title pull-left">
                    <h2 class="entry-title">Welcome</h2>
                </div>
                <ul class="breadcrumbs pull-right">
                    <li><a href="main.php"><Link to='/'>HOME</Link></a></li> 
                    <li class="active"><a href="logout.php">Logout</a></li>
                </ul>                             
            </div>
          </div>
          <div class="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="main.php"><Link to='/'>HOME</Link></a></li>
                  <li class="breadcrumb-item "><a href="course_allocation.php">Course Allocation</a></li>
                  <li class="breadcrumb-item">Select Course</li>
                  <li class="breadcrumb-item active">Course Approval Request</li>
              </ol>
            </nav>
		      </div>
          <section id="content" class="gray-area">
            <div class="container shortcode">
              <div class="row">
                <div class="alert alert-success" style={{color:'black'}}>
                  <strong>Success!</strong> Your Course Request has been sent to approval to HOD
                </div>

                <div class="alert alert-danger" style={{color:'black'}}>
                  <strong>Error!</strong> Something went wrong. Contact Administrator.
                </div>

                <div class="block clearfix"></div>
              </div>
            </div>
          </section>
        </div>
      );
    };
  }
  export default Courseapproval;
  
  