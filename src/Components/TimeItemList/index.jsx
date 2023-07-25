import React, {useState, useEffect} from 'react';
import styles from './timeItemList.module.css';
import ItemCard from '../ItemCard';
import ItemDetails from '../ItemDetails';

const TimeItemList = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    // si no hay timecards / requests - poner un mensaje

    return ( 
        <div className={styles.itemListsContainer}>
            <h3>{props.title}</h3>
            <div className={styles.itemListsContainerList}>
                {props.itemsArray.map(item => {
                    return (
                        <>
                            {isOpen && <ItemDetails itemType={item.itemType} setIsOpen={setIsOpen} />}
                            <ItemCard onClick={() => setIsOpen(true)} itemType={item.itemType} title={item.title} subtitle={item.subtitle} status={item.status} />
                        </>
                    )
                })}
            </div>
        </div>
     );
}
 
export default TimeItemList;

//{isOpen && <Modal title="Hola" setIsOpen={setIsOpen} />}