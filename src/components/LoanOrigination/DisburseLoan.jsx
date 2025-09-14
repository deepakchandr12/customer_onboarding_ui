import React, { useState } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MenuItem, TextField } from "@mui/material";
import Joi from "joi-browser";
import axios from "axios";

const DisburseLoan = () => {
  const [values, setValues] = useState({
    loanId: "",
    accountId: "",
    loanAmount: "",
    transactionDate: new Date().toISOString().slice(0,10),
  });

  const [allLoanId, setAllLoanId]=useState([]);
  const [allAccountId, setAllAccountId]=useState([]);
  //returns a string in simplified extended ISO format
  // var curr = new Date();
  // curr.setDate(curr.getDate());
  // var date = curr.toISOString().split("T")[0];

  const navigate = useNavigate();
  //for validation errors
  const [errors, setFormErrors] = useState({});
  //for exception errors from backend
  const [errRes, setErrRes] = useState();

  function handleChange(event) {
    const { name, type, value } = event.target;
    // if(type==="text" ){
    //   setValues({ ...values, [event.target.name]: event.target.value });
    // }
    // if(type==="date"){
    //   setValues({...values,transactionDate:date})
    // }
    setValues({ ...values, [event.target.name]: event.target.value });
  }
 
  function handleSubmit(event) {
    event.preventDefault();
    setFormErrors(validate());
    //if errors return validation errors
    if (errors) return;
    else {
      axios
        .post("http://localhost:8082/loan/disburse", values)
        .then((res) => {
          console.log(res);
          alert("loan is successfully disbursed to account");
          navigate("/");
        })
        .catch((err) => {
          if (err.response) {
            //exception errors
            setErrRes(err.response.data.message);
            console.log(err.response.data.message);
          }
        });
    }
  }
 //view all loan accounts
 useEffect(() => {
    axios.get(`http://localhost:8082/LoanAccount/allLoanId`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            // console.log(res.data.);
            setAllLoanId(res.data);
        }).catch((err) => {
            console.log(err);
            console.log(err.response.data.message);
        }
        );

        axios.get(`http://localhost:8082/SavingsAccount/allAccountId`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            // console.log(res.data.);
            setAllAccountId(res.data);
        }).catch((err) => {
            console.log(err);
            console.log(err.response.data.message);
        }
        );
}, []);

// http://localhost:8080/SavingsAccount/allAccountId

  //step1:define schema to validate form data
  const schema = Joi.object({
    // .regex(new RegExp("^[0-9]{12}$"))
    // loanId: Joi.string()
    //   .regex(new RegExp("^[0-9]{4}$"))
    //   .min(4)
    //   .max(4)
    //   .required(),
    loanId:Joi.number().required().error((errors) => {
      return{
        message:"Loan id is required",
      };
    }),
    accountId: Joi.number().required().error((errors) => {
      return{
        message:"Account number is required",
      };
    }),
    loanAmount: Joi.string().required(),
    transactionDate: Joi.date().raw().required().error((errors) => {
      return {
        message: "Date field is mandatory",
      };
    }),
  });

  //step2: method to validate user against schema
  const validate = () => {
    const errors = {};
    const result = Joi.validate(values, schema, { abortEarly: false });
    console.log(result);
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const forms = {
    backgroundColor: "white",
    textAlign: "center",
    width: "25em",
    height: "29em",
    position: "relative",
    borderRadius: "1em",
    alignItems: "center",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "solid",
    boxShadow: "10px 10px 5px",
  };
  const loanpage = {
    height: "118vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundImage: "url(/images/image3.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const input = {
    border: "none",
    backgroundColor: "aliceblue",
    height: "3em",
    width: "70%",
    textAlign: "center",
    borderRadius: "0.25em",
    padding:"7px"
  };
  const disbursebtn = {
    border: "none",
    width: "30%",
    height: "2em",
    backgroundColor: "#3B71CA",
    display: "flex",
    marginLeft: "7em",
    alignItems: "center",
    borderRadius: "0.2em",
    cursor: "pointer",
    textAlign: "center",
    color: "white",
    paddingLeft:"6px"
  };
  const backbtn = {
    color: "black",
    borderRadius: "0.25em",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "normal",
    padding: "5px 10px",
    marginLeft: "3em",
    border: "solid",
    borderWidth: "1px",
    borderColor: "#808080",
  };

  return (
    <div style={loanpage}>
      <div className="mb-4 mt-2">
        <h2
          className="mt-3"
          style={{
            variant: "h4",
            textAlign: "center",
            fontFamily: "Castellar",
            fontWeight: "Bold",
            color: "#78909c",
          }}
        >
          Disburse Loan Amount
        </h2>
        <form style={forms} onSubmit={handleSubmit}>
        {errRes && (
        <small className="alert alert-danger w-50 mx-auto mt-3 " role="alert">
          {errRes}
        </small>
      )}
          <label htmlFor="loanId">Loan Account:</label>
          <TextField
          style={{ width: "65%" }}
            name="loanId"
            select
            id="loanId"
            value={values.loanId}
            onChange={handleChange}
          >
            {allLoanId.map((loanId) => (
                  <MenuItem key={loanId} value={loanId}>
                    {loanId}
                  </MenuItem>
                ))}
          </TextField>
          {errors && <small style={{ color: "red" }}>{errors.loanId}</small>}
          <label htmlFor="accountId">Account No:</label>
          <TextField
            // type="text"
            // style={input}
            style={{ width: "65%" }}
            select
            name="accountId"
            id="accountId"
            value={values.accountId}
            onChange={handleChange}
          >
            {allAccountId.map((accountId) => (
                  <MenuItem key={accountId} value={accountId}>
                    {accountId}
                  </MenuItem>
                ))}
          </TextField>
          {errors && <small style={{ color: "red" }}>{errors.accountId}</small>}
          <label htmlFor="loanAmount">Amount:</label>
          <TextField
            type="text"
            // style={input}
            style={{ width: "65%" }}
            name="loanAmount"
            id="loanAmount"
            autoComplete="off"
            value={values.loanAmount}
            onChange={handleChange}
          ></TextField>
          {errors && (
            <small style={{ color: "red" }}>{errors.loanAmount}</small>
          )}
          <label htmlFor="transactionDate">Date of transaction</label>
          <TextField
            type="date"
            // style={input}
            style={{ width: "65%" }}
            name="transactionDate"
            id="transactionDate"
            disabled
            value={values.transactionDate}
          />
          {errors && <small style={{ color: "red" }}>{errors.transactionDate}</small>}
          <table style={{ width: "400px", height: "50px" }}>
            <tr>
              <th>
                <a href="/LoanAccount" style={backbtn}>
                  Back
                </a>
              </th>
              <th>
                <button type="submit" name="submit" style={disbursebtn}>
                  Disburse
                </button>
              </th>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default DisburseLoan;
