import React,  { useEffect, useState } from 'react';
import '../assets/Style/style.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import karthi from '../assets/Image/dhanush.webp';
function Home(){
return(<>

{/* </...card1..... */}

<div className='cards'>

<div className='card1'>

  <div className='card_photo'>
    <img src={karthi} className='img-fluid'/>
  </div>

  <div className='card_cont'>
    <h3 className='card_name'>MUKESH</h3>
    <p className='card_role'>Instagram Acc</p>

    <div className='card_status'>
      <div className='card_stat'>
        <span className='card_stat_value'>50</span>
        <span className='label'>Followers</span>
      </div>

      <div className='card_stat'>
        <span className='card_stat_value'>5</span>
        <span className='label'>Postes</span>
      </div>

      <div className='card_stat'>
        <span className='card_stat_value'>50</span>
        <span className='label'>Following</span>
      </div>
    </div>
    <div class="card_buttons">
        <button class="card__btn card__btn--follow">Follow</button>
        <button class="card__btn card__btn--message">Message</button>
      </div>
  </div>
</div>
{/* </...card2..... */}

<div className='card1 card2'>
  <div className='card_photo'>
    <img src={karthi} className='img-fluid'/>
  </div>

  <div className='card_cont'>
    <h3 className='card_name'>MUKESH</h3>
    <p className='card_role'>Instagram Acc</p>

    <div className='card_status'>
      <div className='card_stat'>
        <span className='card_stat_value'>50</span>
        <span className='label'>Followers</span>
      </div>

      <div className='card_stat'>
        <span className='card_stat_value'>5</span>
        <span className='label'>Postes</span>
      </div>

      <div className='card_stat'>
        <span className='card_stat_value'>50</span>
        <span className='label'>Following</span>
      </div>
    </div>
    <div class="card_buttons">
        <button class="card__btn card__btn--follow">Follow</button>
        <button class="card__btn card__btn--message">Message</button>
      </div>
  </div>
</div>





<div className='card1'>

  <div className='card_photo'>
    <img src={karthi} className='img-fluid'/>
  </div>

  <div className='card_cont'>
    <h3 className='card_name'>MUKESH</h3>
    <p className='card_role'>Instagram Acc</p>

    <div className='card_status'>
      <div className='card_stat'>
        <span className='card_stat_value'>50</span>
        <span className='label'>Followers</span>
      </div>

      <div className='card_stat'>
        <span className='card_stat_value'>5</span>
        <span className='label'>Postes</span>
      </div>

      <div className='card_stat'>
        <span className='card_stat_value'>50</span>
        <span className='label'>Following</span>
      </div>
    </div>
    <div class="card_buttons">
        <button class="card__btn card__btn--follow">Follow</button>
        <button class="card__btn card__btn--message">Message</button>
      </div>
  </div>
</div>





<div className='card1 card2'>
  <div className='card_photo'>
    <img src={karthi} className='img-fluid'/>
  </div>

  <div className='card_cont'>
    <h3 className='card_name'>MUKESH</h3>
    <p className='card_role'>Instagram Acc</p>

    <div className='card_status'>
      <div className='card_stat'>
        <span className='card_stat_value'>50</span>
        <span className='label'>Followers</span>
      </div>

      <div className='card_stat'>
        <span className='card_stat_value'>5</span>
        <span className='label'>Postes</span>
      </div>

      <div className='card_stat'>
        <span className='card_stat_value'>50</span>
        <span className='label'>Following</span>
      </div>
    </div>
    <div class="card_buttons">
        <button class="card__btn card__btn--follow">Follow</button>
        <button class="card__btn card__btn--message">Message</button>
      </div>
  </div>
</div>

</div>
















    </>);
}
export default Home;