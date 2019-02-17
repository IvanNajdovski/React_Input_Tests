import React from 'react';

const input = (props) => {
    if(props.name === "select"){
        let options = props.options.map((val,index) => {
           return( <option key={index} value={val}>{val}</option>)
        });
        return(
            <select name={props.name} onChange={props.change}>
                {options}
            </select>
        )
    }else {
        return (
            <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.change}/>
        )
    }
};
export default input;

