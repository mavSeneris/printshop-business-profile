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
      <section className="info-text">
        <h2 className="title">Your needs, our priority!</h2>
        <p className="sub-title">
          We are an Ecommerce provider that provides assistance, and sells
          products at cheap costs while providing quality service to fulfill
          your company's requirements
        </p>
      </section>
      <section className="icons">
        <div>
          <img className="icon" src={user} />
          <p>
            We provide comprehensive assistance, including technical support,
            customer service, consultancy, and training, tailored to your
            company's needs.
          </p>
        </div>
        <div>
          <img className="icon" src={list} />
          <p>
            Our outsourcing services streamline processes like inventory
            management and order processing to boost efficiency and reduce
            costs.
          </p>
        </div>
        <div>
          <img className="icon" src={stamp} />
          <p>
            Access competitively priced, high-quality products from reputable
            suppliers, optimizing your budget allocation.
          </p>
        </div>
        <div>
          <img className="icon" src={stars} />
          <p>
            Our commitment to quality service ensures we meet and exceed your
            requirements, fostering long-term partnerships based on trust and
            reliability.
          </p>
        </div>
      </section>
      <section className="contacts">
        <p className="contact-text">
          Contact us to learn more about our porducts and sercives
        </p>
        <div className="contact-icons">
          <a href="https://shopee.ph/1.twovarietyshop">
            <img src={shopee} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554743732118">
            <img src={fb} />
          </a>
          <a href="mailto:1twovarietyshop@gmail.com">
            <img src={mail} />
          </a>
          <a href="tel:+639910081757">
            <img src={whatsApp} />
          </a>
        </div>
        <p className="contact-text">
          # 25 Boston Street, San Dionisio, Paranaque City
        </p>
      </section>
    </main>
  );
}

export default App;
