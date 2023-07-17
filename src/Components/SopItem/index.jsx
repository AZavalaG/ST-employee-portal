import styles from './sopItem.module.css';
import PropTypes from 'prop-types';

const SopItem = ({user, itemHandler}) => {

    return (
        <div className={styles.cardContainer} onClick={itemHandler}>
            <p>{user?.name}</p>
            <p>{user?.rol}</p>
            <p>{user?.totalLeft}</p>
        </div>
    );
};

SopItem.propTypes = {
    user: PropTypes.object,
    itemHandler: PropTypes.func
}

export default SopItem;