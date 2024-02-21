import './HomePage.css'
import Carousel from 'react-bootstrap/Carousel';
import menu from '../../static/burger.png'
import search from '../../static/search.png'
import user from '../../static/account.png'
import basket from '../../static/cart.png'
import chatBoks from '../../static/chat-dots.png'

import Carousels from "../ui/Carousels.jsx";


const HomePage = () => {
  return (
    <>

<div className='up'></div>
      <div className='carousel'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <Carousels/>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Carousels/>
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousels/>
            <Carousel.Caption>
              <h3></h3>
              <p>

              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>

      <div className='info_categories'>

        <div className='catigories'>
          <p className='icon_user'>Earrings</p>
          <p className='icon_user'>Rings</p>
          <p className='icon_user'>Bracelets</p>

        </div>
        <div className='catigories'>

          <p className='icon_user'>Cuffs</p>
          <p className='icon_user'>Suspensions</p>
        </div>

      </div>

      <div className='chat_boks'>
        <img  src={chatBoks}/>
      </div>

    </>
  );
};

export default HomePage;

