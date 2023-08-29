import {
  FaInstagram,
  FaPinterestSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div data-testid="footer" className="footer-container">
      <div className="footer-logo-container">
        <img
          src="https://res.cloudinary.com/doofdbsu7/image/upload/v1693331248/footerlogo_aw4rtn.svg"
          alt="footer-logo"
          className="footer-logo"
        />
        <h1 className="footer-heading">Tasty Kitchens </h1>
      </div>
      <p className="footer-para">
        The only thing we are serious about is food.
        <br />
        Contact us on
      </p>
      <div className="icons-container">
        <FaPinterestSquare className="social-media-icon" />
        <FaInstagram className="social-media-icon" />
        <FaTwitterSquare className="social-media-icon" />
        <FaFacebookSquare className="social-media-icon" />
      </div>
    </div>
  )
}
