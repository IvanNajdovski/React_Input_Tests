import React from 'react';
import classes from './DataCard.module.scss';

const dataCard = props => {
    return(
        <div className={classes.DataCard}>
            <h3>{props.data.name}</h3>
            <h3>{props.data.email}</h3>
            <p>{props.data.phone}</p>
            <p>{props.data.select}</p>
            <button onClick={() => props.pressed(props.index)}>delete</button>
        </div>
    )
};
export default dataCard;