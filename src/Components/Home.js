import React from 'react';
import eyoba from '../Images/eyoba.png'

function Home() {
  return <div>
<section class="bg-light bg-gradient text-dark text-center text-sm-start mt-5 p-5 p-lg-0 pt-lg-5">
        <div class="container ">
            <div id="About" class="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Hi, I'm <span class="text-success">Eyobel</span></h1>
                    <p className="lead py-4">A skilled and passionate Front-end web developer based in San Jose, CA </p>

                    <p class="lead py-1 text-center text-success fw-bold">Have a project?</p>
                    <div class="text-center ">

                        <div class=" pb-5 h2">
                            <a href="https://twitter.com/7Limitless7"><i className="bi bi-twitter  bg-dark text-light rounded-circle mx-1 px-1 "></i></a>
                            <a href="https://www.linkedin.com/in/eyob-asefa-78a926218/"><i class="bi bi-linkedin text-dark bg-light   text-dark mx-1"></i></a>
                            <a href="https://github.com/eyobel7k"><i class="bi bi-github text-dark mx-1"></i></a>
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
