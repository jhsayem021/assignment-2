import React from 'react';

const Footer = () => {
    return (
       <div className='bg-[#000000] '>
         <footer className="footer max-w-[1440px] mx-auto sm:footer-horizontal  text-base-content p-10">
  <aside>
    <p className='text-white text-4xl'>
      CS — Ticket System
      <br />
      <span className='text-white text-[18px]'>Providing reliable tech since 1992</span>
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-white text-[16px]">Services</h6>
    <a className="link link-hover text-white text-[16px]">Branding</a>
    <a className="link link-hover text-white text-[16px]">Design</a>
    <a className="link link-hover text-white text-[16px]">Marketing</a>
    <a className="link link-hover text-white text-[16px]">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white text-[16px]">Company</h6>
    <a className="link link-hover text-white text-[16px]">About us</a>
    <a className="link link-hover text-white text-[16px]">Contact</a>
    <a className="link link-hover text-white text-[16px]">Jobs</a>
    <a className="link link-hover text-white text-[16px]">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white text-[16px]">Legal</h6>
    <a className="link link-hover text-white text-[16px]">Terms of use</a>
    <a className="link link-hover text-white text-[16px]">Privacy policy</a>
    <a className="link link-hover text-white text-[16px]">Cookie policy</a>
  </nav>
</footer>
       </div>
    );
};

export default Footer;