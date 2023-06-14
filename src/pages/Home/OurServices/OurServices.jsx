import React from 'react';

const OurServices = () => {
    return  (
        <div className=' bg-green-400 my-20  rounded-xl '>
            <h2 className='text-4xl text-center font-semibold p-3 '>Our Premium Services</h2>
            <p className='text-1xl text-center font-semibold p-5 w-3/5 mx-auto'>Our premium services guarantee exceptional quality and on-time delivery, going above and beyond to exceed your expectations. With meticulous attention to detail, we ensure that your experience is nothing short of extraordinary.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4  '>
                <div className='bg-custom-navy text-center text-white p-4 rounded-lg bg-purple-400  hover:bg-purple-700'>
                    {/* <FaBook className='text-7xl ml-24 '></FaBook> */}
                    
                    <div>
                        <h5 className='py-4 text-2xl'>On Time Class</h5>
                        <p>"Being on time for class is crucial for academic success and personal growth. It allows you to fully engage with the material, seize learning opportunities, develop professionalism, show respect for yourself and others, improve time management skills, create networking opportunities, and foster personal growth. Prioritizing punctuality sets the stage for success in education and beyond".!</p>
                    </div>

                </div>
                <div className='bg-custom-navy text-center text-white bg-purple-400  p-4 rounded-lg  hover:bg-purple-700'>
                    
                    <div>
                        <h5 className='py-4 text-2xl'>Free Class Note</h5>
                        <p>"Free class notes offer accessibility to students who may have missed a class due to various reasons, such as illness or conflicting commitments. These notes enable them to catch up on the material covered and stay up-to-date with the course.Free Class Note: Join us for you'll gain valuable insights and knowledge without any cost. Expand your understanding, interact with experts, and enhance your learning experience. Don't miss this fantastic opportunity to learn and grow. Register now and secure your spot!"!</p>
                    </div>

                </div>
                <div className='bg-custom-navy text-white text-center bg-purple-400  p-4 rounded-lg hover:bg-purple-700'>
                
                    <div>
                        <h5 className='py-4 text-2xl'>Expert Teacher </h5>
                        <p>"An expert teacher possesses a wealth of knowledge and experience in their field, allowing them to provide a high level of instruction and guidance to their students. They have mastered their subject matter and continually strive to deepen their understanding. An expert teacher understands the needs of their students, tailoring their teaching methods to promote effective learning. "!</p>
                    </div>

                </div>
                <div className='bg-custom-navy text-white text-center bg-purple-400  p-4 rounded-lg hover:bg-purple-700 '>
                    
                    <div>
                        <h5 className='py-4 text-2xl'>Best Learning Environment</h5>
                        <p>"A best learning environment is one that nurtures growth, engagement, and collaboration. It is a space where students feel safe, supported, and motivated to explore and expand their knowledge. In this environment, educators create an atmosphere that encourages curiosity, critical thinking, and creativity. Students are actively involved in the learning process, with ample opportunities for interaction and hands-on experiences. "!</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurServices;