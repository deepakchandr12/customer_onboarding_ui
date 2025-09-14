import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarTool from "../../components/NavbarTool";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Link } from "react-router-dom";
import assets from "../../assets/assets.svg";
import {
  KeyToolContainer,
  KeyToolWrapper,
  ProductsH4,
  Column1,
  Column2,
  ImgWrap,
  Img,
} from "./KeyToolInfoElements";

function KeyToolInfoSectionOne() {
  // const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({ ...values, [name]: value }))
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputs);
  // }
  // const handleFirstName = e => {

  //   if (e.target.value == '') {
  //       // setLoanText('')
  //       setErrors(prevState => {
  //           return { ...prevState, firstNameError: false }
  //       })
  //   }
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [gender, setGender] = React.useState();
  const [dob, setDob] = React.useState();
  const [panId, setPanId] = React.useState();
  const [aadharId, setAadharId] = React.useState();
  const [phoneNum, setphoneNum] = React.useState();
  const [address, setAddress] = React.useState();

  const [error, setError] = React.useState({
    FirstNameError: "",
    LastNameError: "",
    GenderError: "",
    DobError: "",
    PanIdError: "",
    AadharIdError: "",
    PhoneNumError: "",
    AddressError: "",
  });

  return (
    <>
      <NavbarTool />
      <KeyToolContainer style={{ backgroundColor: "aliceblue" }}>
        <ProductsH4>Customer Onboarding</ProductsH4>
        <KeyToolWrapper>
          <Column1>
            <form>
              <Grid container columnSpacing={{ xs: 0, sm: 3 }} paddingLeft={10}>
                <Grid item xs={3}>
                  {" "}
                  <FormLabel style={{ color: "black" }}>
                    <b>Customer Name:</b>
                  </FormLabel>
                </Grid>
              </Grid>
              <Grid container columnSpacing={{ xs: 0, sm: 3 }} paddingLeft={10}>
                <Grid item xs={3}>
                  <TextField
                    margin="normal"
                    fullWidth
                    variant="filled"
                    autoComplete="off"
                    label="First Name"
                    inputProps={{
                      autocomplete: "new-password",
                      form: {
                        autocomplete: "off",
                      },
                    }}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    required
                    error={error.FirstNameError}
                  />
                </Grid>
                <Grid item xs={3} sm={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    autoComplete="off"
                    label="Last Name"
                    type="text"
                    margin="normal"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    InputLabelProps={{ style: { fontSize: 15 } }}
                    required
                    error={error.LastNameError}
                  />
                </Grid>
              </Grid>
              <br></br>

              <Grid container columnSpacing={{ xs: 0, sm: 3 }} paddingLeft={10}>
                <Grid item xs={3}>
                  <FormControl component="fieldset" error={error.GenderError}>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      <b>Gender:</b>
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="controlled-radio-buttons-group"
                      value={gender}
                      onChange={(event) => setGender(event.target.value)}
                      required
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={3} sm={3}>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="date"
                    label="Birth Date"
                    InputLabelProps={{ shrink: true }}
                    value={dob}
                    onChange={(event) => setDob(event.target.value)}
                    margin="normal"
                    required
                    error={error.DobError}
                  />
                </Grid>
                <br></br>

                <Grid
                  container
                  columnSpacing={{ xs: 0, sm: 3 }}
                  paddingLeft={3}
                  paddingTop={5}
                >
                  <Grid item xs={3}>
                    <FormLabel style={{ color: "black" }}>
                      <b>PAN ID:</b>
                    </FormLabel>
                    <TextField
                      margin="normal"
                      autoComplete="off"
                      fullWidth
                      variant="filled"
                      inputProps={{ maxLength: 10 }}
                      label="Enter the PAN Id"
                      type="text"
                      id="panId"
                      name="panId"
                      value={panId}
                      onChange={(event) => setPanId(event.target.value)}
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      required
                      error={error.PanIdError}
                    />
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <FormLabel style={{ color: "black" }}>
                      <b>Aadhar ID:</b>
                    </FormLabel>
                    <TextField
                      fullWidth
                      variant="filled"
                      autoComplete="off"
                      label="Enter the Aadhar Id"
                      type="text"
                      id="aadharId"
                      name="aadharId"
                      inputProps={{ maxLength: 12 }}
                      value={aadharId}
                      onChange={(event) => setAadharId(event.target.value)}
                      margin="normal"
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      required
                      error={error.AadharIdError}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  columnSpacing={{ xs: 0, sm: 3 }}
                  paddingLeft={3}
                  paddingTop={5}
                >
                  <Grid item xs={3}>
                    <FormLabel style={{ color: "black" }}>
                      <b>ADDRESS:</b>
                    </FormLabel>
                    <TextField
                      id="outlined-textarea"
                      margin="normal"
                      fullWidth
                      label="Enter the Address"
                      multiline
                      type="text"
                      name="address"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      required
                      error={error.AddressError}
                    />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <FormLabel style={{ color: "black" }}>
                      <b>Phone Number:</b>
                    </FormLabel>
                    <TextField
                      fullWidth
                      variant="filled"
                      autoComplete="off"
                      label="Enter the Phone Number"
                      type="text"
                      id="phoneNum"
                      name="phoneNum"
                      inputProps={{ maxLength: 10 }}
                      value={phoneNum}
                      onChange={(event) => setphoneNum(event.target.value)}
                      margin="normal"
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      required
                      error={error.phoneNumError}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  columnSpacing={{ xs: 0, sm: 3 }}
                  paddingLeft={25}
                  paddingTop={5}
                  paddingBottom={5}
                >
                  <Grid item xs={7}>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        let err = {};
                        let isError = false;
                        if (!firstName) {
                          err.FirstNameError = "First name is required.";

                          isError = true;
                        }
                        if (!lastName) {
                          err.LastNameError = "Last name is required.";

                          isError = true;
                        }
                        if (!gender) {
                          err.GenderError = "Gender is required.";

                          isError = true;
                        }
                        if (!dob) {
                          err.DobError = "Birth Date is required.";

                          isError = true;
                        }
                        if (!panId) {
                          err.PanIdError = "PAN ID is required.";

                          isError = true;
                        }
                        if (!aadharId) {
                          err.AadharIdError = "Aadhar ID is required.";

                          isError = true;
                        }
                        if (!address) {
                          err.AddressError = "Address is required.";

                          isError = true;
                        }
                        if (!phoneNum) {
                          err.phoneNumError = "Phone Number is required.";

                          isError = true;
                        }
                        if (!isError) {
                          navigate("/CustomerData");
                          alert("Customer Created Sucessfully");
                        } else {
                          setError(err);
                        }
                      }}
                      variant="contained"
                      type="submit"
                      endIcon={<CreateIcon />}
                    >
                      Create Customer
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={assets} alt="" />
            </ImgWrap>
          </Column2>
        </KeyToolWrapper>
      </KeyToolContainer>
    </>
  );
}

export default KeyToolInfoSectionOne;
