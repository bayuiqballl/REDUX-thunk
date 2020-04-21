import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postMock, getMockData } from "../Actions/getMock";

function MockAPI() {
  const [mock, setMock] = useState("");

  useEffect(() => {
    props.getMockData();
  }, []);

  const handleChange = (e) => {
    setMock(e.target.value);
  };

  const handlePlus = (e) => {
    e.preventDefault();

    let newMock = {
      id: props.mock[props.mock.leght - 1] + 1,
      name: mock,
    };
    props.postMock(newMock);
  };

  return <div></div>;
}

const mapStateToProps = (props) => {
  return {
    mock: props.reducerMock.data,
  };
};

const mapDispatchToProps = { getMockData, postMock };

export default connect(mapStateToProps, mapDispatchToProps)(MockAPI);
