import './Footer.scss'
import send from '../../assets/svg/send.svg'
import qrQode from '../../assets/img/img_3.png'
import socialMedia from '../../assets/svg/socialMedia.svg'
import CCC from '../../assets/svg/CCC.svg'
export default function Footer() {
  return (
    <>
      <div className='Footer'>
        <main className='main-footer container'>
          <div className='fot-1'>
            <h4>Exclusive</h4>
            <h3>Subscribe</h3>
            <h5>Get 10% off your first order</h5>
            <div className='div1'>
              <input placeholder='Enter your email' type="text"/>
              <img src={send} alt=""/>
            </div>
          </div>
          <div className='fot-2'>
            <h3>Support</h3>
            <h4>111 Bijoy sarani, Dhaka, <p>DH 1515, Bangladesh.</p></h4>
            <h4>exclusive@gmail.com</h4>
            <h4>+88015-88888-9999</h4>
          </div>
          <div className='fot-3'>
            <h3>Account</h3>
            <h4>My Account</h4>
            <h4>Login / Register</h4>
            <h4>Cart</h4>
            <h4>Wishlist</h4>
            <h4>Shop</h4>
          </div>
          <div className='fot-4'>
            <h3>Quick Links</h3>
            <h4>Privacy Policy</h4>
            <h4>Terms Of Use</h4>
            <h4>FAQ</h4>
            <h4>Contact</h4>
          </div>
          <div className='fot-5'>
            <h3>Download App</h3>
            <h4>Save $3 with App New User Only</h4>
            <img width={198} height={84} src={qrQode} alt=""/>
            <img style={{marginTop: '20px'}} width={168} height={24}
                 src={socialMedia} alt=""/>
          </div>
        </main>
        <div className='fot-6'>
          <h4><span><img src={CCC} alt=""/></span> Copyright Rimel 2022. All
            right reserved</h4>
        </div>
      </div>
    </>
  )
}

