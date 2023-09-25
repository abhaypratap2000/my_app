import React, {useState } from 'react';
import { useOTPVerificationMutation } from '../../services/auth';
import { selectAuth } from '../../app/slices/AuthSlice/authSlice';
import {useAppSelector } from '../../Hooks/UsedTypeSelector'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
const initialState = {
  otp: ""
}
const OTPVerification: React.FC = () => {
  const [formValue, setFormValue] = useState(initialState);
  const reduxemail = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const { otp } = formValue;

  const [OTPVerification] = useOTPVerificationMutation();
  const handleOTPChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  };
 const handleSubmit = async (e: any) => {
    e.preventDefault();
    let email = reduxemail.email;
    let abc = { otp, email }
    const {data}:any = await OTPVerification(abc)
    //  console.log("Abhay",data)
      if (data?.verified) {
        await toast.success("OTP verified");
        navigate("/signUp")
      }else{
        await toast.error("OTP verified");
      }
};
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };
return (
    <div className="vh-100 gradient-custom">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="mb-4 fw-bold text-upppercase text-white">OTP Verification</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="otpInput" className="form-label text-white">
                Enter OTP
              </label>
              <input
                type="number"
                className="form-control"
                id="otpInput"
                placeholder="Enter OTP"
                value={otp}
                name="otp"
                onChange={handleOTPChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Verify OTP
            </button>
          </form>
          <div className="mt-3">
            <p style={linkStyle}>
              Didn't receive OTP? <a href="#" style={linkStyle}>Resend OTP</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
