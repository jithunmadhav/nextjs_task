'use client'
import { useState } from 'react';
import './Signup_1_page.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/joy/Button';
import { FaExclamationCircle } from "react-icons/fa";

export const Signup_1_page = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handlePasswordVisibility1= () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
  const handlePasswordVisibility2= () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <h3 className='signup_1-h3'>Create your account</h3>
      <p className='signup_1-p'>Set up your RentlyPass in as little as 2 minutes.</p><br/>
      <div className='signup_1-inner-box'>
        <p className='inner-box-p'>Contact details</p>
        <TextField
          id="email"
          label="Email address"
          variant="outlined"
          className='signup_1-textfield'
        />
        <br />
        <TextField
          id="mobile"
          label="Mobile number"
          variant="outlined"
          className='signup_1-textfield'
        />
        <p className='inner-box-p'>Set a password</p>
        <TextField
          id="password"
          label="Create a password"
          variant="outlined"
          className='signup_1-textfield'
          type={showPassword1? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility1}>
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          id="confirm-password"
          label="Confirm your password"
          variant="outlined"
          className='signup_1-textfield'
          type={showPassword2 ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility2}>
                  {showPassword2? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <p className='signup_1-p2' ><FaExclamationCircle /> We need a password to keep your information safe. But don’t <br/> worry, we’ll also send your custom RentlyPass URL via email.</p>
        <br/>
        <Button size="md">Create your account</Button>
        <p className='signup_1-p2' >By clicking ‘Create your account’, you are agreeing to our<u> Terms<br/> & Conditions</u> and <u>Privacy Policy</u> .</p>

      </div>
    </div>
  );
};
