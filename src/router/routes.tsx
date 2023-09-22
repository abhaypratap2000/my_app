import React from "react";
import { RouteType } from '../types/Navbar.types';
const Pricing = React.lazy(()=> import('../components/Pricing/Pricing'))
const Blogs = React.lazy(()=>import('../components/Blogs/Blogs'))
const AboutUs = React.lazy(()=>import('../components/AboutUs/AboutUs'))
const Login = React.lazy(()=>import('../components/Login/Login'))
const SignUp = React.lazy(()=>import('../components/SignUp/SignUp'))
const Chart = React.lazy(()=>import ( "../components/Chart/Chart"))
const Dashboard = React.lazy(()=>import('../components/Dashboard/Dashboard'))
const OTPVerification = React.lazy(()=>import('../components/SignUp/otpVarification'))

const ROUTES:Array<RouteType> = [
  {
    name:"otpverification",
    path:"/otpverification",
    Component:OTPVerification

  },

  {
    name:"dashboard",
    path:"/dashboard",
    Component:Dashboard

  },

 {
  name:"chart",
  path:"/chart",
  Component:Chart
 }, 

{
  name:"pricing",
  path:"/pricing",
  Component:Pricing

},
{
  name:"blogs",
  path:"/blogs",
  Component:Blogs
},
{
  name:'aboutUs',
  path:"/aboutus",
  Component:AboutUs
},
{
  name:'logIn',
  path:"/logIn",
  Component:Login
},
{
  name:'signUp',
  path:"/signUp",
  Component:SignUp
}


]
export default ROUTES;

