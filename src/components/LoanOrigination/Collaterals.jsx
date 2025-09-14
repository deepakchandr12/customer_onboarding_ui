import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Collaterals() {
  const paramsCustId = useParams();
  const paramsAccId = useParams();
  const [collateralData, setCollateralData] = useState({
    idProof: "",
    addressProof: "",
    salarySlip: "",
    bankStatement: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  let [cus, setCus] = useState({
    firstName: "",
    lastName: "",
  });

  function handleValidate(collateralData) {
    const errors = {};
    if (collateralData.idProof === "") {
      errors.idProof = "Identity Proof is required!";
    }
    if (collateralData.addressProof === "") {
      errors.addressProof = "Address proof is required!";
    }
    if (collateralData.salarySlip === "") {
      errors.salarySlip = "Salary Slip is required";
    }
    if (collateralData.bankStatement === "") {
      errors.bankStatement = "Bank Statement is required";
    }
    return errors;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setCollateralData({ ...collateralData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(handleValidate(collateralData));
    if (
      Object.keys(formErrors).length === 0 &&
      collateralData.idProof !== "" &&
      collateralData.addressProof !== "" &&
      collateralData.salarySlip !== "" &&
      collateralData.bankStatement !== ""
    ) {
      axios
        .post(`http://localhost:8083/addCollaterals/1000`, collateralData)
        .then((res) => {
          console.log(res);
          alert("Your Collaterals are saved.");
          navigate(
            `/LoanEligibility/${paramsCustId.cusId}/${paramsAccId.accId}`
          );
        })
        .catch((err) => console.log(err.response));
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8083/customer/viewCustomer/1000`)
      .then((res) => {
        console.log(res);
        setCus(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  }, []);

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "left",
        backgroundImage: "url(/images/6.jpg)",
        backgroundSize: "cover",
      }}
    >
      <br />
      <br />
      <br />
      <Typography
        variant="h4"
        textAlign="center"
        fontFamily="Castellar"
        fontWeight="Bold"
        color="#78909c"
      >
        Submit Collaterals
      </Typography>
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              width: "430px",
              backgroundColor: "white",
              mx: "auto",
              opacity: "0.8",
              // p: 3,
              borderRadius: 2,
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            }}
          >
            <div className="wrapper">
              <form onSubmit={handleSubmit}>
                {/* <fieldset > */}
                <Stack style={{ marginLeft: "40px" }}>
                  <center>
                    <br />
                    <label>First Name : &nbsp; </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={cus.firstName}
                      onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label>Last Name : &nbsp; </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={cus.lastName}
                      onChange={handleChange}
                    />
                    <br />
                    <br />

                    <label> Id Proof : &nbsp; &nbsp; &nbsp;</label>
                    <input
                      required
                      type="text"
                      name="idProof"
                      value={collateralData.idProof}
                      onChange={handleChange}
                    />
                    {formErrors && (
                      <p style={{ color: "red" }}>{formErrors.idProof}</p>
                    )}

                    <label> Address Proof: &nbsp;</label>
                    {/* <input required type="file" name="addressproof" onChange={handleFile} accept="image/*,application/msword,.pdf" /> */}
                    <input
                      required
                      type="text"
                      name="addressProof"
                      value={collateralData.addressProof}
                      onChange={handleChange}
                    />
                    <br />

                    {formErrors && (
                      <p style={{ color: "red" }}>{formErrors.addressProof}</p>
                    )}

                    <label>
                      Salary Slip &nbsp; <br /> (Last 3 months):&nbsp;{" "}
                    </label>
                    <input
                      required
                      type="text"
                      name="salarySlip"
                      value={collateralData.salarySlip}
                      onChange={handleChange}
                    />
                    <br />
                    {formErrors && (
                      <p style={{ color: "red" }}>{formErrors.salarySlip}</p>
                    )}

                    <label>
                      {" "}
                      Bank Statement <br />
                      (Last 2 months):&nbsp;
                    </label>
                    <input
                      required
                      type="text"
                      name="bankStatement"
                      value={collateralData.bankStatement}
                      onChange={handleChange}
                    />
                    <br />
                    {formErrors && (
                      <p style={{ color: "red" }}>{formErrors.bankStatement}</p>
                    )}
                    <br />

                    <br />
                    <Stack sx={{ mx: 6 }} spacing={5} direction="row">
                      <Button
                        to="/LoanDetails"
                        variant="outlined"
                        component={Link}
                        sx={{ color: "#000000" }}
                      >
                        Back
                      </Button>
                      {/* <button class="w-10 btn btn-secondary " >Upload File</button> */}
                      <Button
                        onClick={handleSubmit}
                        variant="contained"
                        type="submit"
                        name="submit"
                      >
                        Next
                      </Button>
                    </Stack>
                    {/* </div>  */}
                    <br />
                  </center>
                </Stack>
                {/* </fieldset> */}
              </form>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default Collaterals;
