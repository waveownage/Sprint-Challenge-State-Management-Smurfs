import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions";

const Quotes = ({ getSmurf, smurf, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getSmurf}>Load New Smurf</button>
      </div>
    );

  if (isFetching) {
    return <h2>Fetching a quote now :)</h2>;
  } else {
    return (
      <div>
        <h2>Cat Fact: {quote}</h2>
        <button onClick={getSmurf}>Load New Cat Fact</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(Smurfs);