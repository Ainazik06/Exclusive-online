import heartDown from '../../../assets/svg/heart-down.svg'
import eye from '../../../assets/svg/eye-down.svg'
import joistic from '../../../assets/img/img_6.png'
import star from '../../../assets/svg/star.svg'
import clavatitura from '../../../assets/img/img_7.png'
import tv from '../../../assets/img/img_8.png'
import stul from '../../../assets/img/img_9.png'
import starpol from '../../../assets/svg/starpol.svg'
import colonka from '../../../assets/img/img_16.png'
import './BestSellingProducts.scss'

export default function BestSellingProducts() {
  return (
    <div>
      <div className='container' style={{
        height: '0.5px',
        backgroundColor: 'black',
        marginTop: '100px'
      }}></div>

      <div className='flash'>
        <div className='flash-top'>
          <div className='flash-top1'>
            <div className='flash-top1-1'>
              <div className='btn-top1'>
                <button className='btn'></button>
                <h4>This Month</h4>
              </div>
              <h4>Best Selling Products</h4>
            </div>



          </div>
          <div className='Best'>
            <button style={{width: '159px', height: '56px', backgroundColor: '#DB4444', color: 'white', borderRadius: '4px', border: 'none'}}>View All</button>
          </div>
        </div>
        <nav className='flash-down'>

          <div className='down-1'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>
                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div className='div12'><img src={joistic} alt=""/></div>
                <div className='div-down12'>
                  <h4>The north coat</h4>
                  <h4 className='h4-down1'>$260 <span>360$</span></h4>
                  <nav className='nav-down1'>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <h4>(65)</h4>
                  </nav>
                </div>
              </div>
            </main>
          </div>
          <div className='down-1'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>
                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div className='div12'><img width={191} height={101}
                                            src={clavatitura} alt=""/></div>
                <div className='div-down12' style={{paddingBottom: '120px'}}>
                  <h4>Gucci duffle bag</h4>
                  <h4 className='h4-down1'>$960 <span>1160$</span></h4>
                  <nav className="nav-down1">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img width={17} height={17} src={starpol} alt=""/>
                    <h4>(65)</h4>
                  </nav>
                </div>
              </div>
            </main>
          </div>
          <div className='down-1'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>
                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div className='div12'><img width={170} src={tv} alt=""/></div>
                <div className='div-down12'>
                  <h4>RGB liquid CPU Cooler</h4>
                  <h4 className='h4-down1'>$160 <span>179$</span></h4>
                  <nav className='nav-down1'>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img width={17} height={17} src={starpol} alt=""/>
                    <h4>(65)</h4>
                  </nav>
                </div>
              </div>
            </main>
          </div>
          <div className='down-1'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>

                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div className='div12'><img style={{marginLeft: '30px'}}
                                            width={107} height={180} src={stul}
                                            alt=""/></div>
                <div className='div-down12'>
                  <h4>S-Series Comfort Chair </h4>
                  <h4 className='h4-down1'>$360</h4>
                  <nav className='nav-down1'>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>

                    <h4>(65)</h4>
                  </nav>
                </div>
              </div>
            </main>
          </div>

        </nav>
      </div>
       <nav className='Calonka'>
         <div style={{paddingLeft: '56px', paddingTop: '69px', fontWeight: 'bold'}}>
           <h4 style={{color: '#00FF66'}}>Categories</h4>
           <h4 style={{fontSize: '48px', color: 'white', letterSpacing: '4px', paddingTop: '32px', paddingBottom: '32px'}}>Enhance Your <p>Music Experience</p></h4>
           <div style={{width: '320px', height: '62px', display: 'flex', gap: '24px', marginBottom: '40px'}}>
             <nav style={{width: '62px', height: '62px', borderRadius: '50%', backgroundColor: 'white'}}>
                 <div style={{width: '32px', height: '34px',}}>
                    <h4 style={{fontSize: '16px', fontWeight: 'inherit', position: 'absolute', marginLeft: '20px', marginTop: '15px'}}>23</h4>
                    <h4 style={{fontSize: '11px', fontWeight: 'normal', position: 'absolute', marginLeft: '15px', marginTop: '35px'}}>Hours</h4>

                 </div>

             </nav>
             <nav style={{width: '62px', height: '62px', borderRadius: '50%', backgroundColor: 'white'}}>
                 <div style={{width: '32px', height: '34px',}}>
                    <h4 style={{fontSize: '16px', fontWeight: 'inherit', position: 'absolute', marginLeft: '20px', marginTop: '15px'}}>05</h4>
                    <h4 style={{fontSize: '11px', fontWeight: 'normal', position: 'absolute', marginLeft: '18px', marginTop: '35px'}}>Days</h4>

                 </div>

             </nav>
             <nav style={{width: '62px', height: '62px', borderRadius: '50%', backgroundColor: 'white'}}>
                 <div style={{width: '32px', height: '34px',}}>
                    <h4 style={{fontSize: '16px', fontWeight: 'inherit', position: 'absolute', marginLeft: '20px', marginTop: '15px'}}>59</h4>
                    <h4 style={{fontSize: '11px', fontWeight: 'normal', position: 'absolute', marginLeft: '10px', marginTop: '35px'}}>Minutes</h4>

                 </div>

             </nav>
             <nav style={{width: '62px', height: '62px', borderRadius: '50%', backgroundColor: 'white'}}>
                 <div style={{width: '32px', height: '34px',}}>
                    <h4 style={{fontSize: '16px', fontWeight: 'inherit', position: 'absolute', marginLeft: '20px', marginTop: '15px'}}>35</h4>
                    <h4 style={{fontSize: '11px', fontWeight: 'normal', position: 'absolute', marginLeft: '8px', marginTop: '35px'}}>Seconds</h4>

                 </div>

             </nav>

           </div>
           <button style={{width: '171px', height: '56px', backgroundColor: '#00FF66', color: 'white', border: 'none', borderRadius: '4px'}}>Buy Now!</button>
         </div>

         <div style={{width: '600px', height: '420px', paddingTop: '37px', paddingLeft: '20px'}}>
           <img width={600} height={420} src={colonka} alt=""/>
         </div>
       </nav>
    </div>
  )
}