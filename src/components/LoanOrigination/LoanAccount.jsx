import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import axios from "axios";

export default function LoanAccount(props) {
  const params = useParams();
  let [loan, setLoan] = useState({
    loanAmount: "",
    loanDuration: "",
    submissionDate: new Date().toISOString().slice(0, 10),
    termCondition: false,
  });
  let [cus, setCus] = useState({
    firstName: "",
    lastName: "",
  });
  let [acct, setAcct] = useState({
    accountNumber: "",
  });
  let [eligible, setEligible] = useState({
    loanType: "",
  });

  //for validation errors
  const [errors, setErrors] = useState({});
  //for exception errors from backend
  const [expError, setExpError] = useState();

  const validate = (loan) => {
    const errors = {};
    const loanAmt = new RegExp("^[0-9]{5,}$");
    const loanDur = new RegExp("^[0-9]{1,2}$");

    if (loan.loanAmount === "") {
      errors.loanAmount = "Required field, Please enter loan amount";
    } else if (
      !loanAmt.test(loan.loanAmount) ||
      Number(loan.loanAmount) < 50000
    ) {
      errors.loanAmount = "Must be greater than 50,000 INR";
    }
    if (loan.loanDuration === "") {
      errors.loanDuration =
        "Required field, Please enter loan duration in months";
    } else if (
      !loanDur.test(loan.loanDuration) ||
      Number(loan.loanDuration) < 6 ||
      Number(loan.loanDuration > 60)
    ) {
      errors.loanDuration = "Must be 6-60 months";
    }
    if (loan.termCondition === false) {
      errors.termCondition = "Please check the box";
    }
    return errors;
  };

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    if (type === "text" || type === "number" || type === "date") {
      setLoan({ ...loan, [name]: value });
    } else {
      setLoan({ ...loan, termCondition: checked });
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/customer/viewCustomer/${params.cusId}`)
      .then((res) => {
        console.log(res);
        setCus(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
    axios
      .get(
        `http://localhost:8082/savingsAccount/viewSavingsAccount/${params.accId}`
      )
      .then((res) => {
        console.log(res);
        setAcct(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
    axios
      .get(`http://localhost:8082/viewEligibility/${params.elgId}`)
      .then((res) => {
        console.log(res);
        setEligible(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate(loan));
    if (
      Object.keys(errors).length === 0 &&
      loan.loanAmount !== 0.0 &&
      loan.loanDuration !== 0.0 &&
      loan.submissionDate !== "" &&
      loan.termCondition !== false
    ) {
      axios
        .post(
          `http://localhost:8082/createLoanAccount/${params.cusId}/${params.accId}/${params.elgId}`,
          loan
        )
        .then((res) => {
          console.log(res);
          alert(res.data);
          navigate("/");
        })
        .catch((err) => {
          if (err.response) {
            console.log(err);
            console.log(err.response.data.message);
            setExpError(err.response.data.message);
          }
        });
    }
  }
  useEffect(() => {
    // console.log(props.id);
    console.log(props.amount);
  });

  //   useEffect(() => {
  //     if (
  //       Object.keys(errors).length === 0 &&
  //       loan.loanAmount !== 0.0 &&
  //       loan.loanDuration !== 0.0 &&
  //       loan.submissionDate !== "" &&
  //       loan.termCondition !== false
  //     ) {
  //       axios
  //         .post(
  //           `http://localhost:8082/createLoanAccount/${params.cusId}/${params.accId}/${params.elgId}`,
  //           loan
  //         )
  //         .then((res) => {
  //           console.log(res);
  //           alert(res.data);
  //           navigate("/DisburseLoan");
  //         })
  //         .catch((err) => {
  //           if (err.response) {
  //             console.log(err);
  //             console.log(err.response.data.message);
  //             setExpError(err.response.data.message);
  //           }
  //         });
  //     }
  //   });

  const myStyle = {
    width: "40%",
    border: "solid",
    borderWidth: "2px",
    margin: "auto",
    borderRadius: "10px",
    boxShadow: "5px 5px #C1CAD4",
  };
  const backbtn = {
    color: "black",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
    padding: "6px 35px",
    marginTop: "8px",
    marginLeft: "10%",
    border: "solid",
    borderWidth: "1px",
    borderColor: "#808080",
  };
  const createbtn = {
    color: "black",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
    padding: "6px 35px",
    marginTop: "8px",
    marginLeft: "37%",
    border: "solid",
    borderWidth: "1px",
    borderColor: "#808080",
    backgroundColor: "#6AD4FA",
    cursor: "pointer",
  };
  const inputTag = {
    padding: "7px 7px ",
    width: "94%",
    borderRadius: "5px",
  };
  const errorTag = {
    color: "red",
    fontWeight: "Bold",
    fontSize: 15,
    marginLeft: "5%",
    width: "90%",
    border: "solid",
    borderColor: "black",
    borderWidth: "2px",
    borderRadius: "4px",
    textAlign: "center",
  };
  const headerTag = {
    fontFamily: "Castellar",
    fontWeight: "Bold",
    color: "#78909c",
    width: "44%",
    margin: "auto",
    padding: "5px",
    textAlign: "center",
  };

  return (
    <div
      style={{
        padding: "54px",
        // height: '91.5vh',
        backgroundImage: "url(/Images/image23.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "1",
      }}
    >
      <br />
      <br />
      <h2 style={headerTag}>Open Loan Account</h2>
      <form style={myStyle} onSubmit={handleSubmit}>
        {expError && <small style={errorTag}>{expError}</small>}
        <table
          style={{
            margin: "auto",
            marginTop: "3%",
            marginBottom: "1%",
            width: "90%",
          }}
        >
          <tr>
            <td>
              <strong>First Name:</strong>{" "}
            </td>
            <td class="opacity-75  ">
              <input
                style={inputTag}
                class="form-control"
                type="text"
                disabled
                name="firstName"
                value={cus.firstName}
                placeholder="Enter First name"
                required
              />
            </td>
          </tr>
          <tr style={{ height: "10px" }}></tr>
          <tr>
            <td>
              <strong>Last Name: </strong>
            </td>
            <td class="opacity-75  ">
              <input
                style={inputTag}
                class="form-control"
                type="text"
                disabled
                name="lastName"
                value={cus.lastName}
                placeholder="Enter Last name"
              />
            </td>
          </tr>
          <tr style={{ height: "10px" }}></tr>
          <tr>
            <td>
              <strong>Account No:</strong>{" "}
            </td>
            <td class="opacity-75 ">
              <input
                style={inputTag}
                class="form-control"
                type="number"
                disabled
                name="accountNumber"
                value={acct.accountNumber}
                placeholder="Enter Account no"
              />
            </td>
          </tr>
          <tr style={{ height: "10px" }}></tr>
          <tr>
            <td>
              <strong>Loan Type:</strong>{" "}
            </td>
            <td class="opacity-75 ">
              <input
                style={inputTag}
                class="form-control"
                type="text"
                name="loanType"
                disabled
                value={eligible.loanType}
                placeholder="Enter Last name"
              />
            </td>
          </tr>
          <tr style={{ height: "10px" }}></tr>
          <tr>
            <td>
              <strong>Loan Amount:</strong>{" "}
            </td>
            <td class="opacity-75 ">
              <input
                style={inputTag}
                class="form-control"
                type="number"
                name="loanAmount"
                value={loan.loanAmount}
                onChange={handleChange}
                placeholder="Enter Loan amount"
              />
              {errors && (
                <small style={{ color: "red" }}>{errors.loanAmount}</small>
              )}
            </td>
          </tr>
          <tr style={{ height: "10px" }}></tr>
          <tr>
            <td>
              <strong>Loan Duration:</strong>{" "}
            </td>
            <td class="opacity-75 ">
              <input
                style={inputTag}
                class="form-control"
                type="number"
                name="loanDuration"
                value={loan.loanDuration}
                onChange={handleChange}
                placeholder="Enter Loan duration"
              />
              {errors && (
                <small style={{ color: "red" }}>{errors.loanDuration}</small>
              )}
            </td>
          </tr>
          <tr style={{ height: "10px" }}></tr>
          <tr>
            <td>
              <strong>Submission Date:</strong>
            </td>
            <td class="opacity-75 ">
              <input
                style={inputTag}
                class="form-control"
                type="date"
                name="submissionDate"
                disabled
                value={loan.submissionDate}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
              />
              {errors && (
                <small style={{ color: "red" }}>{errors.submissionDate}</small>
              )}
            </td>
          </tr>
        </table>

        <div className="col-8" style={{ marginLeft: "25px" }}>
          <input
            type="checkbox"
            name="termCondition"
            value={loan.termCondition}
            onChange={handleChange}
          />
          <span style={{ marginLeft: "15px" }}>
            <strong>I agree to terms and conditions</strong>
          </span>
          <br />
          {errors && (
            <small style={{ color: "red" }}>{errors.termCondition}</small>
          )}
        </div>
        <div>
          <Stack direction="row" spacing={20}>
            <a href="/LoanEligibility" style={backbtn}>
              Back
            </a>
            <button style={createbtn} type="submit" name="submit">
              Create
            </button>
          </Stack>
        </div>
        <br />
      </form>
    </div>
  );
}
