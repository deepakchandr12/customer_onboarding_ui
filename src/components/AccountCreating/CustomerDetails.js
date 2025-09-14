import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Container, Stack } from "@mui/material";
import NavbarTool from "../NavbarTool";
function CustomerDetails() {
  const [aadhar, setAadhaar] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setaddress] = useState("");
  const [pan, setPan] = useState("");
  const [formErrors, setFormErrors] = useState({})
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(handleValidate(CustomerDetails));
  } 
  function handleValidate(CustomerDetails) {
    const errors = {};
  }
  return (
    <div className="form-center" align="center">
      <div className="text-title">
        <div className="bgforpage">
          <form>
            <h2> Customer Details</h2>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 6 }}>
              <TextField
                autoComplete="off"
                type="text"
                id="outlined-error"
                variant="outlined"
                color="secondary"
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
                color="secondary"
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
                type="phone"
                variant="outlined"
                color="secondary"
                label="Phone Number "
                inputProps={{ maxLength: 10 }}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextField
                autoComplete="off"
                type="dateOfBirth"
                variant="outlined"
                color="secondary"
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
                type="pan"
                variant="outlined"
                color="secondary"
                label="PAN Number"
                inputProps={{ maxLength: 10 }}
                onChange={(e) => setPan(e.target.value)}
                value={pan}
                required
                fullWidth
                sx={{ mb: 2 }}
              />
           
              <TextField
                autoComplete="off"
                type="email"
                variant="outlined"
                color="secondary"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <TextField
                autoComplete="off"
                type="text"
                variant="outlined"
                color="secondary"
                label="Address"
                onChange={(e) => setaddress(e.target.value)}
                value={address}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
            </Stack>
            <Stack direction="row" spacing={30}>
                <Button
                  to="/first"
                  variant="contained"
                  type="submit"
                  component={Link}
                  sx={{ mx: 20 }}
                >
                  Back
                </Button>
                <Button
                  
                  variant="contained"
                  type="submit"
                  name="submit"
                   to="/CreateAccount"
                  component={Link}
                  sx={{ mx: 20 }}>

                  Next
                </Button>
              </Stack>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
