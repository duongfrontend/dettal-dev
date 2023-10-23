import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { images } from "../../constants";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">giới thiệu</h2>

      <div className="app__abouts">
        <div className="app__abouts-welcomes">
          <h3>Xin chào mình là</h3>
          <div className="app__abouts-welcome--title">
            <p>Detta</p>
            <p>Developer</p>
          </div>
          <div className="app__abouts-welcome">
            <p className="texts fonts text-1">
              Mình tên thật là <span>đặng hoàng dương</span> hiện mình là
              Full-Stack Developer phụ trách phát triển <span>website</span> và{" "}
              <span>mobile app</span>
            </p>
            <p className="texts fonts text-2">
              Mình thích viết Blog,chơi game và tìm tòi các kiến thức mới. Sắp
              tới mình sẽ cho ra những sản phẩm mình đang phát triển. Rất mong
              được sự ủng hộ từ các bạn{" "}
            </p>
          </div>
        </div>
        {/* <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}>
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text fonts" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text fonts" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div> */}
        <div className="app__profiles">
          <Swiper
            style={{ width: "500px" }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            centeredSlides={true}
            // Autoplay={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <img src={images.profile2} alt="" className="img-slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images.profile3} alt="" className="img-slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images.profile4} alt="" className="img-slider" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "giới thiệu",
  "app__whitebg"
);
