



import React from 'react';
import Home from './Pages/home/home';
import  {Routes ,Route} from 'react-router-dom';
import Register from "./Pages/register/register";
import Activation from './Pages/Activation/Activation';
import MainScreen from './Pages/mainScreen/MainScreen';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminPage from './Pages/Admin/AdminPage';
import CollegeRegister from './Pages/collegeRegistration/collegeRegister';
import Posting from './Pages/internshipPosting/posting';


function App() {
	return (
		<div>
		
		<Routes>

			<Route path='/' element={<Home/>}> </Route>
			<Route path='MainScreen/Activation' element={<Activation/>}> </Route>
			<Route path='/Register' element={<Register/>}> </Route>
			<Route path='/MainScreen' element={<MainScreen/>}> </Route>
            <Route path='/AdminLogin' element={<AdminLogin/>}> </Route>
			<Route path='/AdminLogin/AdminPage' element={<AdminPage/>}> </Route>
			<Route path='/CollegeRegister' element={<CollegeRegister/>}> </Route>
			<Route path='/InternshipPosting' element={<Posting/>}> </Route>
		</Routes >
		
		</div>
	);
}

export default App;