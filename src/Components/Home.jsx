import React, { useState } from 'react';
import '../assets/Style/style.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import karthi from '../assets/Image/catcard.jpg';

function Home(){
  const [msgOpen, setMsgOpen] = useState([false, false]);

  const toggleMsg = (index) => {
    setMsgOpen(prev => prev.map((v, i) => i === index ? !v : v));
  };

  const renderCard = (index, extraClass = '') => (
    <div className={`card1 ${extraClass} ${msgOpen[index] ? 'force-open' : ''}`}>

      <div className='card_photo'>
        <img src={karthi} className='img-fluid' />
      </div>

      <div className='card_body'>
        <h3 className='card_name'>MUKESH</h3>
        <p className='card_role'>Instagram Acc</p>

        <div className='card_extra'>
          {!msgOpen[index] ? (
            <>
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
              <div className='card_buttons'>
                <button className='card__btn card__btn--follow'>Follow</button>
                <button className='card__btn card__btn--message' onClick={() => toggleMsg(index)}>Message</button>
              </div>
            </>
          ) : (
            <div className='chatbox'>
              <div className='chatbox_header'>
                <img src={karthi} className='chatbox_avatar' />
                <span className='chatbox_name'>MUKESH</span>
                <button className='chatbox_close' onClick={() => toggleMsg(index)}>×</button>
              </div>
              <div className='chatbox_bubble'>Hey! How can I help you?</div>
              <div className='chatbox_inputrow'>
                <input type='text' className='chatbox_input' placeholder='Type a message...' />
                <button className='chatbox_send'>Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (<>
    <div className='cards'>
      {renderCard(0)}
      {renderCard(1, 'card2')}
    </div>
  </>);
}
export default Home;