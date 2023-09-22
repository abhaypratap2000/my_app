import React, { useState } from 'react';

const OTPVerification: React.FC = () => {
  const [otp, setOTP] = useState<string>('');

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to verify the OTP here
    console.log(`Verifying OTP: ${otp}`);
  };
  const linkStyle = {
    color: 'white', // Set the text color to white
    textDecoration: 'none', // Remove underlines from links
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
                type="text"
                className="form-control"
                id="otpInput"
                placeholder="Enter OTP"
                value={otp}
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
              Didn't receive OTP? <a href="#"style={linkStyle}>Resend OTP</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
