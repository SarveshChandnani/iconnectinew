import React from 'react';
import Home from './pages/home/home';
import  {Routes ,Route} from 'react-router-dom';
import Register from "./pages/register/register";
import Activation from './pages/Activation/Activation';
import MainScreen from './pages/mainScreen/MainScreen';


function App() {
	return (
		<div>
		
		<Routes>

			<Route path='/' element={<Home/>}> </Route>
			<Route path='MainScreen/Activation' element={<Activation/>}> </Route>
			<Route path='/Register' element={<Register/>}> </Route>
			<Route path='/MainScreen' element={<MainScreen/>}> </Route>

		</Routes >
		
		</div>
	);
}

export default App;