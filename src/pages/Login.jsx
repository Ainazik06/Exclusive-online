import phone from '../assets/img/img_4.png'
import Input from '../utils/input/Input.jsx'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'


export default function Login() {
  return (
    <>
      <div style={{
        width: '1307px',
        height: '781px',
        gap: '129px',
        paddingTop: '60px',
        marginBottom: '140px',
        display: "flex"
      }}>
        <img width={805} height={781} src={phone} alt=""/>
        <div style={{width: '371px', height: '530px', marginTop: '125px'}}>
          <h2 style={{fontSize: '36px', fontWeight: 'unset',}}>Login in to Exclusive</h2>
          <h3 style={{fontWeight: 'normal', paddingTop: '24px'}}>Enter your
            details below</h3>
          <div style={{width: '371px', height: '400px', marginTop: '47px',}}>
            <main style={{width: '370px', height: '176px'}}>
              <div style={{
                width: '370px',
                height: '32px',
                borderBottom: '1px solid black',
                opacity: "50%"
              }}>
               <Input placeholder='Email or Phone Number' />
              </div>
              <div style={{
                marginTop: '40px',
                width: '370px',
                height: '32px',
                borderBottom: '1px solid black',
                opacity: "50%"
              }}>
                <Input placeholder='Password' />
              </div>



            </main>
            <div style={{width: '371px', gap: '87px', height: '56px', marginTop: '40px', display: 'flex'}}>
              <button style={{
                width: '143px',
                height: '56px',
                backgroundColor: '#DB4444',
                color: 'white',
                border: 'none',
                fontWeight: 'inherit',
                borderRadius: '4px'
              }}>Log in</button>
              <h4 style={{color: '#DB4444', fontWeight: 'normal', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '16px', marginBottom: '0px'}}>Forget Password?</h4>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}

