import instagramIcon from '../../img/icon/instagram.svg'
import pinterestIcon from '../../img/icon/pinterest.svg'
import facebookIcon from '../../img/icon/facebook.svg'
import youtubeIcon from '../../img/icon/youtube.svg'
import './footer.css'


const Footer = () => {

	return (
    <footer className="footer">
      <div className="container footer-container">
        <a className="footer__logo" href="#">
          Logo
        </a>
        <div className="footer__wrapper">
          <div className="footer__social">
						<a className="footer__social-link" href="#"><img src={instagramIcon} alt="instagram icon" /></a>
            <a className="footer__social-link" href="#"><img src={pinterestIcon} alt="pinterest icon" /></a>
            <a className="footer__social-link" href="#"><img src={facebookIcon} alt="facebook icon" /></a>
            <a className="footer__social-link" href="#"><img src={youtubeIcon} alt="youtube icon" /></a>
          </div>

          <div className="footer__block">
            <div className="footer__row">
              <a className='footer__row-link' href="#">About Us</a>
              <a className='footer__row-link' href="#">FAQ</a>
              <a className='footer__row-link' href="#">Contact Us</a>
              <a className='footer__row-link' href="#">Careers</a>
              <a className='footer__row-link' href="#">Partners</a>
            </div>
            <div className="footer__row">
              <a className='footer__row-link' href="#">Blog</a>
              <a className='footer__row-link' href="#">Feedback</a>
              <a className='footer__row-link' href="#">Social Media</a>
              <a className='footer__row-link' href="#">Terms of Service</a>
              <a className='footer__row-link' href="#">Sitemap</a>
            </div>
          </div>

          <div className="footer__block">
            <div className="footer__row">
              <a className='footer__row-link' href="#">Newsletter Subscription</a>
              <a className='footer__row-link' href="#">Advertising Opportunities</a>
            </div>
            <div className="footer__row">
              <a className='footer__row-link' href="#">Privacy Policy</a>
              <a className='footer__row-link' href="#">Help & Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer