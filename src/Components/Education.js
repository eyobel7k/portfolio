import React from 'react';
import eyob2 from '../Images/eyob2.png'

function Education() {
  return (<div>
  {/* <!-- Education --> */}
    <section id="Education" className="bg-success bg-gradient  text-light p-4 align-items-center text-center ">
        <div className="container ">
            <div className="">
                <h2 className="mb-3 mb-md-0"> Education</h2>

            </div>

        </div>

    </section>
    {/* <!-- Education Section --> */}
    <section id="teach" className="p5 bg-light bg-gradient text-center ">
        <div className="container">
            <div className="row align-items justify-content-between">
                <div className="col-md p-5">
                    <p className="h5 text-primary  pt-2 text">Full Stack Web development</p>

                    <p className="h6  text-secondary  mb-2 mx-2">Evangadi Networks </p>
                    <span className="text-primary flex-shrink-0 mx-5">September 2020</span>
                    <p className="pt-3">Learned to convert HTML and CSS static websites to dynamic web pages using JavaScript and
                        latest web development technologies (React and Node)</p>


                    <p className="h5 text-primary  pt-2">Accounting</p>

                    <p className="h6  text-secondary  mb-2 mx-2">Cal Poly Pomona</p>
                    <span className="text-primary flex-shrink-0 mx-5">August 2015</span>
                    <p className="pt-3">Bachelor of Science: Business Administration, Accounting</p>

                    <a href="https://www.evangadi.com/explained/"
                        className="btn btn-success mt-3"><i className="bi bi-chevron-right"></i>Learn More</a>
                </div>
                <div className="col-md p-5">
                    <a href={'https://www.freepik.com/vectors/technology'} >
                    <img className="img-fluid " src={eyob2} alt="" />
                
                </a>
                <a  id="pagination" className="text-success shrink-0  " href="https://www.freepik.com/vectors/technology">Technology vector created by stories - www.freepik.com</a>
                </div>
            </div>
        </div>
    </section>


  </div>)
}

export default Education;
