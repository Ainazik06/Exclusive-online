import {Link} from 'react-router-dom'
import img29 from '../../assets/img/img_29.png'

function AboutCompo() {
  return (
    <>
      <h4 className="h4-about"><Link to="/" style={{
        textDecoration: 'none',
        color: 'gray'
      }}>Home</Link> /<span><h4
        style={{color: 'black', fontSize: '14px'}}>About</h4></span></h4>
      <div className="About">
        <div className="about-str">
          <h1>Our story</h1>
          <div className="str">
            <div>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </div>
            <div>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </div>
        </div>
        <div>
          <img width={705} height={609} src={img29} alt=""/>
        </div>
      </div>
    </>
  )
}

export default AboutCompo