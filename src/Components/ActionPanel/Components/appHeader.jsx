import styles from '../action-panel.module.css';

const AppHeader = (props) => (
    <div className={styles.appHeader}>
        <h1>{props.appName}</h1>
    </div>
)
 
export default AppHeader;