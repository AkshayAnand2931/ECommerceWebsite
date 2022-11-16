import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <footer className="footer-distributed">

			<div className="footer-left">

				<h3><span>Apparel</span></h3>

				<p className="footer-links">
					<a href="/home" className="link-1">Home</a>
					
					<a href="/men">Men</a>
				
					<a href="/women">Women</a>
				
					<a href="/shoes">Shoes</a>
					
					<a href="/profile">Profile</a>
					
					<a href="/">Cart</a>
				</p>

				
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>PES University</span> Ring Road, Benagluru</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 9876445632</p>
				</div>


			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Apparel is a clothing e-commerce website. We sell men and women clothing from top brands. We also sell shoes
				</p>


			</div>

		</footer>
  )
}

export default Footer