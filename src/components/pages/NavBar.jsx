import React from 'react';
import menu from "../../static/burger.png";
import search from "../../static/search.png";
import user from "../../static/account.png";
import basket from "../../static/cart.png";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();


  return (

    <div>
      <div className='navHeader'>

        <div className='navIcons'>

         <span >
           <img src={menu}/>
         </span>

          <span>
   <img src={search}/>
</span>
          <span className='name'>
  <p className='icon_user' onClick={() => navigate('/')}>Jewerly</p>
</span>


          <span>
           <img className='icon_user' src={user} onClick={() => navigate('/account')}/>
         </span>
          <span>
             <img className='icon_user' src={basket} onClick={() => navigate('/basket')}/>
         </span>


        </div>
      </div>
    </div>
  );
};

export default NavBar;
