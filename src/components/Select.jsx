import React from "react";

function Select(props) {
  const box = {
    height: "20rem",
    width: "30rem",
    // background: "red",
    margin: "auto",
    borderRadius: "5px",
    border: "solid",
    // position: "relative",
    // padding: "auto",
  };
  const btn = {
    height: "20rem",
    width: "20em",
    margin: "auto",
  };
  return (
    <div style={{ marginTop: "100px", marginBottom: "1em" }}>
      <div style={box}>
        <p style={{ textAlign: "center", marginTop: "auto" }}>
          Are you a registered Customer
        </p>
        <div style={{ left: "20px" }}>
          <button>YES</button>
          <button>NO</button>
        </div>
      </div>
    </div>
  );
}

export default Select;
