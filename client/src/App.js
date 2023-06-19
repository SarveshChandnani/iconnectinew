



import React from 'react';
import Home from './pages/home/home';
import  {Routes ,Route} from 'react-router-dom';
import Register from "./pages/register/register";
import Activation from './pages/Activation/Activation';
import MainScreen from './pages/mainScreen/MainScreen';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminPage from './pages/Admin/AdminPage';
import CollegeRegister from './pages/collegeRegistration/collegeRegister';


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
		</Routes >
		
		</div>
	);
}

export default App;