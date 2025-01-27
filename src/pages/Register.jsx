import phone from '../assets/img/img_4.png'
import google from '../assets/svg/google.svg'
import {Link} from 'react-router-dom'
import Input from '../utils/input/Input'

import React,{useState} from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'



export default function Register() {
const [email , setEmail] = useState("")
const [password,setPassword] = useState("")

async function signUp() {
  try {
const res = await createUserWithEmailAndPassword(auth,email,password)
console.log(res)
if(res) {
  toast.success("Email success creater")
}
  }catch (error) {
   console.log (error)
   toast.error(error.message)
  }
}
  return (
    <>
      <div style={{width: '1307px', height: '781px', gap: '129px', paddingTop: '60px', marginBottom: '140px', display: "flex"}}>
        <img width={805} height={781} src={phone} alt=""/>
        <div style={{width: '371px', height: '530px', marginTop: '125px'}}>
             <h2 style={{fontSize: '36px', fontWeight: 'initial'}}>Create an account</h2>
           <h3 style={{fontWeight: 'normal', paddingTop: '24px'}}>Enter your details below</h3>
            <div style={{width: '371px', height: '400px', marginTop: '47px',}}>
                 <main style={{width: '370px', height: '176px'}}>
                      <div style={{width: '370px', height: '32px', borderBottom: '1px solid black', opacity: "50%"}}>
                        {/* <Input placeholder='Name'/> */}
                        <input placeholder='email' type="text" value={email} onChange= {(e) => setEmail (e.target.value)}/>

                       </div>
                       <div style={{marginTop: '40px' ,width: '370px', height: '32px', borderBottom: '1px solid black', opacity: "50%"}}>
                        {/* <Input placeholder='Email or Phone Number'/> */}
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                       </div>
                       <div style={{marginTop: '40px' ,width: '370px', height: '32px', borderBottom: '1px solid black', opacity: "50%"}}>
                        <Input placeholder='Password'/>
                       </div>


                 </main>
                 <div style={{width: '371px', height: '188px', marginTop: '40px'}}>
                   <button onClick={() => signUp()} style={{width: '371px', height: '56px', backgroundColor: '#DB4444', color: 'white', border: 'none', fontWeight: 'inherit', borderRadius: '4px'}}>Create Account</button>
                   <button style={{width: '371px', height: '56px', backgroundColor: 'white', border: '1px solid black', fontWeight: 'normal', borderRadius: '4px', marginTop: '16px'}}>
                     <h4 style={{display: 'flex', gap: '14px', justifyContent: 'center', alignItems: 'center', fontWeight: 'normal'}}><span><img src={google} alt=""/></span> Sign up with Google</h4>
                     </button>
                       <h4 style={{width: '248px', margin: '0 auto', marginTop: '34px', fontSize: '14px', fontWeight: 'normal',}}>Already have account? <Link to='/login' style={{fontWeight: 'inherit', marginLeft: '25px', textDecoration: 'none', color: 'black'}}>Log in</Link></h4>
                 </div>
            </div>
        </div>
      </div>
    </>
  )
}

