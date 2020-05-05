import React, {useState} from "react";
import { connect } from "react-redux";
import { PostSmurf } from "../actions/index";

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

        props.PostSmurf(formState);
        
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

            <button type="submit" onClick={props.getSmurf}>Add New Smurf</button>
        </form>

    );
}

export default connect(null, { PostSmurf: PostSmurf })(SmurfForm);