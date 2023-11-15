import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const TrendingNow = ({trendingNow, handleVideoClick}) => {

    return (
        <div className="trending-now">
            <p style={{color:"white"}}>Trending Now</p>
            <Swiper
                slidesPerView={8}
                spaceBetween={200}
                pagination={{
                    clickable: true,
                }}
            >
                {trendingNow?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={require(`../../assets/images/specials/${item.CoverImage}`)}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleVideoClick(item)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TrendingNow;
