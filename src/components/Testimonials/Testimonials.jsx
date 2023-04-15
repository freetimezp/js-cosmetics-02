import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';

import css from './Testimonials.module.css';

const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Seedly say has suitable disposal and boy. Exercise joy man child rejoiced.</span>
                </div>

                <img src={Hero} alt="hero" />

                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers With Us</span>
                </div>
            </div>

            <div className={css.reviews}>Reviews</div>

            <div className={css.carousel}>
                <Swiper
                    breakpoints={{
                        856: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        }
                    }}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={60}
                    className={css.tCarousel}
                >
                    {TestimonialsData.map((testimonial, i) => (
                        <SwiperSlide key={i}>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt="testimonial" />
                                <span>{testimonial.comment}</span>
                                <hr />
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
