import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './SkillRequestItem.module.css';

const SkillRequestItem = (props) => {
    return (
        <div className={styles.SkillRequestItem}>
           {props.request_id && props.show_request_id && !props.element1 ? <div>Request No. {props.request_id}</div> : <div>{props.element1}</div> }
            <div>{props.element2}</div>
            { console.table(props)}
            { (!props.element3 || props.statusRequest)  ? <div><span className={props.statusRequest === 'approved' ? styles.approved : (props.statusRequest === 'rejected' ? styles.rejected :  styles.pending)}>{props.statusRequest}</span></div> : <div>{props.element3}A</div> }
            { props.element4  ?  <div>{props.element4}</div> : null }
        </div>
    );
}

export default SkillRequestItem;

SkillRequestItem.propTypes = {
    request_id: PropTypes.number.isRequired,
    show_request_id: PropTypes.bool.isRequired,
    request_obj: PropTypes.object.isRequired,
    status: PropTypes.oneOf(['approved', 'pending', 'rejected']),
    element1: PropTypes.string.isRequired,
    element2: PropTypes.string.isRequired,
    element3: PropTypes.string,
    element4: PropTypes.string,
};

SkillRequestItem.defaultProps = {
    status: 'pending',
    show_request_id: true,
}