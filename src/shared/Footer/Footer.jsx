import React from 'react';

import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-zinc-700'>
            <footer className=" rounded-lg mt-10 footer p-2 text-white">
                <div>
                    <div className='flex justify-start items-center text-semibold'>
                        <Link to='/'>  <h1 className='w-[200px] font-bold text-3xl'>Edu <span className='text-red-600 inline'>Hub</span></h1></Link>
                        
                    </div>
                    <p className='text-semibold'>Providing reliable product since 1992</p>
                    <p className='text-semibold'>Road No. 24, Building No. 420, HongKong, China</p>
                    <p className='text-semibold'>Contact: +0800154784578</p>
                    <a className='text-semibold' href="#">Email: abc@gmail.com</a>
                    <div className='flex justify-between items-center'>
                        <FaFacebookSquare className='text-3xl mr-4 link' />
                        <FaTwitter className='text-3xl mr-4 link ' />
                        <FaLinkedin className='text-3xl link ' />

                    </div>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>

                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                

            </footer>
            <div className='flex text-white font-bold mt[-10] justify-center items-center'>
                <p className='pb-5'>©2023 AniToy Company Ltd. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;