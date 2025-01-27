import './styles/Home.scss'
import Banner from '../components/Home/banner/Banner.jsx'
import Button from '../utils/button/Button.jsx'
import Prodacts from '../components/Home/prodacts/prodacts.jsx'

export default function Home() {
 

  return (
    <div>

      <Banner />
      <Prodacts/>
      <Button />
    </div>
  )
}
