import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm({ buttonText, titleText, link, linkText, linkTitle, ...props }) {
  return (
    <div className="auth-form">
      <div className="auth-form__wrapper">
        <img src={logo} alt="Лого" className="auth-form__logo" />
        <p className="auth-form__title">{titleText}</p>
        <form className="auth-form__form">
          {props.children}
          <input type="submit" className="auth-form__button" value={buttonText} />
          {link && (
            <div className="auth-form__redirect">
              <span className="auth-form__link-text">{linkText}⠀</span>
              <Link to={link} className="auth-form__link">
                {linkTitle}
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default AuthForm;