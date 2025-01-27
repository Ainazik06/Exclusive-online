import './styles/About.scss'
import Sallers from '../utils/Sallers/Sallers.jsx'
import AboutCompo from '../utils/About/About-compo.jsx'
import AboutPeople from '../utils/About-peoples/AboutPeople.jsx'
import Security from '../utils/Security/Security.jsx'

export default function About() {
  return (
    <>
      <AboutCompo />
      <Sallers />
      <AboutPeople />
      <Security />
    </>
  )
}

