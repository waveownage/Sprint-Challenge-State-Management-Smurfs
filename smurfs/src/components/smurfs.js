import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import axios from 'axios';

const List = (props) => {
    const [smurfList, setSmurfList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                    console.log("res", res.data);
                    setSmurfList(res.data)
            })
            .catch(err => console.log("Error", err))
    }, [props.initialState])

    return (
        <>
            {smurfList.map((item) => {
                return (
                    <>
                        <br/>
                            <p>{item.name}</p>
                            <p>age: {item.age}</p>
                            <p>height: {item.height}</p>
                            <p>id: {item.id}</p>
                        <br/>
                    </>
                )
            })}
        </>
    )
}

export default connect((state) =>{
    return {
        initialState: state
    }
})(List);