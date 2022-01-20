import React from 'react';
import eyoba from '../Images/eyoba.png'

function Home() {
  return <div>
<section className="bg-light bg-gradient text-dark text-center text-sm-start mt-5 p-5 p-lg-0 pt-lg-5">
        <div className="container ">
            <div id="About" className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Hi, I'm <span className="text-success">Eyobel</span></h1>
                    <p className="lead py-4">A skilled and passionate Front-end web developer based in San Jose, CA </p>

                    <p className="lead py-1 text-center text-success fw-bold">Have a project?</p>
                    <div className="text-center ">

                        <div className=" pb-5 h2">
                            <a href="https://twitter.com/7Limitless7"><i className="bi bi-twitter  bg-dark text-light rounded-circle mx-1 px-1 "></i></a>
                            <a href="https://www.linkedin.com/in/eyob-asefa-78a926218/"><i className="bi bi-linkedin text-dark bg-light   text-dark mx-1"></i></a>
                            <a href="https://github.com/eyobel7k"><i className="bi bi-github text-dark mx-1"></i></a>
                        </div>
                    </div>

                </div>
                <img className="img-fluid w-50 d-none d-sm-block" src={eyoba} alt="" />
            </div>
        </div>
    </section>


  </div>;
}

export default Home;
