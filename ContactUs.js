import React from 'react'

function ContactUs() {
  return (
    <div>
   


        <section id="contact">
  <div class="container">
    <div class="well well-sm">
      <h3><strong>Contact Us</strong></h3>
      <p>Ready to transform your ride? Contact us for a consultation or quote today. Our knowledgeable staff is here to answer your questions and guide you through the modification process.</p>
    </div>
	
	<div class="row">
	  <div class="col-md-7">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3736489.7218514383!2d90.21589792292741!3d23.857125486636733!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1506502314230" width="100%" height="315" frameborder="0" style={{border:0}} allowfullscreen></iframe>
      </div>

      <div class="col-md-5">
          <h4><strong>Get in Touch</strong></h4>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" name="" value="" placeholder="Name"/>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="" value="" placeholder="E-mail"/>
          </div>
          <div class="form-group">
            <input type="tel" class="form-control" name="" value="" placeholder="Phone"/>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="" rows="3" placeholder="Message"></textarea>
          </div>
          <button class="btn btn-default" type="submit" name="button">
              <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default ContactUs
