import { Stack, TextField, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";
import Joi from "joi-browser";
import axios from "axios";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function UpdateCustomer(props) {
  const params = useParams();
  const [customerObj, setCustomerObj] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    panNo: "",
    aadharNo: "",
    address: "",
    city: "",
    country: "",
    state: "",
    pinCode: "",
    emailId: "",
    mobileNo: "",
  });
  const countryList = [
    {
      value: "India",
      label: "India",
    },
    {
      value: "USA",
      label: "USA",
    },
    {
      value: "UK",
      label: "UK",
    },
    {
      value: "China",
      label: "China",
    },
  ];
  const genderList = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
    {
      value: "Others",
      label: "Others",
    },
  ];

  const [expErr, setExpErr] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8082/customer/viewCustomer/${params.id}`)
      .then((res) => {
        console.log(res);
        setCustomerObj(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  }, []);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const schema = Joi.object({
    firstName: Joi.string()
      .regex(new RegExp("^[a-zA-Z]{3,10}$"))
      .min(5)
      .max(10)
      .required()
      .error((errors) => {
        return {
          message: "First Name should be 3 to 10 alphabet",
        };
      }),
    lastName: Joi.string()
      .regex(new RegExp("^[a-zA-Z]{3,10}$"))
      .min(3)
      .max(10)
      .required()
      .error((errors) => {
        return {
          message: "Last Name should be 3 to 10 alphabet",
        };
      }),
    dateOfBirth: Joi.date()
      .raw()
      .less("1-1-2006")
      .min("1-1-1906")
      .error((errors) => {
        return {
          message: "DOB is required between 2006 and 1906",
        };
      }),
    gender: Joi.string()
      .required()
      .error((errors) => {
        return {
          message: "Gender details required",
        };
      }),
    panNo: Joi.string()
      .alphanum()
      .min(10)
      .max(10)
      .required()
      .error((errors) => {
        return {
          message: "Pan No should have 10 character",
        };
      }),
    aadharNo: Joi.string()
      .regex(new RegExp("^[0-9]{3,30}$"))
      .min(12)
      .max(12)
      .required()
      .error((errors) => {
        return {
          message: "Aaadhar no should have 12 character",
        };
      }),
    address: Joi.string()
      .min(3)
      .max(50)
      .required()
      .error((errors) => {
        return {
          message: "Address is required betweeen 3 to 50 character",
        };
      }),
    city: Joi.string()
      .regex(new RegExp("^[a-zA-Z]{3,30}$"))
      .min(3)
      .max(30)
      .required()
      .error((errors) => {
        return {
          message: "City should be 3 to 30 alphabet",
        };
      }),
    state: Joi.string()
      .regex(new RegExp("^[a-zA-Z]{3,30}$"))
      .min(3)
      .max(30)
      .required()
      .error((errors) => {
        return {
          message: "State should be 3 to 30 alphabet",
        };
      }),
    country: Joi.string()
      .regex(new RegExp("^[a-zA-Z]{3,30}$"))
      .min(3)
      .max(30)
      .required()
      .error((errors) => {
        return {
          message: "Country should be 3 to 30 alphabet",
        };
      }),
    pinCode: Joi.string()
      .regex(new RegExp("^[0-9]{6}$"))
      .min(6)
      .max(6)
      .required()
      .error((errors) => {
        return {
          message: "6 digit Pin code is required",
        };
      }),
    emailId: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "in"] },
      })
      .required()
      .error((errors) => {
        return {
          message: "Email id format example@mil.com",
        };
      }),
    mobileNo: Joi.string()
      .regex(new RegExp("^[0-9]{3,10}$"))
      .min(10)
      .max(10)
      .required()
      .error((errors) => {
        return {
          message: "10 digit mobile no is required",
        };
      }),
  });

  const validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(customerObj, schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        console.log(item);
        console.log("Inside for loop");
        errors[item.path[0]] = item.message;
        console.log(errors);
      }
    console.log(errors);
    console.log(Object.keys(errors).length);
    return Object.keys(errors).length === 0 ? null : errors;
    // return errors;
  };

  const handleChange = (event) => {
    const { name, type, value } = event.target;
    console.log(event.target);
    // const newCust = { ...customerObj };
    // newCust[event.target.name] = event.target.value;
    // setCustomerObj(newCust);

    setCustomerObj({ ...customerObj, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    console.log(errors);

    // if (!errors) navigate("/LoanAccount");
    if (errors) {
      return;
    } else {
      console.log("output");
      axios
        .put(
          `http://localhost:8082/customer/updateCustomer/${params.id}`,
          customerObj
        )
        .then((res) => {
          console.log("output");
          console.log(res);
          navigate(`/EKYC/${params.id}`);
        })
        .catch((err) => console.log(err.response));
      // console.log("After validation");
      // navigate("/EKYC");
    }
    // if (errors == {}) {
    //   console.log("No Errors..........");
    //   navigate("/LoanAccount");
    // }
    // navigate("/LoanAccount");
  };
  const btn = {
    color: "black",

    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
    padding: "6px 35px",
    marginTop: "8px",
    marginLeft: "42%",
    border: "solid",
    borderWidth: "1px",
    borderColor: "#808080",
    backgroundColor: "#6AD4FA",
  };
  return (
    <div
      style={{
        padding: "10px",
        // backgroundImage: "url(/images/3.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "60px",
      }}
    >
      <br />
      <form
        onSubmit={handleSubmit}
        style={{
          width: "60%",
          textAlign: "left",
          // marginTop: "30px",
          margin: "auto",
          // border: "1px solid black",
          // backgroundColor: "#f5f5f5",
          borderRadius: "15px",
          opacity: "0.8",
          boxShadow: "10px 10px 5px ",
        }}
      >
        <div
          style={{
            textAlign: "center",
            margin: "auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Castellar",
              fontWeight: "Bold",
              color: "#78909c",
            }}
            class="text-uppercase"
          >
            <strong>Update Customer</strong>
          </h2>
        </div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "15px",
            padding: "30px",
          }}
        >
          <table style={{ margin: "auto" }}>
            <Stack spacing={1}>
              <tr>
                <td>
                  <TextField
                    id="cusId"
                    name="cusId"
                    type={"text"}
                    label="Customer Id"
                    placeholder="cusId"
                    value={params.id}
                    // disabled
                    // defaultValue="1"
                    // InputProps={{
                    //   readOnly: true,
                    // }}
                  ></TextField>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <strong>Customer Info:</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    name="firstName"
                    type="text"
                    label="First Name"
                    value={customerObj.firstName}
                    placeholder="Enter first Name"
                    onChange={handleChange}
                    required
                    style={{ marginRight: "70px" }}
                  ></TextField>
                </td>
                <td>
                  <TextField
                    name="lastName"
                    type={"text"}
                    label="Last Name"
                    value={customerObj.lastName}
                    placeholder="Enter last Name"
                    onChange={handleChange}
                    required
                  ></TextField>
                </td>
              </tr>
              <tr>
                <div class="d-flex justify-content-between">
                  <td>
                    {errors && (
                      <small className="text-danger">{errors.firstName}</small>
                    )}
                  </td>
                  <td>
                    {errors && (
                      <small className="text-danger">{errors.lastName}</small>
                    )}
                  </td>
                </div>
              </tr>
              <tr>
                <td>
                  <Stack direction="row">
                    <label style={{ marginTop: "15px", marginRight: "25px" }}>
                      DOB:
                    </label>
                    <TextField
                      name="dateOfBirth"
                      type="date"
                      label=""
                      value={customerObj.dateOfBirth}
                      style={{ marginRight: "70px" }}
                      onChange={handleChange}
                    />
                    <td>
                      <TextField
                        style={{
                          // height: "50px",
                          width: "220px",
                        }}
                        name="gender"
                        // type={"text"}
                        select
                        label="Gender"
                        value={customerObj.gender}
                        placeholder="Enter Gender"
                        // style={{ marginRight: "70px" }}
                        onChange={handleChange}
                        // required
                      >
                        {genderList.map((gender) => (
                          <MenuItem key={gender.value} value={gender.value}>
                            {gender.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </td>
                  </Stack>
                </td>
              </tr>
              <tr>
                <div class="d-flex justify-content-between">
                  <td style={{ paddingRight: "90px" }}>
                    {errors && (
                      <small className="text-danger">
                        {errors.dateOfBirth}
                      </small>
                    )}
                  </td>
                  <td>
                    {errors && (
                      <small className="text-danger">{errors.gender}</small>
                    )}
                  </td>
                </div>
              </tr>
              <tr>
                <td>
                  <TextField
                    name="panNo"
                    type={"text"}
                    label="Pan No"
                    value={customerObj.panNo}
                    placeholder="Enter PAN card no"
                    style={{ marginRight: "70px" }}
                    onChange={handleChange}
                    required
                  ></TextField>
                </td>

                <td>
                  <TextField
                    name="aadharNo"
                    type={"text"}
                    label="Aadhar No"
                    value={customerObj.aadharNo}
                    placeholder="Enter Aadhar No"
                    onChange={handleChange}
                    required
                  ></TextField>
                </td>
              </tr>
              <tr>
                <div class="d-flex justify-content-between">
                  <td>
                    {errors && (
                      <small className="text-danger">{errors.panNo}</small>
                    )}
                  </td>

                  <td>
                    {errors && (
                      <small className="text-danger">{errors.aadharNo}</small>
                    )}
                  </td>
                </div>
              </tr>
              <tr colSpan="2">
                <td>
                  <strong>Address Details:</strong>
                </td>
              </tr>
              <tr colSpan="2">
                <td>
                  <TextField
                    sx={{ width: "60ch" }}
                    name="address"
                    type={"text"}
                    label="Address Line"
                    value={customerObj.address}
                    placeholder="Enter House no"
                    onChange={handleChange}
                    required
                  ></TextField>
                </td>
              </tr>
              <tr>
                <td>
                  {errors && (
                    <small className="text-danger">{errors.address}</small>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    name="city"
                    type={"text"}
                    label="City"
                    value={customerObj.city}
                    placeholder="Enter City"
                    style={{ marginRight: "70px" }}
                    onChange={handleChange}
                    required
                  ></TextField>
                </td>
                <td>
                  <TextField
                    name="state"
                    type={"text"}
                    label="State"
                    value={customerObj.state}
                    placeholder="Enter State"
                    onChange={handleChange}
                    required
                  ></TextField>
                </td>
              </tr>
              <tr>
                <div class="d-flex justify-content-between">
                  <td style={{ paddingRight: "90px" }}>
                    {errors && (
                      <small className="text-danger">{errors.city}</small>
                    )}
                  </td>
                  <td>
                    {errors && (
                      <small className="text-danger">{errors.state}</small>
                    )}
                  </td>
                </div>
              </tr>
              <tr>
                <td>
                  <TextField
                    style={{
                      // height: "50px",
                      width: "220px",
                      marginRight: "70px",
                    }}
                    name="country"
                    // type={"text"}
                    select
                    label="Country"
                    value={customerObj.country}
                    placeholder="Enter Country"
                    // style={{ marginRight: "70px" }}
                    onChange={handleChange}
                    // required
                  >
                    {countryList.map((country) => (
                      <MenuItem key={country.value} value={country.value}>
                        {country.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </td>
                <td>
                  <TextField
                    name="pinCode"
                    type={"text"}
                    label="Pin Code"
                    value={customerObj.pinCode}
                    placeholder="Enter Area Pin code"
                    onChange={handleChange}
                    required
                  ></TextField>
                </td>
              </tr>
              <tr>
                <div class="d-flex justify-content-between">
                  <td style={{ paddingRight: "90px" }}>
                    {errors && (
                      <small className="text-danger">{errors.country}</small>
                    )}
                  </td>
                  <td>
                    {errors && (
                      <small className="text-danger">{errors.pinCode}</small>
                    )}
                  </td>
                </div>
              </tr>
              <tr>
                <td>
                  <strong>Contact Details:</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    name="emailId"
                    type={"text"}
                    label="Email Id"
                    value={customerObj.emailId}
                    placeholder="Enter Email Id"
                    onChange={handleChange}
                    required
                    style={{ marginRight: "70px" }}
                  ></TextField>
                </td>
                <td>
                  <TextField
                    name="mobileNo"
                    type={"text"}
                    label="Mobile No"
                    value={customerObj.mobileNo}
                    placeholder="Enter Mobile No"
                    onChange={handleChange}
                    required
                  ></TextField>
                </td>
              </tr>
              <tr>
                <div class="d-flex justify-content-between">
                  <td>
                    {errors && (
                      <small className="text-danger">{errors.emailId}</small>
                    )}
                  </td>
                  <td>
                    {errors && (
                      <small className="text-danger">{errors.mobileNo}</small>
                    )}
                  </td>
                </div>
              </tr>
            </Stack>
          </table>
          <div>
            <Button
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              sx={{ mx: 37 }}
            >
              Submit
            </Button>
          </div>

          {/* <input type={"button"}>Submit</input> */}

          {/* <button style={{ float: "right" }}>Submit</button> */}
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default UpdateCustomer;
