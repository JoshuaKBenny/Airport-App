import React from 'react'
import Navbar from './Navbar'

const ContactPage = () => {
  return (
    <div>
        <Navbar/>
      
<div className="container">
    <div className="row g-3">
       <center> <h2>Contact Form</h2></center>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Email</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Subject</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Message</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
           <center> <button className="btn btn-success">Send Message</button> </center>
        </div>
    </div>

<br />
<div className="row g-3">
    <div className="col col-12 col-s-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<center><h2>Additional Contact Details</h2></center>
<center>
    <p>Email:support@flyx.com</p>
    <p>Phone:+1 123 456-7890</p>
    <p>Address: 123 Airport Road,City,Country</p>
    <p>Our support team is available 24/7 to assit you with any inquiries or issues.</p>
</center>

    </div>
</div>


</div>




    </div>
  )
}

export default ContactPage
