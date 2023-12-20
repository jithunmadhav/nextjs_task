'use client'
import './ViewForm.css'
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Textarea from '@mui/joy/Textarea';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';



export default function ViewForm({id}){
    const [result, setresult] = useState('')
    const [showBackdrop, setShowBackdrop] = useState(true);
    const [showPage, setShowPage] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setShowBackdrop(false);
        setShowPage(true);
      }, 1500);
    }, []);
    useEffect(() => {
      fetch(`https://nextjstask1.netlify.app/api/get_data/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json(); // Parse the JSON data
          } else {
            throw new Error('Failed to fetch data');
          }
        })
        .then((data) => {
            setresult(data.result)
        })
        .catch((error) => {
          console.log(error); 
        });
    }, []);

    return(

        <>
           {showBackdrop && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showBackdrop}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {showPage && (
        <>
         <Link href={'/'}>
          <p className='back-btn'>Back</p>
        </Link>
        <h2 className="v-form-h1">Form Data</h2>
       
        <div className='v-fom-outer-div'>
            <div className='v-form-inner-div1'>
        <p className='inner-box-p'>Full name :</p>
         <TextField
          id="email"
          type='email'
          value={result.name}
          variant="outlined"
          className='v-form-textfield'
        /><br/>
         <p className='inner-box-p'>Email :</p>
         <TextField
          id="email"
          value={result.email}
          variant="outlined"
          className='v-form-textfield'
        /><br/>
        <p className='inner-box-p'>Mobile :</p>
         <TextField
          id="email"
          value={result.mobile}
          variant="outlined"
          className='v-form-textfield'
        /><br/>
        <p className='inner-box-p'>Date Of Birth :</p>
                 <TextField
          id="email"
          value={result.dob}
          variant="outlined"
          className='v-form-textfield'
        /><br/>
    
            </div>
            <div style={{ height:'50px' }}></div>

            <div className='v-form-inner-div2'>
            <p className='inner-box-p'>Current Address :</p>
         <TextField
          id="email"
          value={result.currentAddress}
          variant="outlined"
          className='v-form-textfield'
        /><br/>
        <p className='inner-box-p'>Years of leaving :</p>
         <TextField
          id="email"
          value={result.years}
          variant="outlined"
          className='v-form-textfield'
        /><br/>
        <p className='inner-box-p'>Employment status :</p>
         <TextField
          id="email"
          value={result.emp_status}
          variant="outlined"
          className='v-form-textfield'
        /><br/>
        <p className='inner-box-p'>Investment Details :</p>
                 <TextField
          id="email"
          value={result.investment}
          variant="outlined"
          className='v-form-textfield'
        /><br/>
           <p className='inner-box-p'>About :</p>
            <Textarea
        value={result.info}
        className='v-form-textarea'
        minRows={2}
        maxRows={2}
      />
            </div>


        </div>
        </>
             )}
        </>
    )
}