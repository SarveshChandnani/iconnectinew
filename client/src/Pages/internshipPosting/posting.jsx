import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import "./posting.css"

const Posting = () => {
    const [values , setValues] = useState({
        areaofwork: "",
        date:"",
        duration:"",
        stipend:"",
        hoursweek:"",
        locationofwork : "",
        typeofengagement:"",
        vacancy:"",
        
      });

      let name,value;
      const onChange = (e) => {
         name = e.target.name;
         value = e.target.value;
        
          setValues({
            ...values,
            [name]: value,
          });
        };

        const postData =async (e)=>{
            e.preventDefault();
            const {areaofwork , date , duration , stipend,hoursweek,typeofengagement , locationofwork,vacancy} = values;
            
            const res = await fetch('/posting', {
               method : "POST",
               headers : {
                 "Content-Type" : "application/json"
               },
               body: JSON.stringify({
                areaofwork , date , duration , stipend,hoursweek,typeofengagement , locationofwork,vacancy
               })
            });
    
            const data = await res.json();
    
            if(res.status === 422 || !data){
             window.alert("Invalid Registration");
             console.log("Invalid Registration");
            }else{
             window.alert("Registration Successful");
             console.log("Registration Successful");
             navigate('/');
            }
           
         }
    
         const navigate = useNavigate();
         
         console.log(values);

    return(
        <div className="posting">
            <Navbar/>
        <div className="wrapper">
          
        <div className='insidewrapper'>
         <div className="left-post">
                <div className="fields>">
                <label>Area of work</label>
                <select name="areaofwork" value={values.areaofwork} onChange={onChange} > 
                          <option value="">---Select---</option>
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select> 
                 </div>
                 
                 <div className="fields>">
                <label>Start Date</label>
                <input type="Date" name="date" value={values.date} onChange={onChange}/>
                </div>

                <div className="fields>">
                <label>Duration</label>
                <input type="text" name="duration" value={values.duration} onChange={onChange} />
                </div>

                <div className="fields>">
                <label>Stipend</label><br></br>
                <select name="stipend" value={values.stipend} id="stipend"  onChange={onChange}>
                          <option value="YES">YES</option>
                          <option value="NO">NO</option>

                        </select>
                </div>

             </div>
         
         <div className="right-post">

             <div className="fields>">
             <label>No. of hours/week</label>
                <input type="text" name="hoursweek" value={values.hoursweek} onChange={onChange}/>
                </div>

                <div class="fields">
                        <label>Location of Work </label>
                        <select name="locationofwork"  id="locationofwork" value={values.locationofwork} onChange={onChange}>
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div class="fields">
                        <label>Type of engagement</label>
                        <select name="typeofengagement" value={values.typeofengagement} id="typeofengagement"  onChange={onChange}>
                          <option value="WFH">WFH</option>
                          <option value="Remote">Remote</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    <div className="fields>">
                   <label>No. of Vacancies</label>
                   <input type="text" name="vacancy" value={values.vacancy} onChange={onChange}/>
                   </div>

             </div>
</div>
             <button className="btn" onClick={postData}>POST</button>
        </div>
    </div>
    
    );
}


export default Posting;