import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.css';
import companyLogo from './S&T_Logo_Blanco.png';

const currentYear = new Date().getFullYear();
const Footer = (props) => {
    return(
        <div className={styles.pi}>
            <h1 className={`${styles['h1']}`}>{props.children} Team&apos;s SOPs</h1>
            <div className={`${styles['footer-container']}`}>
                <img className={`${styles['company-logo']}`} src={companyLogo} alt="Company Logo" />
                <h2 className={`${styles['h2']}`}>Strategy & Technology Group {currentYear} <br /> All rights reserved</h2>
            </div>
        </div>
    );
}

Footer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Footer;