import React from "react";
import Marvel from "../Images/Marvel.png";
import Haunted from "../Images/Haunted.png";
import Decidr from "../Images/Decidr.png";
import Ecard from "../Images/Ecard.png";

function Portfolio() {
  return (
    <div>
      {/* <!-- Portfolio section --> */}

      <section id="Portfolio" className="p-5 bg-success bg-gradient ">
        <div className="container">
          <h3 className="text-white text-center">Portfolio</h3>
          <p className=" fs-5 text-white text-center mb-5">Some of my best works</p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light bg-gradient text-dark">
                <div className=" card-body text-center">
                  <img
                    className="rounded-circle mb-3 mt-3 w-50"
                    src={Marvel}
                    alt=""
                  />
                  <h5 className="text-center mb-3">Marvel Space</h5>
                  <p>
                    A React-Native version of a MySpace clone that uses
                    React-Native components for Android and web applications. A
                    user will be able to customize the theme for their MySpace
                    page, create an account, send messages, friend requests,
                    post pictures, add feed posts and search for profiles{" "}
                  </p>
                  <a href="https://github.com/eyobel7k/team-black-panther">
                    <i className="bi bi-github text-dark mx-3"></i>
                  </a>
                  <a
                    href="https://eyobel7k.github.io/team-black-panther/"
                    className="mx-3"
                  >
                    preview
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light bg-gradient text-dark urgent">
                <div className=" card-body text-center ">
                  <img
                    className="rounded-circle mb-3 mt-3  w-50"
                    src={Haunted}
                    alt=""
                  />
                  <h5 className="text-center mb-3">Haunted House</h5>
                  <p>
                    Haunted house is an interactive Halloween themed game built
                    using React. During trick-or-treating, the players end up
                    stuck in a haunted house. To get out of the haunted house,
                    they need to find the key, but first they must explore each
                    room and complete the challenges to find the silver key.
                  </p>
                  <a href="https://github.com/luceroweb/haunted-house-game">
                    <i className="bi bi-github text-dark mx-3"></i>
                  </a>
                  <a
                    href="https://luceroweb.github.io/haunted-house-game/#/"
                    className="mx-3"
                  >
                    preview
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light bg-gradient text-dark">
                <div className=" card-body text-center">
                  <img
                    className="rounded-circle mb-3 mt-3 w-50"
                    src={Decidr}
                    alt=""
                  />
                  <h5 className="text-center mb-3">Decidr</h5>
                  <p>
                    The Decider app was developed using React. This app is
                    designed to help users select from an arbitrary list of
                    options. Users can add and remove options from the list at
                    any time. Once the user is done, the app selects a random
                    option from the list. Responsive on both mobile and desktop{" "}
                  </p>
                  <a href="https://github.com/eyobel7k/Decidr">
                    <i className="bi bi-github text-dark mx-3"></i>
                  </a>
                  <a href="https://eyobel7k.github.io/Decidr/" className="mx-3">
                    preview
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light bg-gradient text-dark">
                <div className=" card-body text-center">
                  <img
                    className="rounded-circle mb-3 mt-3 w-50"
                    src={Ecard}
                    alt=""
                  />
                  <h5 className="text-center mb-3">ecard</h5>
                  <p className="mb-5">
                    A React app that creates custom greeting cards for the
                    holiday season. It is easy to customize and reshare with
                    friends and family. Responsive on both mobile devices and
                    web pages.See it in action by clicking the live demo and
                    start resharing{" "}
                  </p>
                  <a href="https://github.com/eyobel7k/ecard">
                    <i className="bi bi-github text-dark mx-3 mt-5"></i>
                  </a>
                  <a href="https://eyobel7k.github.io/ecard/" className="mx-3">
                    preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
