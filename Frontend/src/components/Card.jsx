import React from 'react'
import '../css/BookCard.scss'
const Card = () => {
  return (
    <div>
    <div class="container">
  <div class="panel">
    <div class="ring">
      <div class="card card1"></div>
      <div class="border">
        <p class="title">Brazil</p>
        <div class="slide">
          <h6 class="para">Latest Deals from Heathrow</h6>
          <div class="line">
            <h6 class="para">OUT</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£849</h6>
          </div>
          <div class="line">
            <h6 class="para">RTN</h6> <i class="fa fa-plane" aria-hidden="true"></i>
            <h6 class="para">£659</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </div>
  
    </div>
  )
}

export default Card