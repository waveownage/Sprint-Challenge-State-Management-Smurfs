import React, {useState} from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/index";

const SmurfForm = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: "",
        id: "",
    });

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            age: parseInt(e.target.value, 10) 
        })
    }
    const submitHandler = e => {
        e.preventDefault();

        props.getSmurf(formState.smurf);
        
        setFormState({
            name: "",
            age: "",
            height: "",
            id: "",
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <h1>The Smurf Crew</h1>

            <input name="name" placeholder="name" 
            value={formState.name} onChange={changeHandler}/>

            <input name="age" placeholder="age" type="number"
            value={formState.age} onChange={changeHandler}/>

            <input name="height" placeholder="height" 
            value={formState.height} onChange={changeHandler}/>

            <input name="id" placeholder="id"
            value={formState.id} onChange={changeHandler}/>

            <button type="submit" onClick={props.getSmurf}>Click here for post</button>
        </form>
    );
}

export default connect(null, { getSmurf: getSmurf })(SmurfForm);