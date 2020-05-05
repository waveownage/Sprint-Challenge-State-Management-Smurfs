import axios from "axios";

export const PostSmurf = (data) => {
    return dispatch => {
        axios
            .post("http://localhost:3333/smurfs", data)
            .then(res => {
                dispatch({ type: "POST_SMURF", payload: res.data[res.data.length -1] })
            })
            .catch(err => console.log("Error!!!", err));
    }
}