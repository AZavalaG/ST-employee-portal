import Navbar from '../Components/Navbar';
import ActionPanel from '../Components/ActionPanel';

import styles from './layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={styles.layoutContainer}>
            <Navbar />
            <ActionPanel>
                Something!!!
            </ActionPanel>
            <main className={styles.mainContainer}>
                {children}
            </main>
        </div>
    );
};

export default Layout;