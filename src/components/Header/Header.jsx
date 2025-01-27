import './Header.scss'

import {Link, NavLink} from 'react-router-dom'
import search from '../../assets/svg/search.svg'
import { GoHeart } from "react-icons/go";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t ,i18n} = useTranslation();
  function hundlechangelng(e) { 
    let lng = e?.target.value

    i18n.changeLanguage(lng)
  } 

  hundlechangelng()
  return (
    <header className="header">
      <div className="top-header">
        <ul>
          <li>Summer Sale For All Swim Suits And Free Express Delivery - OFF
            50%! <Link to="/" style={{
              marginLeft: '7px',
              color: '#FAFAFA',
              fontWeight: 'bold'
            }}>ShopNow</Link></li>
          <div>
            <li>English</li>
            <select onChange={hundlechangelng} style={{
              marginLeft: '1px',
              outline: 'none',
              border: 'none',
              backgroundColor: 'black',
              color: 'white',
              cursor: 'pointer'
            }}>
              <option value="kg">KGZ</option>
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
            </select>
          </div>
        </ul>
      </div>


      <div className="main-header container">
        <div className="header-left">
          <h2>Exclusive</h2>
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => (isActive ? 'Link active' : 'Link')}>
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact" className={({isActive}) => (isActive ? 'Link active' : 'Link')}>
                {t("contact")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about" className={({isActive}) => (isActive ? 'Link active' : 'Link')}>
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register" className={({isActive}) => (isActive ? 'Link active' : 'Link')}>
                {t("register")}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="header-right">
          <div className="search">
            <input placeholder='What are you looking for?' type="text"/>
            <img src={search} alt=""/>
          </div>
          <div className="icons">
            <Link to={"/wishlist"}>
            <GoHeart size={24} style={{marginTop: '10px'}} />
            </Link>
         <Link to={"/Cart"}>
         < RiShoppingCart2Line size={24} style={{marginTop: '10px'}}  />
         </Link>
            
          </div>
        </div>
      </div>
      <div style={{
        width: '1440px',
        height: '1px',
        backgroundColor: 'black',
        opacity: '30%',
        marginTop: '15px'
      }}>
      </div>


    </header>
  )
}

