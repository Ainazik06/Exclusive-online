import '../../pages/styles/About.scss'
import { Peoples } from '../../components/data/data'

export default function AboutPeople() {
  return (
    <>
      <div className="People container">

          {Peoples.slice(0, 3).map((person, index) => (
            <div key={index} className="people-1">
               <div className='people-1-1'>
                 <img style={{width : index === 1 ? '294px' : '236px', marginLeft : index === 1 ? '38px' : '67px'}} width={236} height={391} src={person.img} alt="" />
               </div>
               <h2>{person.content}</h2>
               <h5>{person.description}</h5>
               <img width={104} height={24} src={person.social} alt="" />
            </div>
          ))}
      </div>
    </>
  )
}