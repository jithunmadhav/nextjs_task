'use client'
import './Financial_info.css'
import TextField from '@mui/material/TextField';
import Select from '@mui/joy/Select';
import Input from '@mui/joy/Input';
import Option from '@mui/joy/Option';
import Textarea from '@mui/joy/Textarea';
import { FaExclamationCircle } from "react-icons/fa";
import Button from '@mui/joy/Button';

export const Financial_info=()=>{
    const handleChange = (event, newValue) => {
        console.log(`You have choosen "${newValue}"`);
      };
    return(
        <>
            <div className='Fin_pagination_1'>1</div>
            <div className='Fin_pagination_2'>2</div>
            <div className='personal_info_inner-box'>
            <h3 className='personal_info-h3'>Financial information</h3>
            <p className='personal_info-p'>All your information is stored securely.</p><br/>

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
          id="email"
          label="Additional savings/investments"
          variant="outlined"
          className='personal_info-textfield2'
        /><br/>
             
              <Button size="md">Save and continue</Button>

            </div>
        </>
    )
}