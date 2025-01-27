import '../../pages/styles/About.scss';
import { sallerData } from '../../components/data/data';

export default function Sallers() {
  return (
    <div className='sallers container'>
      {sallerData.map((saller, index) => (  
        <div
          key={saller.id}
          className='saller-1'
          style={{ backgroundColor: index === 1 ? '#DB4444' : 'initial' }}
        >
          <div
            className='saller-1__content'
          >
            <img width={80} height={80} src={saller.img} alt="Saller" />
            <div className='saller-1__content__text'>
              <h5 style={{ color: index === 1 ? 'white' : 'black' }}>{saller.money}</h5>
            </div>

            <h6 style={{ color: index === 1 ? 'white' : 'black' }}>Sellers active our site</h6>
          </div>
        </div>
      ))}
    </div>
  );
}