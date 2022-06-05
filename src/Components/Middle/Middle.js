import React from 'react'
import img1 from '../../assets/image6.jpg'
import './Middle.css'
const Middle = () => {
  return (
      <div className='Middle'>
          <div className="info">
              <h2>SHOP THE COLLECTION</h2>
              <p>WELCOME TO THE WORLD OF JJ VALAYA AND CELEBRATE LUXURY WITH OUR CAREFULLY CURATED COLLECTIONS.</p>
          </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  
  <div class="col">
    <div class="card">
      <img src={img1} class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img1} class="card-img-top" alt="..."/>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img1} class="card-img-top" alt="..."/>
    </div>
  </div>
</div>
</div>
  )
}

export default Middle