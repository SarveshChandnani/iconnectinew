// import React from "react";

// import "./profileActivate.css"

// function ProfileActivate(){
//     return(

//     <div className="activation">

//         {/* <div className="wrapper"> */}

//         <form className="signup-form">
//             {/* <!-- FORM HEADER --> */}
//             <div className="form-header">
//                 <h1>Account Activation</h1>
//             </div>
//             {/* <!-- FORM BODY --> */}
//             <div className="form-body">

//                 <div className="row">
//                     <div className="input-group">
//                         <label>Website Information </label>
//                         <input type="text" placholder="Enter your first name"/>
//                     </div>
//                     <div class="input-group">
//                         <label>Company registration no.</label>
//                         <input type="text" placholder="Enter your last name"/>
//                     </div>
//                 </div>

//                 <div class="row">
//                     <div class="input-group">
//                         <label>Area of work </label>
//                         <select name="cars" id="cars">
//                           <option value="volvo">Volvo</option>
//                           <option value="saab">Saab</option>
//                           <option value="mercedes">Mercedes</option>
//                           <option value="audi">Audi</option>
//                         </select>
//                     </div>
//                     <div class="input-group">
//                         <label>Location of work</label>
//                         <select name="cars" id="cars">
//                           <option value="volvo">Volvo</option>
//                           <option value="saab">Saab</option>
//                           <option value="mercedes">Mercedes</option>
//                           <option value="audi">Audi</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div class="row">
//                     <div class="input-group">
//                         <label>Password </label>
//                         <input type="password" placholder="Enter your your password"/>
//                     </div>
//                     <div class="input-group">
//                         <label>Confirm Password</label>
//                         <input type="password" placholder="Enter your password again"/>
//                     </div>
//                 </div>

//                 <div class="row">
//                     <div class="input-group">
//                         <label>Password </label>
//                         <input type="password" placholder="Enter your your password"/>
//                     </div>
//                     <div class="input-group">
//                         <label>Confirm Password</label>
//                         <input type="password" placholder="Enter your password again"/>
//                     </div>
//                 </div>

//                 </div>

//                 <div class="form-footer">
//                 <button class="btn">Create</button>
//             </div>
//                 </form>
//         </div>

//     );
// }

// export default ProfileActivate;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profileActivate.css";

const ProfileActivate = () => {
  const [values, setValues] = useState({
    websiteinfo: "",
    industrytype: "",
    areaofwork: "",
    registeredoffice: "",
    companyregno: "",
    currentlocation: "",
    locationofwork: "",
    employeecount: "",
  });

  let name, value;
  const onChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const {
      websiteinfo,
      industrytype,
      areaofwork,
      registeredoffice,
      companyregno,
      currentlocation,
      locationofwork,
      employeecount,
    } = values;

    const res = await fetch("/activation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        websiteinfo,
        industrytype,
        areaofwork,
        registeredoffice,
        companyregno,
        currentlocation,
        locationofwork,
        employeecount,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/InternshipPosting");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="activation">
      {/* <div className="wrapper"> */}

      <form className="signup-form" method="POST">
        {/* <!-- FORM HEADER --> */}
        <div className="form-header">
          <h1>Account Activation</h1>
        </div>
        {/* <!-- FORM BODY --> */}
        <div className="form-body">
          <div className="row">
            <div className="input-group">
              <label>Website Information </label>
              <input
                type="text"
                name="websiteinfo"
                value={values.websiteinfo}
                placholder="Enter your first name"
                onChange={onChange}
              />
            </div>
            <div class="input-group">
              <label>Industry Type</label>
              <select
                name="industrytype"
                value={values.industrytype}
                id="industrytype"
                onChange={onChange}
              >
                <option value="pvt">pvt</option>
                <option value="Govt">Govt</option>
                <option value="Public">Public</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="input-group">
              <label>Area of work </label>
              <select
                name="areaofwork"
                value={values.areaofwork}
                id="areaofwork"
                onChange={onChange}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="input-group">
              <label>Registered Office</label>
              <input
                type="text"
                name="registeredoffice"
                value={values.registeredoffice}
                placeholder="Registered Office"
                onChange={onChange}
              />
            </div>
          </div>

          <div class="row">
            <div class="input-group">
              <label>Company Registration No. </label>
              <input
                type="text"
                name="companyregno"
                value={values.companyregno}
                placholder="Enter your your password"
                onChange={onChange}
              />
            </div>
            <div class="input-group">
              <label>Current Location</label>
              <input
                type="text"
                name="currentlocation"
                value={values.currentlocation}
                placholder="Current Location"
                onChange={onChange}
              />
            </div>
          </div>

          <div class="row">
            <div class="input-group">
              <label>Location of Work </label>
              <select
                name="locationofwork"
                value={values.locationofwork}
                id="locationofwork"
                onChange={onChange}
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div class="input-group">
              <label>No. of Employees</label>
              <input
                type="text"
                name="employeecount"
                value={values.employeecount}
                placholder="Enter your password again"
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <div class="form-footer">
          <button class="btn" onClick={postData}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileActivate;
