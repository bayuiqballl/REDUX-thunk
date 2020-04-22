import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postMock, getMockData } from "../Actions/getMock";

const MockAPI = (props) => {
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
  //   console.log(props);
  return (
    <div>
      <h1>API Get and Post </h1>
      <form onSubmit={handlePlus}>
        <label>
          new Article{" "}
          <input type="text" value={mock} name="mock" onChange={handleChange} />
        </label>
        <input type="submit" value="Add" />
      </form>

      {props.mock.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    mock: props.reducerMock.data,
  };
};

const mapDispatchToProps = { getMockData, postMock };

export default connect(mapStateToProps, mapDispatchToProps)(MockAPI);
