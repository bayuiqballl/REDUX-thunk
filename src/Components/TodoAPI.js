import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAPI } from "../Actions/getAPI";

const TodoAPI = (props) => {
  useEffect(() => {
    props.getAPI();
  }, []);
  console.log(props);
  return <div></div>;
};

const mapStateToProps = (props) => {
  //   console.log(props.state.data);
  return {
    todo: props.state.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAPI: () => dispatch(getAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoAPI);
