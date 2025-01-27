import './Banner.scss'
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../../assets/img/img_5.png';
import arrowleft from '../../../assets/svg/arrowleft.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { categoryFetch } from '../../../redux/category/categorySlice';
import { getProductByCategory } from '../../../redux/products/productSlice';

export default function Banner() {
  const dispatch = useDispatch ()
  const {loading, category,error} = useSelector((state) => state.categoryList)
 
  useEffect(() => {
    // getProducts();
    dispatch(categoryFetch())
  }, []);
  return (
    <div className='banner container'>
      <div className="banner-left">

        <ul className='banners'>
          <li>
            {
              category.map((item,index) => (
                <li onClick={() => dispatch(getProductByCategory(item))} key={index}>
                  {item}
                </li>
              ))
            }
          </li>

        </ul>
        <div style={{
          height: '400px',
          width: '1px',
          backgroundColor: 'black',
          opacity: '30%',
        }}>
        </div>
      </div>


      <div className="banner-carousel">

        <Carousel>
          <Carousel.Item style={{width: '892px', height: '338px'}} >
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={banner}/>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{width: '892px', height: '338px'}}>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img width={892} height={344} src='https://avatars.mds.yandex.net/i?id=441f970a6d592276e64a5c59bf7a69b8a2870374-3753631-images-thumbs&n=13'/>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{width: '892px', height: '338px'}}>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img width={892} height={344} src='https://www.ferra.ru/imgs/2024/05/08/05/6460496/c2150453d059e8999c5f0b211ce334f7c869147c.jpg' />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
