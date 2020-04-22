import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postMock, getMockData, deleteMock } from "../Actions/getMock";

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

  const handleDelete = (id) => {
    props.deleteMock(id);
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
        <div>
          <li key={index}>{item.name}</li>
          <button
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (props) => {
  return {
    mock: props.reducerMock.data,
  };
};

const mapDispatchToProps = { getMockData, postMock, deleteMock };

export default connect(mapStateToProps, mapDispatchToProps)(MockAPI);
