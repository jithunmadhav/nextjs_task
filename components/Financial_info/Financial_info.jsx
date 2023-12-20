'use client'
import './Financial_info.css'
import TextField from '@mui/material/TextField';
import Select from '@mui/joy/Select';
import Input from '@mui/joy/Input';
import Option from '@mui/joy/Option';
import Textarea from '@mui/joy/Textarea';
import { FaExclamationCircle } from "react-icons/fa";
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import SuccessPage from '../SuccessPage/SuccessPage';

export const Financial_info=()=>{
  const {signup,personal} = useSelector(state => state)
  const [investment, setinvestment] = useState('')
  const [openSuccessPage, setopenSuccessPage] = useState(false)
  const [id, setid] = useState('')
  const [emp_status, setemp_status] = useState('')
  const [err, seterr] = useState('')
  const router = useRouter();
    const handleChange = (event, newValue) => {
      setemp_status(newValue)
    };
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      if(emp_status && emp_status.trim() && investment.trim()){
        fetch(`https://nextjstask1.netlify.app/api/add_data`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...signup.data,...personal.data,emp_status,investment}),
        }).then((res) => {
          if (res.ok) {
            return res.json(); 
          } else {
            throw new Error('Failed to fetch data');
          }
        })
        .then((data) => {
            setid(data.result._id)
            setopenSuccessPage(!openSuccessPage)
        }).catch((error)=>{
          console.log(error);
        })
      }else{
        seterr('All fields are required')
      }

    } catch (error) {
      console.log(error);
    }
  }
    return(
        <>
        {openSuccessPage ? <SuccessPage id={id}/> : 
        <>
            <div className='Fin_pagination_1'>1</div>
            <div className='Fin_pagination_2'>2</div>
            <form onSubmit={handleSubmit}>
              
            <div className='personal_info_inner-box'>
            <h3 className='personal_info-h3'>Financial information</h3>
            <p className='personal_info-p'>All your information is stored securely.</p><br/>
            <p className='err'>{err}</p>
            <Select placeholder="What is your current employment status?" className='Fin_info-select' defaultValue={['']}  onChange={handleChange}
          slotProps={{listbox: { sx: {
            width: '100%',
          },
        },
      }}
    >
      <Option value="Employed">Employed</Option>
      <Option value="Unemployed">Unemployed</Option>
      <Option value="Student">Student</Option>

    </Select><br/>
    
            <TextField
            sx={{color:'blue'}}
            value={investment}
            onChange={(e)=>setinvestment(e.target.value)}
          id="email"
          label="Additional savings/investments"
          variant="outlined"
          className='personal_info-textfield2'
        /><br/>
             
              <Button type='submit' size="md">Save and continue</Button>

            </div>
          </form>
          </>
}
        </>
    )
}