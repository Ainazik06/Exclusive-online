import './Flash-sales.scss'
import arrowleft2 from '../../../assets/svg/arrowleft2.svg'
import arrowright2 from '../../../assets/svg/arrowright2.svg'
import joistic from '../../../assets/img/img_6.png'
import heartDown from '../../../assets/svg/heart-down.svg'
import eye from '../../../assets/svg/eye-down.svg'
import star from '../../../assets/svg/star.svg'
import clavatitura from '../../../assets/img/img_7.png'
import starminus from '../../../assets/svg/star--.svg'
import tv from '../../../assets/img/img_8.png'
import stul from '../../../assets/img/img_9.png'
import starpol from '../../../assets/svg/starpol.svg'
import Button from '../../../utils/button/Button.jsx'

export default function FlashSales() {
  return (
    <div>
    <div className='flash'>
      <div className='flash-top'>
        <div className='flash-top1'>
          <div className='flash-top1-1'>
              <div className='btn-top1'>
                <button className='btn'></button>
                <h4>Today`s</h4>
              </div>
              <h4>Flash Sales</h4>
          </div>


          <div className='flash-top1-2'>
              <ul>
                <li style={{width: '46px', height: '50px'}}>Days <div style={{
                  position: 'absolute',
                  marginLeft: '65px',
                  marginTop: '10px'
                }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#E07575'
                  }}></div>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    marginTop: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#E07575'
                  }}></div>
                </div> <span style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: 'black',
                }}>03</span></li>


                <li style={{width: '46px', height: '50px'}}>Hours <div style={{
                  position: 'absolute',
                  marginLeft: '65px',
                  marginTop: '10px'
                }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#E07575'
                  }}></div>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    marginTop: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#E07575'
                  }}></div>
                </div>
                  <span style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: 'black',
                }}>23</span></li>
                <li style={{width: '46px', height: '50px'}}>Minutes <div
                  style={{
                    position: 'absolute',
                    marginLeft: '65px',
                    marginTop: '10px'
                  }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#E07575'
                  }}></div>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    marginTop: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#E07575'
                  }}></div>
                </div> <span style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: 'black',
                }}>19</span></li>
                <li style={{width: '46px', height: '50px'}}>Seconds <span
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: 'black',
                  }}>56</span></li>

              </ul>
          </div>


        </div>
         <div className='flash-top2'>
           <img src={arrowleft2} alt=""/>
           <img src={arrowright2} alt=""/>
         </div>
      </div>
      <nav className='flash-down'>

        <div className='down-1'>
          <main style={{width: '270px', height: '250px'}}>
            <div className='div-down'>
              <button className='btn-down1'>-40%</button>
              <div className='img-down1'>
                <img src={heartDown} alt=""/>
                <img src={eye} alt=""/>
              </div>
              <div className='div12'><img src={joistic} alt=""/></div>
              <div className='div-down12'>
                <h4>HAVIT HV-G92 Gamepad</h4>
                <h4 className='h4-down1'>$120 <span>160$</span></h4>
                <nav className='nav-down1'>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <h4>(88)</h4>
                </nav>
              </div>
            </div>
          </main>
        </div>
        <div className='down-1'>
          <main style={{width: '270px', height: '250px'}}>
            <div className='div-down'>
              <button className='btn-down1'>-40%</button>
              <div className='img-down1'>
                <img src={heartDown} alt=""/>
                <img src={eye} alt=""/>
              </div>
              <div className='div12'><img width={191} height={101}
                                          src={clavatitura} alt=""/></div>
              <div className='div-down12' style={{paddingBottom: '120px'}}>
                <h4>AK-900 Wired Keyboard</h4>
                <h4 className='h4-down1'>$960 <span>1160$</span></h4>
                <nav className='nav-down1'>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={starminus} alt=""/>
                  <h4>(75)</h4>
                </nav>
              </div>
            </div>
          </main>
        </div>
        <div className='down-1'>
          <main style={{width: '270px', height: '250px'}}>
            <div className='div-down'>
              <button className='btn-down1'>-40%</button>
              <div className='img-down1'>
                <img src={heartDown} alt=""/>
                <img src={eye} alt=""/>
              </div>
              <div className='div12'><img width={170} src={tv} alt=""/></div>
              <div className='div-down12'>
                <h4>IPS LCD Gaming Monitor</h4>
                <h4 className='h4-down1'>$370 <span>400$</span></h4>
                <nav className='nav-down1'>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <h4>(99)</h4>
                </nav>
              </div>
            </div>
          </main>
        </div>
        <div className='down-1'>
          <main style={{width: '270px', height: '250px'}}>
            <div className='div-down'>
              <button className='btn-down1'>-40%</button>
              <div className='img-down1'>
                <img src={heartDown} alt=""/>
                <img src={eye} alt=""/>
              </div>
              <div className='div12'><img style={{marginLeft: '30px'}} width={107} height={180} src={stul} alt=""/></div>
              <div className='div-down12'>
                <h4>S-Series Comfort Chair </h4>
                <h4 className='h4-down1'>$375 <span>400$</span></h4>
                <nav className='nav-down1'>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img width={17} height={17} src={starpol} alt=""/>
                  <h4>(99)</h4>
                </nav>
              </div>
            </div>
          </main>
        </div>
        <div className='down-2'>
          <main style={{width: '270px', height: '250px'}}>
            <div className='div-down'>
              <button className='btn-down1'>-40%</button>
              <div className='img-down1'>
                <img src={heartDown} alt=""/>
                <img src={eye} alt=""/>
              </div>
              <div className='div12'><img style={{marginLeft: '30px'}} width={107} height={180} src={stul} alt=""/></div>
              <div className='div-down12'>
                <h4>S-Series Comfort Chair </h4>
                <h4 className='h4-down1'>$375 <span>400$</span></h4>
                <nav className='nav-down1'>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img src={star} alt=""/>
                  <img width={17} height={17} src={starpol} alt=""/>
                  <h4>(99)</h4>
                </nav>
              </div>
            </div>
          </main>
        </div>
      </nav>
    </div>
    <Button/>
      <div className='container' style={{height: '0.5px', backgroundColor: 'black', marginTop: '60px'}}></div>
    </div>
  )
}

