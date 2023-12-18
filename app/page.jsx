// import Image from 'next/image'
import  './page.module.css'
import Link from "next/link";
import { Signup_1_page } from '@/components/Signup/Signup_1_page';
import { Personal_info } from '@/components/Personal_info/Personal_info';
import { Financial_info } from '@/components/Financial_info/Financial_info';

export default function Home() {
  return (
    <>
     {/* <Signup_1_page/> */}
     {/* <Personal_info/> */}
     <Financial_info/>
    </>
      )
}
