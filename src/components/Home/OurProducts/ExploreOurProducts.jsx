import arrowleft2 from '../../../assets/svg/arrowleft2.svg'
import arrowright2 from '../../../assets/svg/arrowright2.svg'
import heartDown from '../../../assets/svg/heart-down.svg'
import eye from '../../../assets/svg/eye-down.svg'
import star from '../../../assets/svg/star.svg'
import starminus from '../../../assets/svg/star--.svg'
import stul from '../../../assets/img/img_9.png'
import car from '../../../assets/img/img_20.png'
import crop from '../../../assets/img/img_17.png'
import photocamera from '../../../assets/img/img_18.png'
import laptop from '../../../assets/img/img_19.png'
import starpol from '../../../assets/svg/starpol.svg'
import cross from '../../../assets/img/img_21.png'
import play from '../../../assets/img/img_22.png'
import spartivka from '../../../assets/img/img_23.png'
import './ExploreOurProducts.scss'

export default function ExploreOurProducts() {
  return (
    <div>
      <div className='Explore'>
        <div className='flash-top'>
          <div className='flash-top1'>
            <div className='flash-top1-1'>
              <div className='btn-top1'>
                <button className='btn'></button>
                <h4>Our Products</h4>
              </div>
              <h4>Explore Our Products</h4>
            </div>


          </div>
          <div className='flash-top2'>
            <img src={arrowleft2} alt=""/>
            <img src={arrowright2} alt=""/>
          </div>
        </div>
        <nav style={{marginTop: '60px', flexWrap: 'wrap'}}
             className='flash-down'>

          <div className='down-1'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>
                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div style={{paddingTop: '35px', marginLeft: '77px'}}
                     className='div12'><img width={115} height={180} src={crop}
                                            alt=""/></div>
                <div className='div-down12'>
                  <h4>Breed Dry Dog Food</h4>
                  <div style={{display: 'flex', gap: '8px'}}>

                    <h4 className='h4-down1'>$100</h4>
                    <nav className='nav-down1'>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={starminus} alt=""/>
                      <img src={starminus} alt=""/>
                      <h4>(88)</h4>
                    </nav>

                  </div>
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
                <div style={{paddingTop: '35px', marginLeft: '70px'}}
                     className='div12'><img width={143} height={163}
                                            src={photocamera} alt=""/></div>
                <div className='div-down12' style={{paddingBottom: '120px'}}>
                  <h4>CANON EOS DSLR Camera</h4>
                  <div style={{display: 'flex', gap: '8px'}}>

                    <h4 className='h4-down1'>$360</h4>
                    <nav className='nav-down1'>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={starminus} alt=""/>
                      <h4>(95)</h4>
                    </nav>
                  </div>
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
                <div style={{paddingTop: '35px'}} className='div12'><img
                  width={172} height={180} src={laptop} alt=""/></div>
                <div className='div-down12'>
                  <h4>ASUS FHD Gaming Laptop</h4>
                  <div style={{display: 'flex', gap: '8px'}}>

                    <h4 className='h4-down1'>$700 </h4>
                    <nav className='nav-down1'>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <h4>(325)</h4>
                    </nav>
                  </div>
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
                  <h4>Curology Product Set </h4>
                  <div style={{display: 'flex', gap: '8px'}}>

                    <h4 className='h4-down1'>$500</h4>
                    <nav className='nav-down1'>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={starminus} alt=""/>
                      <h4>(145)</h4>
                    </nav>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className='down-2'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>
                <button className='btn-down1'>NEW</button>
                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div style={{marginLeft: '15px'}} className='div12'><img
                  style={{marginLeft: '30px'}}
                  width={180} height={133} src={car}
                  alt=""/></div>
                <div className='div-down12'>
                  <h4>Kids Electric Car </h4>
                  <div style={{display: 'flex', gap: '8px'}}>

                    <h4 className='h4-down1'>$960</h4>
                    <nav className='nav-down1'>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <h4>(65)</h4>
                    </nav>
                  </div>
                  <nav style={{display: 'flex', gap: '8px'}}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: '2px solid black'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#FB1314',
                        marginLeft: '3px',
                        marginTop: '2.5px'
                      }}>

                      </div>
                    </div>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#DB4444'
                    }}>

                    </div>
                  </nav>
                </div>
              </div>
            </main>
          </div>
          <div className='down-2'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>
                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div style={{marginLeft: '15px', paddingTop: '50px'}}
                     className='div12'><img style={{marginLeft: '30px'}}
                                            width={186} height={164} src={cross}
                                            alt=""/></div>
                <div className='div-down12'>
                  <h4>Jr. Zoom Soccer Cleats </h4>
                  <div style={{display: 'flex', gap: '8px'}}>

                    <h4 className='h4-down1'>$1160</h4>
                    <nav className='nav-down1'>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <h4>(35)</h4>
                    </nav>
                  </div>
                  <nav style={{display: 'flex', gap: '8px'}}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: '2px solid black'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#EEFF61',
                        marginLeft: '3px',
                        marginTop: '2.5px'
                      }}>

                      </div>
                    </div>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#DB4444'
                    }}>

                    </div>
                  </nav>
                </div>
              </div>
            </main>
          </div>
          <div className='down-2'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>
                <button className='btn-down1'>NEW</button>
                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div style={{marginLeft: '15px'}} className='div12'><img
                  style={{marginLeft: '30px'}}
                  width={180} height={133} src={play}
                  alt=""/></div>
                <div className='div-down12'>
                  <h4>GP11 Shooter USB Gamepad </h4>
                  <div style={{display: 'flex', gap: '8px'}}>

                    <h4 className='h4-down1'>$660</h4>
                    <nav className='nav-down1'>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img width={17} height={17} src={starpol} alt=""/>
                      <h4>(55)</h4>
                    </nav>
                  </div>
                  <nav style={{display: 'flex', gap: '8px'}}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: '2px solid black'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: 'black',
                        marginLeft: '3px',
                        marginTop: '2.5px'
                      }}>

                      </div>
                    </div>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#DB4444'
                    }}>

                    </div>
                  </nav>
                </div>
              </div>
            </main>
          </div>
          <div className='down-2'>
            <main style={{width: '270px', height: '250px'}}>
              <div className='div-down'>
                <div className='img-down1'>
                  <img src={heartDown} alt=""/>
                  <img src={eye} alt=""/>
                </div>
                <div style={{marginLeft: '15px', paddingTop: '45px'}}
                     className='div12'><img style={{marginLeft: '30px'}}
                                            width={182} height={176}
                                            src={spartivka}
                                            alt=""/></div>
                <div className='div-down12'>
                  <h4>Quilted Satin Jacket </h4>
                  <div style={{display: 'flex', gap: '8px'}}>

                    <h4 className='h4-down1'>$660</h4>
                    <nav className='nav-down1'>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img src={star} alt=""/>
                      <img width={17} height={17} src={starpol} alt=""/>
                      <h4>(55)</h4>
                    </nav>
                  </div>
                  <nav style={{display: 'flex', gap: '8px'}}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: '2px solid black'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: '#184A48',
                        marginLeft: '3px',
                        marginTop: '2.5px'
                      }}>

                      </div>
                    </div>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#DB4444'
                    }}>

                    </div>
                  </nav>
                </div>
              </div>
            </main>
          </div>
        </nav>
      </div>
      <button style={{
        width: '234px',
        height: '56px',
        backgroundColor: '#DB4444',
        borderRadius: '4px',
        border: 'none',
        color: 'white',
        marginLeft: '610px'
      }}>View All Products
      </button>

    </div>
  )
}
