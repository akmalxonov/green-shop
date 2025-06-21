import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__features">
            <div className="footer__feature">
              {/* Ikona joyi */}
              <img src="https://green-shop-otabek.vercel.app/assets/1-Ctm6W3Jq.png" alt="Garden Care" />
              <h4>Garden Care</h4>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="footer__feature">
              <img src="https://green-shop-otabek.vercel.app/assets/2-BF1Oo3xK.png" alt="Plant Renovation" />
              <h4>Plant Renovation</h4>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="footer__feature">
              <img src="https://green-shop-otabek.vercel.app/assets/3-Bi-spicH.png" alt="Watering Garden" />
              <h4>Watering Garden</h4>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="footer__newsletter">
            <h4>Would you like to join newsletters?</h4>
            <form className="footer__form">
              <input
                type="email"
                placeholder="enter your email address..."
                className="footer__input"
              />
              <button type="submit" className="footer__button">
                Join
              </button>
            </form>
            <p>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
        <div className="footer__links">
          <div>
            <h5>MY ACCOUNT</h5>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Brand Center</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h5>HELP & GUIDE</h5>
            <ul>
              <li>Discord Server</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5>CATEGORIES</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Licensing</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h5>DOWNLOAD</h5>
            <ul>
              <li>iOS</li>
              <li>Android</li>
              <li>We accept</li>
            </ul>
            <div className="footer__payments">
              <span>We accept</span>
              <div className="footer__payment-icons">
                <img src='https://green-shop-otabek.vercel.app/assets/payment-CJ6HT73w.png' alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2025 GreenShop. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
