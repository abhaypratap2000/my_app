import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from './router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from './Hooks/UsedTypeSelector';
import { useEffect } from 'react';
import { setUser } from './app/slices/AuthSlice/authSlice';
function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user" )|| "{}");

  useEffect(()=>{
   dispatch(setUser(user));
  },[])



  return (
    <div className="App">
       <BrowserRouter> 
       <ToastContainer />
       <Navbar/>
       <RoutesWrapper/>
       </BrowserRouter>
    </div>
  );
}

export default App;
