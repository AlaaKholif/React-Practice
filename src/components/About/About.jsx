import React from "react";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container d-flex justify-content-center align-items-center text-white flex-column">
          <div className="title text-center">
            <h2 className="text-uppercase text-white">ABOUT COMPONENT</h2>
            <div className="icon">
              <i className="fa-solid fa-star text-white"></i>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="info">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
