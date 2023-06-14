import React from 'react';
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../assets/m1.jpg';
import img2 from '../../../assets/m2.jpg';
import img3 from '../../../assets/m3.jpg';
import img4 from '../../../assets/m4.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';



const Banner = () => {



    return (

        <div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                

                <SwiperSlide>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img1} className="w-full rounded-lg" />
                        <div className="absolute flex h-full left-0 top-0  bg-gradient-to-b from-[#151515] to-[rgba(21,21,21,0)]">
                            <div className='text-white space-y-7 w-1/2 mx-auto mt-24'>
                                <h2 className="text-6xl font-bold"> Toys Shape Childhood Development Entertainment</h2>
                                <p className="text-2xl">Emotional Impact: Toys can have a profound emotional impact on individuals, providing comfort, companionship, and a sense of security.</p>
                                <div>
                                    <button className="btn btn-primary mr-5"><Link to='/register'>Register</Link></button>
                                </div>
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                

                <SwiperSlide>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img2} className="w-full rounded-lg" />
                        <div className="absolute flex h-full left-0 top-0  bg-gradient-to-b from-[#151515] to-[rgba(21,21,21,0)]">
                            <div className='text-white space-y-7 w-1/2 mx-auto mt-24'>
                                <h2 className="text-6xl font-bold"> Toys Shape Childhood Development Entertainment</h2>
                                <p className="text-2xl">Emotional Impact: Toys can have a profound emotional impact on individuals, providing comfort, companionship, and a sense of security.</p>
                                <div>
                                    <button className="btn btn-primary mr-5"><Link to='/register'>Register</Link></button>
                                </div>
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
               
                <SwiperSlide>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img4} className="w-full rounded-lg" />
                        <div className="absolute flex h-full left-0 top-0  bg-gradient-to-b from-[#151515] to-[rgba(21,21,21,0)]">
                            <div className='text-white space-y-7 w-1/2 mx-auto mt-24'>
                                <h2 className="text-6xl font-bold"> Toys Shape Childhood Development Entertainment</h2>
                                <p className="text-2xl">Emotional Impact: Toys can have a profound emotional impact on individuals, providing comfort, companionship, free and a sense of security.</p>
                                <div>
                                    <button className="btn btn-primary mr-5"><Link to='/register'>Register</Link></button>
                                </div>
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full rounded-lg" />
                        <div className="absolute flex h-full left-0 top-0  bg-gradient-to-b from-[#151515] to-[rgba(21,21,21,0)]">
                            <div className='text-white space-y-7 w-1/2 mx-auto mt-24'>
                                <h2 className="text-6xl font-bold"> Toys Shape Childhood Development Entertainment</h2>
                                <p className="text-2xl">Emotional </p>
                                <div>
                                    <button className="btn btn-primary mr-5"><Link to='/register'>Register</Link></button>
                                </div>
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
               
                {/* <SwiperSlide>Slide 3</SwiperSlide> */}
               
            </Swiper>
        </div>
    );
};

export default Banner;