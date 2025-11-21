import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div>
      <div>
        <h1> {reviews.length} Loading</h1>
      </div>
      <>
        <Swiper
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          //   pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <ReviewCard review={review} key={review.id}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
