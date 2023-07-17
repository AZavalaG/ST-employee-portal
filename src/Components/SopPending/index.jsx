import {useState, useEffect} from 'react';
import styles from './sopPending.module.css';
import SopItem from '../SopItem';
import PropTypes from 'prop-types';
import {supabase} from '../../supabaseClient';

const SopPending = ({idUsr}) => {
    const [sopList, setSopList] = useState([]);

    async function getAllSop(idUser){

        const { data, error } = await supabase.from('sopUsr').select(`
                idSop, 
                SOP ( idSop, Name )
            `)
            .eq('idUser', idUser);
    }

    useEffect(()=>{
            // getAllSop(idUsr);
            let completedListTemp = [...Array(10)].map((_, index)=>{
                return { 
                    id: index,
                    name: 'SOP Title '+index,
                    completed: (index % 3) == 0 ? true : false
                }
            }) 

            console.log(completedListTemp);

            setSopList(completedListTemp);
    }, []);

    const completedList = sopList.filter((item)=>{
         return item.completed === true;
    });

    const uncompletedList = sopList.filter((item)=>{
        return item.completed === false;
   });


    return (
        <div className={styles.contentContainer}>
            <div className={styles.itemsContainer}>
                <p className={styles.headerTitle}>Completed</p>
                {
                    completedList.map((item) => {
                        return <div  key={item.id} className={styles.itemWrapper}>
                                 <SopItem user={{name: item.name}}/>
                              </div>
                    })
                }
            </div>
            <div className={styles.itemsContainer}>
                <p className={styles.headerTitle}>Uncompleted</p>
                {
                    uncompletedList.map((item) => {
                        return <div key={item.id} className={styles.itemWrapper}>
                                <SopItem  user={{name: item.name}}/>
                               </div>
                    })
                }
            </div>
        </div>
    );
};

SopPending.propTypes = {
    idUsr: PropTypes.string.isRequired
}

export default SopPending;