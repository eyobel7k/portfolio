import React from 'react';
import Logo from '../Images/Logo.png'

function Nav() {

 return(
   <div>
      <nav className=" navbar navbar-expand-lg bg-success navbar-dark fixed-top ">
        <div className="container py-2 ">
            <a href="https://twitter.com/7Limitless7" className="navbar-brand"><img className="w-50" src={Logo}alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse header" id="nav-menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#About" className="nav-link js-scroll-trigger">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#teach" className="nav-link js-scroll-trigger">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Education" className="nav-link js-scroll-trigger">Education</a>
                    </li>
                    <li className="nav-item">
                        <a href="#Portfolio" className="nav-link js-scroll-trigger">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link js-scroll-trigger">Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
   </div>
 )
}

export default Nav;
