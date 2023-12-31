import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm({ buttonText, titleText, link, linkText, linkTitle, ...props }) {
  return (
    <main className="auth-form">
      <div className="auth-form__wrapper">
        <a href="/">
          <img src={logo} alt="Лого" className="auth-form__logo" />
        </a>
        <h1 className="auth-form__title">{titleText}</h1>
        <form className="auth-form__form" name="authForm">
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
    </main>
  );
}

export default AuthForm;
