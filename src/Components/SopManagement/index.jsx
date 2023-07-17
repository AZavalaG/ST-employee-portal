import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {supabase} from '../../supabaseClient';
import styles from './sopManagement.module.css';
import SopItem from '../SopItem';
import ModalWindow from "../modal";
import SopPending from '../SopPending';

const SopManagement = (props) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    

    const session = props.session;

    async function getTeamSop(idManager){

        const { data, error } = await supabase.from('Information').select(`
                                user, 
                                nombre, 
                                Rol ( id, name )
                            `)
                            .eq('Manager', idManager);
    }

    useEffect(()=>{
        if(session){
            const {user} = session;
            getTeamSop(user.id);
        }
        
    }, []);

    const showUserSopInfo = (idUser, userName) =>{
        console.log('Id usuario: ', idUser);
        setUserId(idUser);
        setTitle(userName);
        setShow(true);
      
    }

    /**
     * lista estatica para mostrar los items
     */
    const listUsers = [...Array(8)].map((_, index) => {
          return {
            id: index,
            name: 'Angel Sangerman',
            rol: 'Developer',
            totalLeft: `${index+1} SOPs Left`
          }
    })

    return (
        <div className={styles.gridSopItems}>
            {
                listUsers.map((item) =>{ 
                    return <SopItem key={item.id} user={item} itemHandler={()=>{
                        showUserSopInfo(item.id, item.name);
                    }}/>
                })
            }
            <ModalWindow onClose={() => setShow(false)} show={show} title={title}>
              <SopPending idUsr={userId}/>
            </ModalWindow>
        </div>
    );
};

SopManagement.propTypes = {
    session: PropTypes.object.isRequired
}

export default SopManagement;