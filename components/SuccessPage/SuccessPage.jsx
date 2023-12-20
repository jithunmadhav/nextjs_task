'use client'
import Link from "next/link";

export default function SuccessPage({id}){

    console.log("IDDDD :",id);
    return(
        <>
        <h1 style={{ textAlign:'center' }}>Form submitted</h1>
        <Link  href={`/viewform/${id}`}>
        <p style={{textAlign:'center',color:'blue',cursor:'pointer' ,fontFamily:'monospace'}}><u>view saved form</u></p>
        </Link>
        </>
    )
}
