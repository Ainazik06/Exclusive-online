import ps5 from '../../../assets/img/img_24.png'
import speakers from '../../../assets/img/img_25.png'
import perfurm from '../../../assets/img/img_26.png'
import women from '../../../assets/img/img_28.png'
import mail from '../../../assets/svg/mail.svg'
import music from '../../../assets/svg/music.svg'
import security from '../../../assets/svg/security.svg'

export default function NewArrival() {
  return (
    <div>
      <div style={{height: '768px'}} className='flash'>
        <div className='flash-top'>
          <div className='flash-top1'>
            <div className='flash-top1-1'>
              <div className='btn-top1'>
                <button className='btn'></button>
                <h4>Featured</h4>
              </div>
              <h4>New Arrival</h4>
            </div>








          </div>
          </div>
        <div style={{width: '1170', height: '600px', display: 'flex', gap: '30px', marginTop: '60px'}}>
          <nav style={{width: '570px', height: '600px', backgroundColor: 'black', borderRadius: '4px'}}>
            <img height={511} width={511} style={{position: 'absolute', marginTop: '87px', marginLeft: '30px'}} src={ps5} alt=""/>
             <div style={{ paddingLeft: '32px' ,paddingTop: '446px', color: 'white', width: '275px', height: '122px', gap: '16px', display: 'flex', flexDirection: 'column'}}>
                 <h4 style={{zIndex: '1' ,fontSize:"24px", fontWeight: 'initial', }}>PlayStation 5</h4>
                 <h4 style={{zIndex: '1',fontSize: '14px', fontWeight: 'normal', marginBottom: '0px', color: '#FAFAFA'}}>Black and White version of the PS5 <p>coming out on sale.</p></h4>
            <h4 style={{fontWeight: 'bold', color: 'white', zIndex: '1', marginBottom: '0px', fontSize: '16px',textDecoration: 'underline'}}>Shop Now</h4>
             </div>
          </nav>


          <nav style={{width: '570px', height: '600px', gap: '32px', display: 'flex', flexWrap: 'wrap'}}>
             <div style={{width: '570px', height: '284px', backgroundColor: '#0D0D0D', display: 'flex', gap: '20px', borderRadius: '4px'}}>
                  <div style={{ color: 'white',width: '255px', height: '122px', gap: '16px', display: 'flex', flexDirection: 'column', marginTop: '138px', marginLeft: '24px'}}>
                       <h4 style={{ zIndex: '1',fontSize: '24px', fontWeight: 'initial',marginBottom: '0px'}}>Women’s Collections</h4>
                    <h4 style={{ zIndex: '1',fontSize: '14px', color: '#FAFAFA', fontWeight: 'normal', marginBottom: '0px'}}>Featured woman collections that <p>give you another vibe.</p></h4>
                    <h4 style={{ zIndex: '1',fontWeight:'initial', fontSize: '16px', marginBottom: '0px', textDecoration: 'underline'}}>Shop Now</h4>
                  </div>
               <img width={432} height={286} style={{position: 'absolute', marginLeft: '150px', marginBottom: '40px'}} src={women} alt=""/>
             </div>
            <div style={{display: 'flex', gap: '32px'}}>
              <div style={{ borderRadius: '4px',width: '270px', height: '284px', backgroundColor: 'black'}}>
                <img height={222} width={210} style={{margin: '30px 31px', position: 'absolute'}} src={speakers} alt=""/>
                <div style={{ color: 'white',width: '191px', height: '85px', display: 'flex', flexDirection: 'column', gap: '12px', margin: '175px 24px',}}>
                  <h4 style={{zIndex: '1', marginBottom: '0px', fontSize: '24px'}}> Speakers</h4>
                  <h4 style={{zIndex: '1', marginBottom: '0px', fontSize: '14px', fontWeight: 'normal', color: '#FAFAFA'}}>Amazon wireless speakers</h4>
                  <h4 style={{zIndex: '1', marginBottom: '0px', fontSize: '16px', fontWeight: 'initial', textDecoration: 'underline'}}>Shop Now</h4>
                </div>
              </div>
              <div style={{ borderRadius: '4px',width: '270px', height: '284px', backgroundColor: 'black'}}>
                <img height={222} width={210} style={{margin: '30px 31px', position: 'absolute'}} src={perfurm} alt=""/>
                <div style={{ color: 'white',width: '191px', height: '85px', display: 'flex', flexDirection: 'column', gap: '12px', margin: '175px 24px',}}>
                  <h4 style={{zIndex: '1', marginBottom: '0px', fontSize: '24px'}}>Perfume</h4>
                  <h4 style={{zIndex: '1', marginBottom: '0px', fontSize: '14px', fontWeight: 'normal', color: '#FAFAFA'}}>GUCCI INTENSE OUD EDP</h4>
                  <h4 style={{zIndex: '1', marginBottom: '0px', fontSize: '16px', fontWeight: 'initial', textDecoration: 'underline'}}>Shop Now</h4>
                </div>
              </div>



            </div>
          </nav>
        </div>
      </div>
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

