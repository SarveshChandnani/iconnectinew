import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import "./posting.css"

const Posting = () => {
 
const [userData , setUserData] = useState({});

  useEffect(() => {
    callMainPage();
  }, []);

  const callMainPage = async () => {
    try {
      const res = await fetch("/mainscreen", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };
  const navigate = useNavigate();

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
      
      // console.log(values);

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
            const userID = userData._id;
             console.log(userID);
            const res = await fetch('/posting', {
               method : "POST",
               headers : {
                 "Content-Type" : "application/json"
               },
               body: JSON.stringify({
                areaofwork , date , duration , stipend,hoursweek,typeofengagement , locationofwork,vacancy ,userID
               })
            });
    
            const data = await res.json();
    
            if(res.status === 422 || !data){
             window.alert("Invalid Registration");
             console.log("Invalid Registration");
            }else{
             window.alert("Registration Successful");
             console.log("Registration Successful");
             navigate('/MainScreen');
            }
           
         }
    
         
         
       

         return(
          <div className="posting">
              <Navbar/>
          <div className="wrapper">
          {/* <div className='adjust'> */}
            <div className='internship-header'>
              <h1>Post Internship Details</h1>
            </div>
          <div className='insidewrapper'>
           <div className="left-post">
                  <div className="fields">
                  <label>Area of work</label>
                  <select name="areaofwork" value={values.areaofwork} onChange={onChange} > 
                            <option value="">---Select---</option>
                            <option value="Software">Software</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                            
                          </select> 
                   </div>
                   
                   <div className="fields">
                  <label>Start Date</label>
                  <input type="Date" name="date" value={values.date} onChange={onChange}/>
                  </div>
  
                  <div className="fields">
                  <label>Duration</label>
                  <input type="text" name="duration" value={values.duration} onChange={onChange} />
                  </div>
  
                  <div className="fields">
                  <label>Stipend</label>
                  <select name="stipend" value={values.stipend} id="stipend"  onChange={onChange}>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
  
                          </select>
                  </div>
  
               </div>
           
           <div className="right-post">
  
               <div className="fields">
               <label>No. of hours/week</label>
                  <input type="text" name="hoursweek" value={values.hoursweek} onChange={onChange}/>
                  </div>
  
                  <div class="fields">
                          <label>Location of Work </label>
                          <select name="locationofwork"  id="locationofwork" value={values.locationofwork} onChange={onChange}>
                          <option value="" selected>--select--</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                      </div>
  
                      <div class="fields">
                          <label>Type of engagement</label>
                          <select name="typeofengagement" value={values.typeofengagement} id="typeofengagement"  onChange={onChange}>
                            <option value="" selected>--select--</option>
                            <option value="WFH">WFH</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                          </select>
                      </div>
  
                      <div className="fields">
                     <label>No. of Vacancies</label>
                     <input type="text" name="vacancy" value={values.vacancy} onChange={onChange}/>
                     </div>
  
               </div>
  </div>
       <div className='bottom'>
               <button className="btn" onClick={postData}>POST</button>
               </div>
          </div>
          {/* </div> */}
      </div>
      
      );
    
  
}


export default Posting;