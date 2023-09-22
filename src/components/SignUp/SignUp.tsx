import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MDBInput } from 'mdb-react-ui-kit'
import "./SignUp"
import { useLoginUserMutation , useRegisterUserMutation} from '../../services/auth'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../Hooks/UsedTypeSelector'
import { setUser } from '../../app/slices/AuthSlice/authSlice'

const initialState = {
  email: "",
  phone: "",
  password: "",
  name: "",
  address: ""
}


function SignUp() {
  const [formValue, setFormValue] = useState(initialState);
  const [showRegister, setShowRegister] = useState(false);
  const { phone, name, email, password , address} = formValue;
  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }
 const dispatch = useAppDispatch();
 const navigate = useNavigate();
  const [loginUser, { data: LoginData, isSuccess: isLoginSuccess, error: isLoginError, isError: loginError }] = useLoginUserMutation();
  const [RegisterUser , {data: RegisterUserData, isSuccess: isRegisterSuccess, error: isRegisterError, isError: registerError }] = useRegisterUserMutation();
  const handleLogIn = async() => {
    if(email && password){
      await loginUser({email , password})
    }else{
      toast.error("Please Fill all fields ")
    }
   }

   const handleRegister = async()=>{
    if(name && email && password && phone && address)
    await RegisterUser({name,email,password,phone,address})
   }
   useEffect(()=>{
    if(isLoginSuccess){
      toast.success("User Login Successfully");
      dispatch(setUser({email : LoginData.email , signature : LoginData.signature}))
      navigate("/dashboard")
    }
    if(isRegisterSuccess){
      toast.success("User Register Successfully");
      dispatch(setUser({email : RegisterUserData.email, signature : RegisterUserData.signature}))
      navigate("/otpverification")
    }
   },[isLoginSuccess , isRegisterSuccess])
  return (
    <section className='vh-100 gradient-custom'>
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-item-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
              <div className="mb-mb-5 mt-md-4 pb-5">
                <h2 className="fw-bold mb-2 text-upppercase">
                  {!showRegister ? "Login" : "Register"}
                </h2>
                <p className="text-white-50 mb-4">
                  {!showRegister ? "Please you Email and Password" : "Please Enter User Detail"}
                </p>
                {
                  showRegister && (
                    <>
                      <div className="form-outline form-white mb-4 p-3" >
                        <MDBInput
                          type="text"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          label='Name'
                          className='form-control form-control-lg'
                        />
                      </div>
                      <div className="form-outline form-white mb-4 p-3">
                        <MDBInput
                          type="text"
                          name="phone"
                          value={phone}
                          onChange={handleChange}
                          label='phone'
                          className='form-control form-control-lg'
                        />
                      </div>
                      <div className="form-outline form-white mb-4 p-3">
                  <MDBInput
                    type="address"
                    name="address"
                    value={address}
                    onChange={handleChange}
                    label='address'
                    className='form-control form-control-lg'
                  />
                </div>
                    </>
                  )
                }
                <div className="form-outline form-white mb-4 p-3">
                  <MDBInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    className='form-control form-control-lg '
                  />
                </div>
                <div className="form-outline form-white mb-4 p-3">
                  <MDBInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label='password'
                    className='form-control form-control-lg'
                  />
                </div>
             
                {!showRegister ? (
                  <button className="btn-outline-light btn-lg px-5" type='button' onClick={() => handleLogIn()}>
                    Login
                  </button>
                ) : (
                  <button className="btn-outline-light btn-lg px-5" type='button' onClick={() => handleRegister()}>
                    Register
                  </button>
                )}
              </div>
              <div>
                <h5 className="mb-0">
                  {!showRegister ? (
                    <>
                      Don't have an Account ?
                      <p className="text-white-50 fw-bold" style={{ cursor: "pointer" }} onClick={() => setShowRegister(true)}>
                        Sign Up
                      </p>
                    </>
                  ) : (<>
                    Already have an account ?
                    <p className="text-white-50 fw-bold" style={{ cursor: "pointer" }} onClick={() => setShowRegister(false)}>
                      Sign In
                    </p>
                  </>)

                  }
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SignUp