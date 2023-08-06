import React from 'react';
import './Footer.css'
import Link from 'next/link';
// import { BsFacebook } from 'react-icons/bs';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-left">
					<div className="social-icons">
						<Link className='icons' href="https://www.linkedin.com/in/rishabh-kumar-7b0043217">
							<BsLinkedin />
						</Link>
						<Link className='icons' href="#twitter">
							<BsTwitter />
						</Link>
						<Link className='icons' href="#instagram">
							<BsInstagram />
						</Link>
					</div>
				</div>
				
				<div className="footer-right">
					<div className="footer-links">
						<Link href="/about">About Us</Link>
						<Link href="/service">Services</Link>
						<Link href="/contact">Contact Us</Link>
					</div>

					<div className="privacy-terms">
						<div className=''>
							&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
						</div>
						<Link href="#privacy">Privacy</Link>
						<Link href="#terms">Terms</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
