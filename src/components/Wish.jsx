import './Wish.scss'
import { useSelector } from 'react-redux'

export default function Wishlist() {
  const {items} = useSelector ((state) => state.wishlist)
  
  return (
    <div className="wishlist">
      <div className='wishlist__top'>
        <div className='wishlist_top_title'>
          <h4>Wishlist (4)</h4>
          <button className='wishlist-btn'>Move All To Bag</button>
        </div>
      </div>
      <div className='wishlist__bottom'>
        <div className='wishlist_bottom_left'>
          <div className='wishlist_bottomleft_title'>
            <button className='btn-wishlist'></button>
            <h4 className='h4-wishlist'>Just For You</h4>
          </div>

          <div className='btn'>
            <button className='btn-gg'>
              See All
            </button>
          </div>
        </div>

        <div className='whishlist_bottom_right'>
          {
            items.map((data) => (
              <div key={data.id} className='wishlist_items-down_item'>
              <div className='wishlist_items-downitem_img'>
                <button className='btn-1-1'>-35%</button>
                <img className='img-1-1' width={190} height={180} src= {data.thumbnail} alt="" />
                <img className='img-1-2' width={34} height={34} src="" alt='corzina' />
                <button className='btn-wishlist'><img width={104} height={24} src="" alt="" /></button>
              </div>
              <div className='wishlist_items-downitem_info'>
                <h4>ASUS FHD Gaming Laptop</h4>
                <h5>$960 <span>$1160</span></h5>
                <div className='star-info'>
                <img width={10} height={10} src="" alt="" />
                
                  <h4>(65)</h4>
                </div>
              </div>
            </div>
            ))
          }

          <div className='wishlist_items-down_item'>
            <div className='wishlist_items-downitem_img'>
              <button className='btn-1-1'>-35%</button>
              <img className='img-1-1' width={190} height={180} src="" alt="" />
              <img className='img-1-2' width={34} height={34} src="" alt='corzina' />
              <button className='btn-wishlist'><img width={104} height={24} src="" alt="" /></button>
            </div>
            <div className='wishlist_items-downitem_info'>
              <h4>ASUS FHD Gaming Laptop</h4>
              <h5>$960 <span>$1160</span></h5>
              <div className='star-info'>
              <img width={10} height={10} src="" alt="" />
              
                <h4>(65)</h4>
              </div>
            </div>
          </div>
        

        

         
        </div>
        </div>
    </div>
   )
}
