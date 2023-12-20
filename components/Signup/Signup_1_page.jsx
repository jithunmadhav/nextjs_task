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
import { useDispatch } from 'react-redux';

export const Signup_1_page = ({setpage}) => {
  const dispatch = useDispatch()
  const baseURL ='https://nextjstask1.netlify.app/api/add_data'
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [email, setemail] = useState('')
  const [mobile, setmobile] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPass, setconfirmPass] = useState('')
  const [err, seterr] = useState('')
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };
  const validateMobile = (mobile) => {
    const mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  };
  const handlePasswordVisibility1= () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };
  const handlePasswordVisibility2= () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    const isPasswordValid = validatePassword(password);
    const isMobileValid=validateMobile(mobile)
    if (!isPasswordValid || password !== confirmPass) {
      seterr('password criteria failed')
    }else if(!isMobileValid){
      seterr('mobile number not valid')
    }else {

  const url = `${baseURL}?email=${encodeURIComponent(email)}&mobile=${encodeURIComponent(mobile)}`;
  fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res)=>{
  if(!res.ok){
    let Data={email,mobile,password,confirmPass}
    dispatch({type:'signup',payload:{data:Data}})
    setpage('personal')
  }else{
    seterr('User already excist')
  }

}).catch((error)=>{
  console.log(error);
})
    }

  }


  return (
    <div>
      <h3 className='signup_1-h3'>Create your account</h3>
      <p className='signup_1-p'>Set up your RentlyPass in as little as 2 minutes.</p><br/>
        <form onSubmit={handleSubmit}>
      <div className='signup_1-inner-box'>
        <p className='err'>{err}</p>
        <p className='inner-box-p'>Contact details</p>
        <TextField
          id="email"
          type='email'
          label="Email address"
          variant="outlined"
          className='signup_1-textfield'
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />
        <br />
        <TextField
          id="mobile"
          label="Mobile number"
          variant="outlined"
          className='signup_1-textfield'
          value={mobile}
          onChange={(e)=>setmobile(e.target.value)}
        />
        <p className='inner-box-p'>Set a password</p>
        <TextField
          id="password"
          label="Create a password"
          variant="outlined"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
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
          value={confirmPass}
          onChange={(e)=>setconfirmPass(e.target.value)}
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
        
        <Button type='submit' size="md">Create your account</Button>
        <p className='signup_1-p2' >By clicking ‘Create your account’, you are agreeing to our<u> Terms<br/> & Conditions</u> and <u>Privacy Policy</u> .</p>
      </div>
        </form>
    </div>
  );
};
