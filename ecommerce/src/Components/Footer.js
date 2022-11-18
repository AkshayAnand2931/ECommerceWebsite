import React from 'react'
import { useNavigate } from 'react-router'
import './style.css'

const Footer = () => {

	const navigate = useNavigate();

  return (
    <footer className="footer-distributed">

			<div className="footer-left">

				<h3><span>Apparel</span></h3>

				<p className="footer-links">
					<a onClick={()=>navigate('/home')} className="link-1">Home</a>
					
					<a onClick={()=>navigate('/men')}>Men</a>
				
					<a onClick={()=>navigate('/women')}>Women</a>

					<a onClick={()=>navigate('/kids')}>Kids</a>

					<a onClick={()=>navigate('/shoes')}>Shoes</a>
					
					<a onClick={()=>navigate('/profile')}>Profile</a>
					
					<a onClick={()=>navigate('/bag')}>Cart</a>
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