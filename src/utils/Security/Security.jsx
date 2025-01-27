import mail from '../../assets/svg/mail.svg'
import music from '../../assets/svg/music.svg'
import security from '../../assets/svg/security.svg'
function Security() {
  return (
    <div>
        <main style={{width: '955px', height: '161px', gap: '88px', display: 'flex', margin: '130px auto'}}>
                   <div style={{width: '249px', height: '161px', display: 'flex', gap: '24px', flexDirection: 'column', alignItems: 'center'}}>
                     <div>
                       <img height={80} width={80} src={mail} alt=""/>
                     </div>
                       <div>
                         <h4 style={{fontSize: '20px', color: 'black', fontWeight: 'bold'}}>FREE AND FAST DELIVERY <p style={{fontWeight: 'normal', fontSize: '14px', paddingTop: '8px'}}>Free delivery for all orders over $140</p></h4>
                       </div>
      
      
                   </div>
                   <div style={{width: '262px', height: '161px', display: 'flex', gap: '24px', flexDirection: 'column', alignItems: 'center'}}>
                     <div>
                       <img height={80} width={80} src={music} alt=""/>
                     </div>
                       <div>
                         <h4 style={{fontSize: '20px', color: 'black', fontWeight: 'bold'}}>24/7 CUSTOMER SERVICE <p style={{fontWeight: 'normal', fontSize: '14px', paddingTop: '8px',textAlign: 'center'}}>Friendly 24/7 customer support</p></h4>
                       </div>
      
      
                   </div>
                   <div style={{width: '262px', height: '161px', display: 'flex', gap: '24px', flexDirection: 'column', alignItems: 'center'}}>
                     <div>
                       <img height={80} width={80} src={security} alt=""/>
                     </div>
                       <div>
                         <h4 style={{fontSize: '20px', color: 'black', fontWeight: 'bold'}}>MONEY BACK GUARANTEE<p style={{fontWeight: 'normal', fontSize: '14px', paddingTop: '8px',textAlign: 'center'}}>We reurn money within 30 days</p></h4>
                       </div>
      
      
                   </div>
      
             </main>
    </div>
  )
}

export default Security
