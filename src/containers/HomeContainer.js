import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import Home from "../components/Home";

class HomeContainer extends Component {
  render() {
    console.log("home cont: ", this.props);
    return <Home {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    homeReducer: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
