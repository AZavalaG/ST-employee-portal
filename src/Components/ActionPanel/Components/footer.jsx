import styles from '../action-panel.module.css';
import stLogoBco from '../../../Assets/S&T_Logo_Blanco.png';

const Footer = () => (
    <div className={styles.actionPanelFooter}>
        <img src={stLogoBco} alt="Strategy & Technology Group Logo" />
        <p>Strategy & Technology Group 2023 &copy;, All rights reserved</p>
    </div>
)
export default Footer;