import React from 'react';

const Footer = () => {
    return (
       <div className='bg-[#000000] pt-10 pb-5'>
         <footer className="footer max-w-[1440px] mx-auto sm:footer-horizontal  text-base-content ">
  <aside>
    <div className='flex flex-col'>
      <h1 className='text-white text-4xl font-bold mb-3'>CS — Ticket System</h1>
      <p className='text-white text-[16px] max-w-xs'>
        A modern ticket management system designed to streamline customer support and issue tracking. We help businesses resolve problems faster and improve customer satisfaction through efficient workflows and real-time updates.
      </p>
      <p className='text-white text-[14px] mt-2 opacity-75'>Providing reliable tech since 1992</p>
    </div>
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
 <nav>
    <h6 className="footer-title text-white text-[16px]">Social</h6>
    <a className="link link-hover text-white text-[16px]">Twitter</a>
    <a className="link link-hover text-white text-[16px]">Instagram</a>
    <a className="link link-hover text-white text-[16px]">Facebook</a>
    <a className="link link-hover text-white text-[16px]">GitHub</a>
  </nav>
</footer>
  <div>
<p className='text-white text-[13px] text-center'>© 2025 CS — Ticket System. All rights reserved.</p>
  </div>
       </div>
    );
};

export default Footer;