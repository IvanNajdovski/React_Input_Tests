import React, {Component} from 'react';
import classes from './App.module.scss';
import Input from './components/Input/Input';
import DataCard from './components/DataCard/DataCard';
import {connect} from 'react-redux';
import {addItem, removeItemInit} from './Store/Actions';

class App extends Component {
    state = {
        name: "",
        results: [],
        inputData: {
            name: {
                val: "",
                type: "text",
                placeholder: "Enter your username"
            },
            email: {
                val: "",
                type: "email",
                placeholder: "Enter Your Email"
            },
            phone: {
                val: "",
                type: "number",
                placeholder: "Mobile number"
            },
            select: {
                val: "",
                type: "select",
                options: ["Eat Dinner", "Eat Lunch", "Eat Supper"]
            }

        }

    };
    onChangeHandler = (e) => {
        this.setState({
            inputData: {
                ...this.state.inputData,
                [e.target.name]: {
                    ...this.state.inputData[e.target.name],
                    val: e.target.value
                }
            }
        });
        console.log(this.state)
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {};
        Object.keys(this.state.inputData).map(val =>{
            data[val]= this.state.inputData[val].val
        });
        console.log("DATA IS",data);
        console.log(this.state);
        this.props.addItem(data);
        this.setState({name: ""})
    };
    onDeleteResultHandler = (id) => {
        // const newResults = this.state.results.filter((val, index) => index !== id);
        // this.setState({results: newResults})
        this.props.removeItem(id);
    };

    render() {

        let inputs = Object.keys(this.state.inputData);
        const newInputs = inputs.map((val) => {
            return {name: val, ...this.state.inputData[val]}
        }).map((val,index) => {
            return (
                <Input key={index} options={val.options} name={val.name} type={val.type} placeholder={val.placeholder} change={this.onChangeHandler}/>
            )
        });
        console.log(newInputs)
        let results = this.props.results.map((val, index) => {
            return (
                <DataCard index={index} data={val} pressed={this.onDeleteResultHandler}/>
            )
        });
        return (
            <div className={classes.App}>
                <form className={classes.Form} onSubmit={this.onSubmitHandler}>
                    {newInputs}
                    <input type={"submit"} value={"Send Form"}/>
                </form>
                {results}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        results: state.results.results
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addItem: (data) => dispatch(addItem(data)),
        removeItem: (id) => dispatch(removeItemInit(id))

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
