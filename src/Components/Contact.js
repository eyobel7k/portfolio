import React from 'react';

function Contact() {
  return(
    <div>
        {/* <!-- Contact section --> */}
    <section className="p-5" id="contact"id= "contact">
        <div className="container">

            <div className="row g-4">
                <div className="col-md">
                    <h2 className="text-center fw-bold mb-4"> Contact Info</h2>
                    <ul className="lead list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="fw-bold">Main Location</span>: 2022 Lucky Ave
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Email</span>:eyobel7k@gmail.com
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">phone</span>:408-333-0303
                        </li>
                        <li className="list-group-item">
                            <span className="fw-bold">Website</span>:eyobel.com
                        </li>

                    </ul>
                </div>
                <div className="col-md">
                    <div id="map"></div>
                </div>

            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact;
