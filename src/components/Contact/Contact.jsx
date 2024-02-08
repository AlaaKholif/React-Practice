import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container d-flex justify-content-center align-items-center text-white flex-column">
          <div className="title text-center pt-5 pb-5">
            <h2 className="text-uppercase">CONATCT SECTION</h2>
            <div className="icon">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <form>
            <div className="row gy-5">
                <div className="col-md-8 offset-md-2">
                    <input type="text" className="form-control border-0 border-bottom" id="name" placeholder="userName"/>
                </div>
                <div className="col-md-8 offset-md-2">
                    <input type="text" className="form-control border-0 border-bottom" id="age" placeholder="userAge"/>
                </div>
                <div className="col-md-8 offset-md-2">
                    <input type="email" className="form-control border-0 border-bottom" id="email" placeholder="userEmail"/>
                </div>
                <div className="col-md-8 offset-md-2">
                    <input type="password" className="form-control border-0 border-bottom" id="password" placeholder="userPassword"/>
                </div>
                <div className="col-md-8 offset-md-2 mt-4 mb-5">
                    <button className="btn btn-color">sendMessage</button>
                </div>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}
