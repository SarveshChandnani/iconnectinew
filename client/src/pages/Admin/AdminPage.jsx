import React, { useEffect , useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './Adminpage.css'
const AdminPage = () => {
  const [data, setData] = useState([]);
  const [collegeData  , setCollegeData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Companies');

useEffect(() => {
   fetchData();
}, [selectedOption]);

const fetchData = () => {
  if (selectedOption === 'Companies') {
    getUser();
  } else if (selectedOption === 'Colleges') {
    getCollege();
  }
};



 const getUser = ()=>{
  
    fetch('/allUsers', {
      method : 'GET',
     })
   .then((res) => res.json())
     .then((data)=>{
      
       setData(data);
     } )
  
    
 }
 const getCollege = ()=>{
  fetch('/allColleges', {
    method : 'GET',
   })
 .then((res) => res.json())
   .then((collegeData)=>{
    
     setCollegeData(collegeData);
   } )
 }

const deleteUser = async (companyspocemail , id)=>{
      if(window.confirm(`Are you sure you want to delet ${companyspocemail}`)){
        const res = await fetch('/deleteUser' , {
            method : 'POST',
            crossDomain : true,
            headers:{
                "Content-Type" : "application/json",
           },
           body: JSON.stringify({
            uid: id,
           }),

         });

         if(res.status === 200){
            console.log("henlooooooooooooo");
            // window.alert("Deleted");
            getUser();
         }

      }else{

      }
}

const deleteCollege = async (name , id)=>{
  if(window.confirm(`Are you sure you want to delet ${name}`)){
    const res = await fetch('/deleteCollege' , {
        method : 'POST',
        crossDomain : true,
        headers:{
            "Content-Type" : "application/json",
       },
       body: JSON.stringify({
        uid: id,
       }),

     });

     if(res.status === 200){
        console.log("henlooooooooooooo");
        // window.alert("Deleted");
        getCollege();
     }

  }else{

  }
}



const handleChange = (event) => {
  // event.preventDefault();
  setSelectedOption(event.target.value);  
};

useEffect(() => {
  fetchData();
}, []);






  return (
    <div className='container'>
    {/* <div className="card"> */}
    
    <div className='drop'>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        
        <option >Companies</option>
        <option >Colleges</option>
        <option >Students</option>
      </select>
      <p>You selected: {selectedOption}</p>
    </div>
   
   {selectedOption === 'Companies' && (
    <>
    <div >  <h5 className="card-title">User Data</h5></div>
    <div className="card-body">
    
    
    <table className='styled-table'>
        <thead>
        <tr>
            <th>SPOC Email</th>
            <th>Company Name</th>
            <th>SPOC Name</th>
            <th>SPOC Phone</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {data.map(user => {
            return(
                <tr id = {user._id}>
                     <td>{user.companyspocemail}</td>
                    <td>{user.companyname}</td>
                    <td>{user.companyspocname}</td>
                    <td>{user.companyspocphone}</td>
                    <td>
                    <FontAwesomeIcon icon={faTrash} onClick={()=> deleteUser(user.companyspocemail , user._id)}/>
                    
                    </td>
                </tr>
            )
        })}
        </tbody>
    </table>

    </div>
    </>
   )}

   {selectedOption === 'Colleges' && (
    <>
    <div >  <h5 className="card-title">College Data</h5></div>
    <div className="card-body">
    
    
    <table className='styled-table'>
        <thead>
        <tr>
            <th>Name</th>
            <th>College Name</th>
            <th>College Address</th>
            <th>SPOC Name</th>
            <th>SPOC Email</th>
            <th>SPOC Phone</th>
            <th>Colleger Registration ID</th>
            <th>Degree Offered</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {collegeData.map(college => {
            return(
                <tr id={college._id}>
                    <td>{college.username}</td>
                    <td>{college.collegename}</td>
                    <td>{college.collegeaddress}</td>
                    <td>{college.collegespocname}</td>
                    <td>{college.collegespocemail}</td>
                    <td>{college.collegespocphone}</td>
                    <td>{college.collegeregid}</td>
                    <td>{college.degreeoffered}</td>
                    <td>
                    <FontAwesomeIcon icon={faTrash} onClick={()=> deleteCollege(college.username , college._id)} />
                    
                    </td>
                </tr>
            )
        })}
        </tbody>
    </table>

    </div>
    </>
   )}

    

        </div>
    
  )
}

export default AdminPage