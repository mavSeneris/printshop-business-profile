import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/images/Logo.png";
import user from "./assets/images/user.png";
import list from "./assets/images/list.png";
import stamp from "./assets/images/stamp.png";
import stars from "./assets/images/stars.png";
import fb from "./assets/images/fb.png";
import whatsApp from "./assets/images/whatsapp.png";
import mail from "./assets/images/mail.png";
import shopee from "./assets/images/shopee.png";



function App() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    // This will be executed after the component has been mounted
    setLogoVisible(true);
  }, []);
  return (
    <main>
      <header>
        <img
          src={logo}
          alt="Logo"
          className={logoVisible ? "logo fade-in" : "logo"}
        />
      </header>
      <section>
        <h2 className="title">Your partner in any products!</h2>
        <p className="sub-title">
          We are an Ecommerce provider that provides assistance, and sells
          products at cheap costs while providing quality service to fulfill
          your company's requirements
        </p>
      </section>
      <section className="icons">
        <div>
          <img className="icon" src={user} />
          <p >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,{" "}
          </p>
        </div>
        <div>
          <img className="icon" src={list} />
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,{" "}
          </p>
        </div>
        <div>
          <img className="icon" src={stamp} />
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,{" "}
          </p>
        </div>
        <div>
          <img className="icon" src={stars} />
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,{" "}
          </p>
        </div>
      </section>
      <section className="contacts">
        <p className="contact-text">Contact us to learn more about our porducts and sercives</p>
        <div className="contact-icons">
          <a href="#"><img src={shopee}/></a>
          <a href="#"><img src={fb}/></a>
          <a href="#"><img src={mail}/></a>
          <a href="#"><img src={whatsApp}/></a>
        </div>
        <p className="contact-text"># 25 Boston Street, San Dionisio, Paranaque City</p>
      </section>
    </main>
  );
}

export default App;
