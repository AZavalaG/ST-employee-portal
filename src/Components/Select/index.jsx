
import PropTypes from 'prop-types';
import styles from './select.module.css';
import ArrowDown from '../../Assets/arrow-down.png';

const SelectList = (props) => {

    if(!props.options){
        return(
            <select>
            </select>
        );
    }

    return (
        <div className={styles.select}>
            
            <select name={props.name} className={styles.stSelect} onChange={props?.handleChange}>
                {
                    props.options.map((item) => {
                        return (
                            <option key={item.value} value={item.value}>{item.label}</option>
                        )
                    })
                }
            </select>
            <img className={styles.arrowIcon} src={ArrowDown} alt="Arrow-Icon"/>
        </div>
    );
};

SelectList.propTypes = {
   handleChange: PropTypes.func,
   options: PropTypes.array,
   value: PropTypes.string,
   disabled: PropTypes.bool,
   multiple: PropTypes.bool,
   name: PropTypes.string.isRequired,
   required: PropTypes.bool.isRequired
}

SelectList.defaultProps = {
  disabled: false,
  multiple: false,
  required: false
}

export default SelectList;