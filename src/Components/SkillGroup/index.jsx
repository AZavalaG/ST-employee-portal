import React from 'react';
import SkillItem from '../SkillItem';
import styles from './SkillGroup.module.css';

const SkillGroup = (props) => {
    const skillsListed = props.skills;
    const groupBy = props.groupBy;

    const groupedData = skillsListed.reduce(
            (acc, item) => {
                const { categoria, subcategoria } = item;

                if(!acc[categoria]){
                    acc[categoria] = {}
                }

                if (!acc[categoria][subcategoria]) {
                    acc[categoria][subcategoria] = [];
                }
                
                acc[categoria][subcategoria].push(item);
                
                return acc;
            }, {});

   return (
            <div className={styles.sectionContent}>
            {Object.entries(groupedData).map(([categoria, subcategorias]) => (
                <div key={categoria} className={styles.skillGroupContainer}>
                <h2>{categoria}</h2>
                {Object.entries(subcategorias).map(([subcategoria, items]) => (
                    <div key={subcategoria}>
                    { (groupBy==='subcategoria') ? (<h3>{subcategoria}</h3>) : ''} 
                    <div className={styles.skillsContainer}>
                        { items.map((item, index) => (
                            (index % 2 === 0) ? 
                                (<div key={index} id="odd" className={styles.skillColumn}><SkillItem skillName={item.skill} skillValor={item.nivel} ></SkillItem></div>) : 
                                (<div key={index} id="even" className={styles.skillColumn}><SkillItem skillName={item.skill} skillValor={item.nivel} ></SkillItem></div>)
                        ))
                    }
                    </div>
                    </div>
                ))}
                </div>
            ))}
            </div>
    ); 
};

export default SkillGroup;