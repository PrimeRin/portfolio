import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile.jpeg";
import profilePic2 from "../../img/profile1.jpg";
import profilePic3 from "../../img/profile2.jpg";
import profilePic4 from "../../img/profile3.png";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with him on our web development project has been an absolute pleasure. They transformed our vision into a stunning, user-friendly website that has received rave reviews from our clients.",
    },
    {
      img: profilePic2,
      review:
        "I can't thank Prime enough for their outstanding work on our website. They took our outdated site and turned it into a modern, responsive masterpiece.",
    },
    {
      img: profilePic3,
      review:
        "He is an exceptional web developer who truly understands the needs of their clients. They were able to take our ideas and turn them into a fully functional and pleasing website that exceeded our expectations.",
    },
    {
      img: profilePic4,
      review:
        "Choosing him for our web development project was the best decision we made. They delivered a high-quality website on time and within budget, and their communication throughout the project was excellent.",
    },
  ];
  
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Client always get </span>
        <span>Exceptional work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
