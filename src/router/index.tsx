import { Suspense } from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Pricing from '../components/Pricing/Pricing';
import Blogs from '../components/Blogs/Blogs';
import AboutUs from '../components/AboutUs/AboutUs';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import Index from '../components/Todo/Index'
import Chart from '../components/Chart/Chart'
import Dashboard from '../components/Dashboard/Dashboard';
import OTPVerification from '../components/SignUp/otpVarification';
function RoutesWrapper() {
  
  return (
    <Suspense>
     <Routes>
      <Route path = "/" element = {<Index/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path = '/blogs' element={<Blogs/>}/>
        <Route path='/aboutus' element = {<AboutUs/>}/>
        <Route path = '/logIn' element = {<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/chart' element={<Chart/>}/>
        <Route path = '/dashboard' element={<Dashboard/>}/>
        <Route path = '/otpverification' element={<OTPVerification/>}/>
      </Routes>
   </Suspense>
  );
}

export default RoutesWrapper;


