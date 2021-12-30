import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
//import IconLogo from './IconLogo';
//import LogoImage from './saunatime-logo.png';
import IconLogo from './cottagedays-logo-small.png';
import LogoImage from './cottagedays-logo.png';
import css from './Logo.module.css';

// const Logo = props => {
//   const { className, format, ...rest } = props;
//   const mobileClasses = classNames(css.logoMobile, className);
//
//   if (format === 'desktop') {
//     return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;
//   }
//
//   return <IconLogo className={mobileClasses} {...rest} />;
// };
const Logo = props => {
  const { className, format, ...rest } = props;
  const isMobile = format !== 'desktop';
  const classes = classNames(className, { [css.logoMobile]: isMobile });
  const logoImage = isMobile ? IconLogo : LogoImage;

  return (
    <img
      className={classes}
      src={logoImage}
      alt={config.siteTitle}
      {...rest}
    />
  );
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
