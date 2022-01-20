import React from 'react';

function Footer() {
  return(
    <div>
       <footer className="bg-success text-light align-items-center p-5 position-relative font-weight-light">
        <div className="container">
            <p className="text-light text-center ">Copy Right :2022</p>
            <a className="position-absolute bottom-0 end-0 p-5 text-light" href="#">
                <i className="bi bi-arrow-up-circle h1 "></i>
            </a>
        </div>

    </footer>
    </div>
  )
}

export default Footer;
