import React from 'react'
import { useAppDispatch, useAppSelector } from '../../Hooks/UsedTypeSelector'
import { logout, selectAuth } from '../../app/slices/AuthSlice/authSlice'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Dashboard() {
    const {email} = useAppSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logout());
        toast.success("User SuccessFully Logout");
        navigate("/signUp")
    }
  return (
   <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
        <div className="row-d-flex justify-contain-center align-item-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5"style={{width:"100%" , display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                <div className="card bg-dark-text-white" style = {{width:"500px"}}>
                    <div className="card-body p-4 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">
                            <h2 className="fw-bold mb-2">
                                Welcome to DashBoard
                            </h2>
                            <h4>
                                Email:{email}
                                <button className="SignUp" type='button' style={{marginTop:"80px"}} onClick={()=> handleLogout()}>
                                Logout
                                </button>
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default Dashboard