import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2'>
              <div className='footer__logo'>logo</div>
            </div>
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='footer__links'>
                    <span className='footer__column-title'>Get Help</span>
                    <a className='footer__link'>Link</a>
                    <a className='footer__link'>Link</a>
                    <a className='footer__link'>Link</a>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='footer__links'>
                    <span className='footer__column-title'>Get Help</span>
                    <a className='footer__link'>Link</a>
                    <a className='footer__link'>Link</a>
                    <a className='footer__link'>Link</a>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='footer__links'>
                    <span className='footer__column-title'>Get Help</span>
                    <a className='footer__link'>Link</a>
                    <a className='footer__link'>Link</a>
                    <a className='footer__link'>Link</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-2'>
              <div className='footer__extra'>
                <span className='footer__column-title'>
                  Sign Up for Email Newsletter
                </span>
                <input
                  placeholder='email@comany.com'
                  classNamr='footer__input'
                  type='text'
                  name='email_newsletter'
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis sem vitae mauris viverra luctus. Pellentesque sit amet
                  sodales diam. Suspendisse varius urna risus, eget vulputate
                  dui aliquam eget.
                </p>
                <div className='footer__social-icons'>
                  <a className='footer__social-link'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a className='footer__social-link'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a className='footer__social-link'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a className='footer__social-link'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='footer__bottom'>
                  <div className='footer__copyright'>copyright 2021 Store</div>
                  <a className='footer__extra-links'>Link</a>
                  <a className='footer__extra-links'>Link</a>
                  <a className='footer__extra-links'>Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
