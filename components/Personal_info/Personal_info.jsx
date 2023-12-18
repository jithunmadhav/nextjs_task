'use client'
import './Personal_info.css'
import TextField from '@mui/material/TextField';
import Select from '@mui/joy/Select';
import Input from '@mui/joy/Input';
import Option from '@mui/joy/Option';
import Textarea from '@mui/joy/Textarea';
import { FaExclamationCircle } from "react-icons/fa";
import Button from '@mui/joy/Button';

export const Personal_info=()=>{
    const handleChange = (event, newValue) => {
        console.log(`You have choosen "${newValue}"`);
      };
    return(
        <>
            <div className='pagination_1'>1</div>
            <div className='pagination_2'>2</div>
            <div className='personal_info_inner-box'>
            <h3 className='personal_info-h3'>Personal information</h3>
            <p className='personal_info-p'>Please answer questions as accurately as possible.</p><br/>

            <div style={{ display:'flex' }}>
            <Select className='personal_info-select' defaultValue={['Mr']} onChange={handleChange}
          slotProps={{listbox: { sx: {
            width: '100%',
          },
        },
      }}
    >
      <Option value="Mr">Mr</Option>
      <Option value="Mrs">Mrs</Option>
    </Select>
       <div style={{ width:'15px' }}></div>
            <TextField
            sx={{color:'blue'}}
          id="email"
          label="Full Name as per your passport"
          variant="outlined"
          className='personal_info-textfield'
        />
            </div><br/>
       <Input
        className='personal_info-date'
        type="date"
        slotProps={{
          input: {
            min: '2000-06-07',
            max: '2020-06-14',
          },
        }}
      /><br/>
            <TextField
            sx={{color:'blue'}}
          id="email"
          label="Current address"
          variant="outlined"
          className='personal_info-textfield2'
        /><br/>
              <TextField
            sx={{color:'blue'}}
          id="email"
          label="How long have you lived at this address?"
          variant="outlined"
          className='personal_info-textfield2'
        /><br/>
           <Textarea
           className='personal_info-textarea'
        placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
        minRows={2}
        maxRows={2}
      /><br/>
              <p className='signup_1-p2' ><FaExclamationCircle /> All information can be edited once you have created your account.</p>
              <Button size="md">Save and continue</Button>

            </div>
        </>
    )
}