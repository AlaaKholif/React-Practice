import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer text-center">
        <div className="container">
            <div className="footer-about">
                <div className="row text-white">
                    <div className="col-md-4">
                        <div className="item">
                            <h3 className='text-uppercase'>LOCATION</h3>
                            <p className='mb-0 pb-2'>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <h3 className='text-uppercase'>AROUND THE WEB</h3>
                            <div className="social-media d-flex justify-content-center">
                                <div className="social-icon mx-1 p-2 rounded-circle">
                                    <i className="fa-brands fa-facebook"></i>   
                                </div>
                                <div className="social-icon mx-1 p-2 rounded-circle">
                                    <i className="fa-brands fa-twitter"></i> 
                                </div>
                                <div className="social-icon mx-1 p-2 rounded-circle">
                                    <i className="fa-brands fa-linkedin-in"></i>  
                                </div>
                                <div className="social-icon mx-1 p-2 rounded-circle">
                                    <i className="fa-solid fa-globe"></i>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <h3 className='text-uppercase'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright text-white">
            <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  )
}
