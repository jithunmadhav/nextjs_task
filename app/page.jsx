'use client'
import  './page.module.css'
import Link from "next/link";
import { Signup_1_page } from '@/components/Signup/Signup_1_page';
import { Personal_info } from '@/components/Personal_info/Personal_info';
import { Financial_info } from '@/components/Financial_info/Financial_info';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';

 function Home() {
  const [page, setpage] = useState('signup')
  return (
    
    <DataProvider>
      {page=='personal'?  <Personal_info setpage={setpage}/> : 
       page=='financial'? <Financial_info/> :
       <Signup_1_page setpage={setpage}/>
      }
    </DataProvider>

      )
      
    }
    const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Home