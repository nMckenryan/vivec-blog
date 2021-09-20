import axios from "axios";
import { Component } from "react";

export default ({ pageContext: { state } }) => {
  <StateListComponent usState={state}></StateListComponent>;
};

class StateListComponent extends React.Component {
    constructor(this.props) {
        super.props;

        this.state ={
            data: []
        }

        componentDidMount() {
            const state = this.props.usState;

            axios.get(`https://covid-19testing.github.io/locations/${state}/complete.json`).then(
                (response) => {
                    this.setState({ data: response.data })
                }
            )
        }
    }
}