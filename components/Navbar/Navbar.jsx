import  './Navbar.css'
import { FaRegQuestionCircle } from "react-icons/fa";
export default function Navbar(){
    return(
        <>
        <div className='nav-main-div'>
            <img className='nav-logo' src="/craxinnoLogo.png" alt="Logo" />
            <FaRegQuestionCircle className='question-mark' />
        </div>
        <hr className='nav-line'/>
        </>
    )
}