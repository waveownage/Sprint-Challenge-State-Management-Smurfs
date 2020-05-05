import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/index";

const SmurfForm = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: ""
        id: "",
    });

    const submitHandler = e => {
        e.preventDefault();
        props.getSmurf(formState);
        
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

            <button type="submit" onClick={props.postApi}>Click here for post</button>
        </form>
    );
}

export default connect(null, { getSmurf: getSmurf })(SmurfForm);