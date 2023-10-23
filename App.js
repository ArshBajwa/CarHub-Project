
import './App.css';
import About from './comp/About';
import Navbar from './comp/Navbar';
import Ser from './comp/Ser';
import Projects from './comp/Projects';
import How from './comp/How';
import Aboutus from './comp/Aboutus';
import Testimonials from './comp/Testimonials';
import ContactUs from './comp/ContactUs';
import Clients from './comp/Clients';
import Footer from './comp/Footer';



function App() {
  return (
    <>
    <div className="container-mx">
    <Navbar/>
    </div>
      
      <div className='mt-100'>

        <About/>
      </div>
      <div>
        <Ser/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <How/>
      </div>
      <div>
        <Clients></Clients>
      </div>
     <div>
      <Aboutus/>
     </div>
  
     <div>
      <h1>TESTIMONIALS</h1>
      <p>Read what our satisfied customers have to say about their experiences with SpeedTech Auto Mods. We take pride in our commitment to excellence and customer satisfaction.</p>
      <Testimonials/>
     </div>
     <div>
      <ContactUs/>
     </div>
     <div>
      <Footer/>
     </div>
      </>
  );
}

export default App;
