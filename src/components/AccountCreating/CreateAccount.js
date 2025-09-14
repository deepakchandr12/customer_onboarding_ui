import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import NavbarTool from "../NavbarTool";
import {
  TextField,
  Button,
  Container,
  Stack,
  FormControl,
} from "@mui/material";

function EkycStatusCheck() {
  const [aadhaar, setAadhaar] = useState("");
  const [dob, setDob] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [customerStatus, setCustomerStatus] = useState("Inactive");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleVerify = (event) => {
    event.preventDefault();
    // Here you can call your backend API to perform e-KYC verification
    // and update the verification status state variable accordingly
    // For demonstration purposes, we are setting the verification status to 'Verified' if the aadhaar and dob match
    if (
      firstName === "Soumya" &&
      lastName === "Ambati" &&
      aadhaar === "123456789012" &&
      dob === "01/01/2000"
    ) {
      setVerificationStatus("Verified");
      setCustomerStatus("Active");
      alert("Ekyc was Successfull");
    } else {
      setVerificationStatus("Not Verified");
      alert("Ekyc was unsuccessful");
    }
    // if(verificationStatus === )
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, dateOfBirth, phone, aadhar, pan);
  }

  return (
    <div align="center">
      <div className="text-title">
      <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            padding: "30px",
          }}
        ><br/><br/>
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
        <h3> Ekyc Check</h3>
        <FormControl onSubmit={handleSubmit} sx={{ m: 1, width: "50ch" }}>
          <form class=" form1" onSubmit={handleVerify}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                autoComplete="off"
                type="text"
                variant="outlined"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                required
              />
              <TextField
                autoComplete="off"
                type="text"
                variant="outlined"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                autoComplete="off"
                type="long"
                maxLength="12"
                variant="outlined"
                label="Aadhar number"
                inputProps={{ maxLength: 12 }}
                onChange={(e) => setAadhaar(e.target.value)}
                value={aadhaar}
                fullWidth
                required
              />
              <TextField
                autoComplete="off"
                type="text"
                variant="outlined"
                label="Date of Birth"
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
            </Stack>
            <br />
            <button align="Left" className="bt-form">
              {" "}
              <Link to="/CustomerData">Back</Link>
            </button>

            {/* <button type="submit"> <Link to="/">Check</Link></button> */}
            <button type="submit" className="bt-form ">
              Verify
            </button>
          </form>
        </FormControl>
        {verificationStatus && <p>Verification Status: {verificationStatus}</p>}
        {customerStatus === "Active" && (
          <div className="form-control" align="center ">
            <FormControl onSubmit={handleSubmit} sx={{ m: 1, width: "50ch" }}>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
                <TextField
                  autoComplete="off"
                  type="text"
                  id="outlined-error"
                  variant="outlined"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  fullWidth
                  required
                />
                <TextField
                  autoComplete="off"
                  type="text"
                  variant="outlined"
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  fullWidth
                  required
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
                <TextField
                  autoComplete="off"
                  type="email"
                  variant="outlined"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />

                <TextField
                  autoComplete="off"
                  type="dateOfBirth"
                  variant="outlined"
                  label="Date of Birth"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  value={dateOfBirth}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
                <TextField
                  autoComplete="off"
                  type="phone"
                  variant="outlined"
                  label="Phone Number"
                  inputProps={{ maxLength: 10 }}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                />

                <TextField
                  autoComplete="off"
                  type="aadhar"
                  variant="outlined"
                  label="Aadhar Number"
                  inputProps={{ maxLength: 12 }}
                  onChange={(e) => setAadhar(e.target.value)}
                  value={aadhar}
                  required
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
                <TextField
                  disabled
                  id="filled-disabled"
                  label="Veification Status"
                  defaultValue="Active"
                  variant="filled"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  autoComplete="off"
                  type="pan"
                  variant="outlined"
                  label="PAN Number"
                  inputProps={{ maxLength: 10 }}
                  onChange={(e) => setPan(e.target.value)}
                  value={pan}
                  required
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Stack>

              <Button>
                {" "}
                <Link
                  className="bt-form"
                  to="/Savingsacc"
                  state={{
                    aadharnum: aadhar,
                    fname: firstName,
                    lname: lastName,
                    email: email,
                    dob: dateOfBirth,
                    phone: phone,
                    Pan: pan,
                    bankName: "Kotak Mahendra Bank",
                    ifscCode: "KMBI002023",
                    branch: "Hyderabad",
                  }}
                >
                  Next
                </Link>{" "}
              </Button>
            </FormControl>
          </div>
        )}
        </table>
        </div>
      </div>
    </div>
  );
}

export default EkycStatusCheck;
