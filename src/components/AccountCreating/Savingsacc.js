import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Stack } from "@mui/material";

function generateAccountNumber() {
  const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000); // Generates a random 10-digit number
  return accountNumber.toString(); // Converts the number to a string
}

function Savingsacc() {
  const [accountNumber, setAccountNumber] = useState(generateAccountNumber());
  const location = useLocation();
  console.log(location);

  // Sets the initial account number using the generateAccountNumber function

  function handleGenerateAccountNumber() {
    const newAccountNumber = generateAccountNumber(); // Generates a new account number
    setAccountNumber(newAccountNumber); // Updates the state with the new account number
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    alert("Savings Account is Created Sucessfully");
    navigate("/");
  };
  return (
    <div className="form-center" align="center">
      <div className="text-title">
        <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            padding: "30px",
          }}
        >
          <table
            style={{
              margin: "auto",
              width: "60%",
              textAlign: "center",
              borderRadius: "15px",
              opacity: "0.8",
              boxShadow: "10px 10px 5px ",
            }}
          >
            <br /><br /><br />
            <h2> Savings Account Details</h2>
            {/* <p> Savings Account Number: {accountNumber}</p>
            <button
              className="btn btn-outline-success"
              onClick={handleGenerateAccountNumber}
            >
              Generate New Account Number
            </button> */}
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                disabled
                type="text"
                label="First Name"
                value={location.state.fname}
                style={{ marginLeft: "70px" }}
              />

              <TextField
                type="text"
                label="Last Name"
                value={location.state.lname}
                style={{ marginLeft: "70px" }}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="Savings Account Number"
                value={accountNumber}
              />
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="Aadhar Number"
                value={location.state.aadharnum}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="Email"
                value={location.state.email}
              />
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="Phone Number"
                value={location.state.phone}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="PAN Number"
                value={location.state.Pan}
              />
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="Date of birth"
                value={location.state.dob}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="Bank Name"
                value={location.state.bankName}
              />
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="IFSC Code"
                value={location.state.ifscCode}
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                type="text"
                style={{ marginLeft: "70px" }}
                label="Branch Name"
                value={location.state.branch}
              />
            </Stack>
            <button type="submit"
              name="submit"
              onClick={handleSubmit}>
               Done
            </button>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Savingsacc;
