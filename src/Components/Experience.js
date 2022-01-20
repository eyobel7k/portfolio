import React from 'react';
import Undraw from '../Images/Undraw.svg'

function Experience() {
  return (
  <div>
     {/* Experience Section  */}
    <section id="teach" className="bg-success bg-gradient  text-light p-4 align-items-center text-center ">
        <div className="container ">
            <div className="">
                <h2 className="mb-3 mb-md-0"> Experience</h2>

            </div>

        </div>

    </section>
    {/* <!-- Experience Section --> */}
    <section  className="p5 bg-light bg-gradient text-center ">
        <div className="container">
            <div className="row align-items justify-content-between">
                <div className="col-md p-5">
                    <p className="h3 text-primary fw-bold pt-2">REACT-NATIVE APPRENTICE</p>

                    <p className="h4  text-secondary  mb-2 mx-2">ALPHAWORKS </p>
                    <span className="text-primary flex-shrink-0 mx-5">September 2021 - present</span>
                    <p className="pt-3">Alphaworks' Apprenticeship program is designed to help bridge the gap between
                        learning and working in the technology industry. Apprentices are given relevant projects to work
                        on under the supervision of seasoned technical leads.</p>
                    <ul className="pt-3">
                        <li className="fw-italic text-start">Develop functional and appealing mobile and web applications.
                        </li>
                        <li className="text-start"> Collaborating with cross-functional teams(i.e. QA & Security teams) </li>
                        <li className="text-start">Contribute to an Agile team environment</li>
                        <li className="text-start">Build dynamic websites using React Native, React and JS </li>
                        <li className="text-start"> By building web and mobile applications, I gained knowledge in essential
                            React and React Native concepts.</li>
                    </ul>
                    <a href="https://bitwiseindustries.com/services/workforce-training/apprenticeships/"
                        className="btn btn-primary mt-3"><i className="bi bi-chevron-right"></i>Learn More</a>
                </div>
                <div className="col-md p-5">
                    <img className="img-fluid " src={Undraw} alt="" />
                </div>
            </div>
        </div>



    </section>
  </div>
  )
}

export default Experience;
