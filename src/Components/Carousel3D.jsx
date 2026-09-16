import React,  { useEffect, useState } from 'react';
import '../assets/Style/style.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';

function Carousel3D(){
    return(<>
      <div class="card">
    
    <div class="card__avatar">
      <img src='....' alt="Secure Doggo" className='img-fluid'/>
    </div>
    
    <div class="card__content">
      <h3 class="card__name">Secure Doggo</h3>
      <p class="card__role">Lead Security Engineer</p>
      <div class="card__stats">
        <div class="card__stat">
          <span class="card__stat-value">512</span>
          <span class="card__stat-label">Posts</span>
        </div>
        <div class="card__stat">
          <span class="card__stat-value">9.1M</span>
          <span class="card__stat-label">Followers</span>
        </div>
        <div class="card__stat">
          <span class="card__stat-value">102</span>
          <span class="card__stat-label">Following</span>
        </div>
      </div>
      <div class="card__actions">
        <button class="card__btn card__btn--follow">Follow</button>
        <button class="card__btn card__btn--message">Message</button>
      </div>
    </div>
  </div>

  <div class="card card--magenta">
    
    <div class="card__avatar">
      <img src='....' alt="Secure Doggo" className='img-fluid'/>
    </div>
    <div class="card__content">
      <h3 class="card__name">Cyber Cat</h3>
      <p class="card__role">Lead Robotics Engineer</p>
      <div class="card__stats">
        <div class="card__stat">
          <span class="card__stat-value">318</span>
          <span class="card__stat-label">Posts</span>
        </div>
        <div class="card__stat">
          <span class="card__stat-value">4.7M</span>
          <span class="card__stat-label">Followers</span>
        </div>
        <div class="card__stat">
          <span class="card__stat-value">87</span>
          <span class="card__stat-label">Following</span>
        </div>
      </div>
      <div class="card__actions">
        <button class="card__btn card__btn--follow">Follow</button>
        <button class="card__btn card__btn--message">Message</button>
      </div>
    </div>
  </div>

    </>);
}
export default Carousel3D;