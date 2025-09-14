import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
//import Joi from "joi-browser";

// import axios from 'axios';

export default function LoanAccount() {
  const params = useParams();
  let [loan, setLoan] = useState({
    fn: "",
    ln: "",
    dob: "",
    phoneNo: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    //accountNo: "",
    aadharNo: "",
    panNo: "",
    tc: false,
  });

  const [formErrors, setFormErrors] = useState({});

  function handleValidate(loan) {
    const errors = {};

    if (loan.fn === "") {
      errors.fn = "First Name is required!";
    }

    if (loan.ln === "") {
      errors.ln = "Last Name is required!";
    }

    if (loan.phoneNo === "") {
      errors.phoneNo = "Phone Number is required!";
    } else if (Number(loan.phoneNo) < 0) {
      errors.phoneNo = "Phone Number Cannot be negative";
    } else if (loan.phoneNo.length < 10) {
      errors.phoneNo = "Phone Number must be 10 characters long!";
    }

    if (loan.address === "") {
      errors.address = "Address is required!";
    }

    if (loan.city === "") {
      errors.city = "Please enter city";
    }

    if (loan.state === "") {
      errors.state = "Please enter city";
    }

    if (loan.pincode === "") {
      errors.pincode = "PinCode is required!";
    } else if (loan.pincode.length < 6) {
      errors.pincode = "Pincode must be 6 characters long!";
    }

    /*if (loan.accountNo === '') {

      errors.accountNo = "Account Number is required!"

    }*/

    if (loan.aadharNo === "") {
      errors.aadharNo = "Aadhar is required!";
    } else if (loan.aadharNo.length < 12) {
      errors.aadharNo = "Aadhar Number must be 12 characters long!";
    }

    if (loan.panNo === "") {
      errors.panNo = "Pan Number is required!";
    } else if (loan.panNo.length < 10) {
      errors.panNo = "Pan Number must be 10 characters long!";
    }

    return errors;
  }

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      loan.fn !== "" &&
      loan.ln !== "" &&
      loan.phoneNo !== "" &&
      loan.address !== "" &&
      loan.pincode !== "" &&
      loan.aadharNo !== "" &&
      loan.panNo !== ""
    ) {
      alert("Kyc Completed");

      // navigate("/LoanEligibility");
    }
  }, [formErrors]);

  let handleChange = (event) => {
    let { type, name, value, checked } = event.target;
    console.log(event.target.type);
    if (type === "text" || type === "number" || type === "date") {
      setLoan({ ...loan, [name]: value });
    } else {
      setLoan({ ...loan, tc: checked });
    }
  };
  const handleSubmit = (event) => {
    setFormErrors(handleValidate(loan));
    navigate(`/SavingAccount/${params.id}`);
  };

  const navigate = useNavigate();
  const handleClick = (event) => {
    navigate("/Savingsacc");
  };

  const myStyle = {
    width: "70%",
    border: "solid",
    borderWidth: "1px",
    margin: "auto",
    marginTop: "30px",
    borderRadius: "10px",
    //backgroundColor: "#ADD8E6",
    boxShadow: "2px 2px 2px 2px",
  };

  return (
    <div style={{ padding: "23px" }}>
      {/* <h1 style={{fontFamily:"serif", backgroundColor:"blue", color:"white"}}>Goliath National Bank</h1> */}
      <Typography
        variant="h5"
        textAlign="center"
        fontFamily="Castellar"
        fontWeight="Bold"
        color="#78909c"
      >
        <br />
        <br />
        EKYC Form
      </Typography>
      <form style={myStyle} method="post" onSubmit={handleSubmit}>
        <div class="text-start">
          <table
            style={{ margin: "auto", marginTop: "30px", marginBottom: "20px" }}
          >
            <stack spacing={100}>
              <tr>
                <td>First Name:</td>
                <td class="opacity-75  ">
                  <input
                    class="form-control"
                    type="text"
                    name="fn"
                    value={loan.fn}
                    onChange={handleChange}
                    placeholder="Enter First Name*"
                    required
                  />
                </td>
                {formErrors && <p style={{ color: "red" }}>{formErrors.fn}</p>}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>Last Name: </td>
                <td class="opacity-75  ">
                  <input
                    class="form-control"
                    type="text"
                    name="ln"
                    value={loan.ln}
                    onChange={handleChange}
                    placeholder="Enter Last Name*"
                    required
                  />
                </td>
                {formErrors && <p style={{ color: "red" }}>{formErrors.ln}</p>}
              </tr>
              <tr style={{ height: "10px" }}></tr>
              <tr>
                <td>Date of Birth: </td>
                <td class="opacity-75  ">
                  <input
                    class="form-control"
                    type="date"
                    name="dob"
                    value={loan.dob}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </td>
                <td></td>
                <td>Phone No: </td>
                <td class="opacity-75 ">
                  <input
                    class="form-control"
                    type="number"
                    name="phoneNo"
                    value={loan.phoneNo}
                    onChange={handleChange}
                    placeholder="Enter Phone Number*"
                    required
                  />
                </td>
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.phoneNo}</p>
                )}
              </tr>
              <tr style={{ height: "10px" }}></tr>
              <tr>
                <td>Address: </td>
                <td class="opacity-75  ">
                  <input
                    class="form-control"
                    type="text"
                    cols="50"
                    name="address"
                    value={loan.address}
                    onChange={handleChange}
                    placeholder="Enter Address*"
                    required
                  />
                </td>
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.address}</p>
                )}
                <td>City: </td>
                <td class="opacity-75  ">
                  <input
                    class="form-control"
                    type="text"
                    cols="50"
                    name="city"
                    value={loan.city}
                    onChange={handleChange}
                    placeholder="Enter City*"
                    required
                  />
                </td>
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.city}</p>
                )}
              </tr>
              <tr style={{ height: "10px" }}></tr>
              <tr>
                <td>State: </td>
                <td class="opacity-75  ">
                  <input
                    class="form-control"
                    type="text"
                    cols="50"
                    name="state"
                    value={loan.state}
                    onChange={handleChange}
                    placeholder="Enter State*"
                    required
                  />
                </td>
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.state}</p>
                )}
                <td>PinCode: </td>
                <td class="opacity-75  ">
                  <input
                    class="form-control"
                    type="number"
                    name="pincode"
                    value={loan.pincode}
                    onChange={handleChange}
                    placeholder="Enter Code*"
                    required
                  />
                </td>
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.pincode}</p>
                )}
              </tr>
              <tr style={{ height: "10px" }}></tr>

              <tr>
                <td>Aadhar No: </td>
                <td class="opacity-75 ">
                  <input
                    class="form-control"
                    type="number"
                    name="aadharNo"
                    value={loan.aadharNo}
                    onChange={handleChange}
                    placeholder="Enter Aadhar Number*"
                    required
                  />
                </td>
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.aadharNo}</p>
                )}

                <td>Pan No: </td>
                <td class="opacity-75 ">
                  <input
                    class="form-control"
                    type="text"
                    name="panNo"
                    value={loan.panNo}
                    onChange={handleChange}
                    placeholder="Enter Pan Card Number*"
                    required
                  />
                  {formErrors && (
                    <p style={{ color: "red" }}>{formErrors.panNo}</p>
                  )}
                </td>
              </tr>
              <tr style={{ height: "10px" }}></tr>
              <tr>
                <td>Upload Aadhar: </td>
                <td class="opacity-75 ">
                  <input
                    required
                    type="file"
                    name="idproof"
                    accept="image/*,application/msword,.pdf"
                  />
                </td>
              </tr>
              <tr>
                <td>Upload Pan: </td>
                <td class="opacity-75 ">
                  <input
                    required
                    type="file"
                    name="idproof"
                    accept="image/*,application/msword,.pdf"
                  />
                </td>
              </tr>
            </stack>
          </table>
        </div>
        <div class="col-12">
          <center>
            {" "}
            <input
              type="checkbox"
              name="tc"
              value={loan.tc}
              onChange={handleChange}
              required
            />
            <span class="ms-3">I agree to terms and conditions</span>
            <br />
            <button
              type="button"
              class="mt-2 mb-4 btn btn-danger  w-30"
              href="/CreateCustomer"
              onClick={handleClick}
            >
              Back
            </button>
            &nbsp; &nbsp;
            <button
              type="submit"
              name="submit"
              onClick={handleSubmit}
              class="mt-2 mb-4 btn btn-success  w-30"
            >
              Submit
            </button>
          </center>
        </div>
      </form>
    </div>
  );
}
