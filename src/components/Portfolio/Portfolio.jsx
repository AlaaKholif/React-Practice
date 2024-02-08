import React from 'react'
import image1 from '../../assets/imgs/poert1.png';
import image2 from '../../assets/imgs/port2.png';
import image3 from '../../assets/imgs/port3.png';

export default function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="container d-flex justify-content-center align-items-center text-white flex-column">
          <div className="title text-center pt-5 pb-3">
            <h2 className="text-uppercase">PORTFOLIO COMPONENT</h2>
            <div className="icon">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="row mb-4 g-5">
            <div className="col-md-4">
                <div className="item position-relative">
                    <img className='w-100 rounded' src={image1} alt='house'/>
                    <div className="overlayer rounded position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative">
                    <img className='w-100 rounded' src={image2} alt='house'/>
                    <div className="overlayer rounded position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative">
                    <img className='w-100 rounded' src={image3} alt='house'/>
                    <div className="overlayer rounded position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative">
                    <img className='w-100 rounded' src={image1} alt='house'/>
                    <div className="overlayer rounded position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative">
                    <img className='w-100 rounded' src={image2} alt='house'/>
                    <div className="overlayer rounded position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="item position-relative">
                    <img className='w-100 rounded' src={image3} alt='house'/>
                    <div className="overlayer rounded position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
