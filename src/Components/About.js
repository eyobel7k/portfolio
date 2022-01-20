import React from 'react';
import CSSS from '../Images/CSSS.svg'

function About() {
  return <div>
<hr className="bg-success bg-gradient text-dark" />
    <section id="Learn" className="p-5 bg-light bg-gradient text-dark">
        <div className="container">
            <div className="row align-items justify-content-between  ">
                <div className="col-md p-5">
                    <img className="img-fluid p-5 mt-5 " src={CSSS} alt="" />
                </div>
                <div className="col-md p-5">
                    <h1 className="p-3"><strong>About Me</strong></h1>
                    <p className="lead">I am experienced in building and maintaining responsive websites and mobile
                        applications</p>
                    <p className="lead"><span className="lead fw-bold text-primary">Problem-solving skills</span> - I have
                        exceptional analytical and problem-solving skills with enthusiasm and ambition tо complete
                        projects tо the highest standard. I have experience in designing and developing mobile and web
                        applications using <strong>React Native, React.Js, JavaScript, HTML5, CSS and Bootstrap</strong>
                    </p>
                    <p className="lead"><span className="lead text-primary fw-bold">Excellent communication skills </span>– My
                        positive attitude and excellent teamwork skills enable me to deliver projects on time while
                        collaborating with cross-functional teams.
                    </p>

                    <a href="https://www.linkedin.com/in/eyob-asefa-78a926218/" className="btn btn-success mt-3"><i className="bi bi-chevron-right"></i>Learn More</a>
                </div>



                
            </div>
        </div>
    </section>

  </div>;
}

export default About;
