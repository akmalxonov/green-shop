import React from "react";
import { Carousel } from "antd";
import '../swiper/swiper.scss';
const contentStyle: React.CSSProperties = {
  height: "400px",
  color: "#fff",
};

const Swiper: React.FC = () => (
  <div className="container">
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <div className="hero">
            <div className="hero__text">
              <p className="hero__welcome">WELCOME TO GREENSHOP</p>
              <h1 className="hero__title">
                LET'S OBSERVE A <br />
                BETTER <span className="hero__highlight">PLANET</span>
              </h1>
              <p className="hero__desc">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="hero__btn">GET CREDITS</button>
            </div>
            <div className="hero__image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
                alt="plant"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div className="hero">
            <div className="hero__text">
              <p className="hero__welcome">WELCOME TO GREENSHOP</p>
              <h1 className="hero__title">
                LET'S OBSERVE A <br />
                BETTER <span className="hero__highlight">PLANET</span>
              </h1>
              <p className="hero__desc">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="hero__btn">GET CREDITS</button>
            </div>
            <div className="hero__image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
                alt="plant"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div className="hero">
            <div className="hero__text">
              <p className="hero__welcome">WELCOME TO GREENSHOP</p>
              <h1 className="hero__title">
                LET'S OBSERVE A <br />
                BETTER <span className="hero__highlight">PLANET</span>
              </h1>
              <p className="hero__desc">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="hero__btn">GET CREDITS</button>
            </div>
            <div className="hero__image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
                alt="plant"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <div className="hero">
            <div className="hero__text">
              <p className="hero__welcome">WELCOME TO GREENSHOP</p>
              <h1 className="hero__title">
                LET'S OBSERVE A <br />
                BETTER <span className="hero__highlight">PLANET</span>
              </h1>
              <p className="hero__desc">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="hero__btn">GET CREDITS</button>
            </div>
            <div className="hero__image">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
                alt="plant"
              />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
);

export default Swiper;
