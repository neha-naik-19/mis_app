import React, { Component } from "react";
import { useNavigate, Redirect, Routes, Route, Link, NavLink } from "react-router-dom";

import Topstrip from "./topstrip";
import Navbar from "./navbar";

function Selectcourse() {
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
                        <li class="active"><a href="">Logout</a></li>
                    </ul>                             
                </div>
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="main.php"><Link to='/'>HOME</Link></a></li>
                            <li class="breadcrumb-item "><a href="course_allocation.php">Course Allocation</a></li>
                            <li class="breadcrumb-item active"><a href="">Select Course</a></li>
                        </ol>
                    </nav>
                </div>
                <section id="content" class="gray-area">
                    <div class="container shortcode">
                        <div class="row">
                            <div class="col-4 container">
                                <div class="singleline">
                                    <h2>Select Course</h2>
                                    <button id="approval" onclick="openApprovalPage()"><Link to='/Courseapproval'>Request Approval</Link></button>
                                </div>
                                <table class="table table-hover">
                                    <thead>
                                        <tr style={{backgroundcolor:'white',color:'black'}}>							
                                            <th>Course Name</th>
                                            <th>Course Code</th>
                                            <th>Preferences</th>
                                            <th># of CS Students</th>
                                            <th># of Non CS Students</th>
                                            <th>Faculty Role</th>
                                            <th>Select</th>
                                        </tr>
							        </thead>
                                    <tbody>
                                        <tr>
                                            <td class="name"><input type="text" class="form-control" id="course_name" name="course_name" value="Computer Programming" readonly /></td>
                                            <td class="name"><input type="text" class="form-control" id="course_code" name="course_code" value="CSF 514" readonly /></td>							
                                            <td class="name ">
                                                <select class="form-control" id="preference">
                                                    <option value="">Select Your Preference</option>
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                </select>
                                            </td>
                                            <td class="name"><input type="number" class="form-control" id="cs" name="cs" value="CS" /></td>							
                                            <td class="name"><input type="number" class="form-control" id="non_cs" name="non_cs" value="NonCS" /></td>	
                                            <td class="name"><select id="faculty_role" class="form-control">
                                                <option value="">Select</option>
                                                <option value="Tutorials">Tutorials</option>
                                                <option value="Practical">Practical</option>
                                                <option value="Theory">Theory</option>
                                                <option value="IC">IC</option>
                                                <option value="Instructor">Instructor</option>
                                            </select>
                                            </td>
                                            <td class="name "> <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" /></td>							
                                        </tr>
                                        <tr>
                                            <td class="name"><input type="text" class="form-control" id="course_name" name="course_name" value="Computer Networks" readonly /></td>
                                            <td class="name"><input type="text" class="form-control" id="course_code" name="course_code" value="CSF 515" readonly /></td>							
                                            <td class="name ">
                                                <select class="form-control" id="preference" name="preference">
                                                    <option value="">Select Your Preference</option>
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                </select>
                                            </td>
                                            <td class="name"><input type="number" class="form-control" id="cs" name="cs" value="CS" /></td>							
                                            <td class="name"><input type="number" class="form-control" id="non_cs" name="non_cs" value="NonCS" /></td>	
                                            <td class="name"><select id="faculty_role" class="form-control">
                                                <option value="">Select</option>
                                                <option value="Tutorials">Tutorials</option>
                                                <option value="Practical">Practical</option>
                                                <option value="Theory">Theory</option>
                                                <option value="IC">IC</option>
                                                <option value="Instructor">Instructor</option>
                                            </select>
                                            </td>
                                            <td class="name "> <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" /></td>							
							            </tr>
                                        <tr>
                                            <td class="name"><input type="text" class="form-control" id="course_name" name="course_name" value="Computer Architecture" readonly /></td>
                                            <td class="name"><input type="text" class="form-control" id="course_code" name="course_code" value="CSF 516" readonly /></td>							
                                            <td class="name ">
                                                <select class="form-control" id="preference" name="preference">
                                                    <option value="">Select Your Preference</option>
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                </select>
                                            </td>
                                            <td class="name"><input type="number" class="form-control" id="cs" name="cs" value="CS" /></td>							
                                            <td class="name"><input type="number" class="form-control" id="non_cs" name="non_cs" value="NonCS" /></td>	
                                            <td class="name"><select id="faculty_role" class="form-control">
                                                <option value="">Select</option>
                                                <option value="Tutorials">Tutorials</option>
                                                <option value="Practical">Practical</option>
                                                <option value="Theory">Theory</option>
                                                <option value="IC">IC</option>
                                                <option value="Instructor">Instructor</option>
                                            </select>
                                            </td>
                                            <td class="name "> <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" /></td>							
							            </tr>
                                        <tr>
                                            <td class="name"><input type="text" class="form-control" id="course_name" name="course_name" value="Compilers" readonly /></td>
                                            <td class="name"><input type="text" class="form-control" id="course_code" name="course_code" value="CSF 517" readonly /></td>							
                                            <td class="name ">
                                                <select class="form-control" id="preference" name="preference">
                                                    <option value="">Select Your Preference</option>										
                                                    <option value="1">1</option>
                                                    <option value="1">2</option>
                                                    <option value="1">3</option>
                                                </select>
                                            </td>
                                            <td class="name"><input type="number" class="form-control" id="cs" name="cs" value="CS" /></td>							
                                            <td class="name"><input type="number" class="form-control" id="non_cs" name="non_cs" value="NonCS" /></td>	
                                            <td class="name"><select id="faculty_role" class="form-control">
                                                <option value="">Select</option>
                                                <option value="Tutorials">Tutorials</option>
                                                <option value="Practical">Practical</option>
                                                <option value="Theory">Theory</option>
                                                <option value="IC">IC</option>
                                                <option value="Instructor">Instructor</option>
                                            </select>
                                            </td>
                                            <td class="name "> <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" /></td>							
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
  }
  
  export default Selectcourse;