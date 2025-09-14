import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

const Calculator = () => {
  const [userValues, setUserValues] = useState({
    loanAmount: "",
    interestRate: "",
    loanTenure: "",
  });

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  function handleValidate(userValues) {
    const errors = {};
    if (userValues.loanAmount === "") {
      errors.loanAmount = "Loan Amount is required!";
    } else if (userValues.loanAmount < 0) {
      errors.loanAmount = "Loan Amount cannot be negative";
    } else if (userValues.loanAmount.length < 6) {
      errors.loanAmount = "Loan Amount must be atleast 6 digits";
    }
    if (userValues.interestRate === "") {
      errors.interestRate = "Interest Rate is required!";
    } else if (userValues.interestRate < 0) {
      errors.interestRate = "Interest Rate cannot be negative";
    } else if (userValues.interestRate > 100) {
      errors.interestRate = "Interest Rate must be below 100";
    }
    if (userValues.loanTenure === "") {
      errors.loanTenure = "Loan Tenure is required!";
    } else if (userValues.loanTenure < 0) {
      errors.loanTenure = "Loan Tenure cannot be negative";
    } else if (userValues.loanTenure > 10) {
      errors.loanTenure = "Loan Tenure must be less than 10 years";
    }
    return errors;
  }

  useEffect(() => {
    if (
      Object.keys(formErrors).length === 0 &&
      userValues.loanAmount !== "" &&
      userValues.interestRate !== "" &&
      userValues.loanTenure !== ""
    ) {
      axios
        .post("http://localhost:8082/calculateLoan", userValues)
        .then((res) => {
          console.log(res.data);
          alert("Your loan is calculated");
          calculateResults(userValues);
        })
        .catch((err) => console.log(err.response));
    }
  }, [formErrors]);

  let { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8082/calculator/viewPaymentDetails/:id")
      .then((res) => {
        console.log(res);
        setUserValues(res.data);
        alert("Your loan is getting calculated");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(handleValidate(userValues));
  };

  const [results, setResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    isResult: false,
  });

  const calculateResults = ({ loanAmount, interestRate, loanTenure }) => {
    const userAmount = Number(loanAmount);
    const calculatedInterestRate = Number(interestRate) / 100 / 12;
    const calculatedPayments = Number(loanTenure) * 12;
    const x = Math.pow(1 + calculatedInterestRate, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterestRate) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);

      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        isResult: true,
      });
    }
    return;
  };

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "left",
      }}
    >
      <br />
      <br />
      <br />
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
        Loan Calculator
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          {!results.isResult ? (
            <Box
              component="form"
              sx={{
                width: "350px",
                backgroundColor: "white",
                mx: "auto",
                opacity: "0.8",
                p: 3,
                borderRadius: 2,
                boxShadow: "2px 2px 2px 2px",
              }}
            >
              <Stack spacing={1} fontWeight="medium">
                <TextField
                  required
                  id="loanAmount"
                  label="Loan Amount"
                  type="number"
                  value={userValues.loanAmount}
                  name="loanAmount"
                  onChange={handleChange}
                />
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.loanAmount}</p>
                )}
                <TextField
                  required
                  id="interestRate"
                  label="Interest Rate"
                  type="number"
                  value={userValues.interestRate}
                  name="interestRate"
                  onChange={handleChange}
                />
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.interestRate}</p>
                )}
                <TextField
                  required
                  id="loanTenure"
                  label="Loan Tenure(In Years)"
                  type="number"
                  value={userValues.loanTenure}
                  name="loanTenure"
                  onChange={handleChange}
                />
                {formErrors && (
                  <p style={{ color: "red" }}>{formErrors.loanTenure}</p>
                )}
                <Stack direction="row" spacing={20}>
                  <Button
                    to="/home"
                    variant="outlined"
                    component={Link}
                    sx={{ color: "#000000" }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    type="submit"
                    name="submit"
                    sx={{ mx: 10 }}
                  >
                    Next
                  </Button>
                </Stack>
              </Stack>
            </Box>
          ) : (
            <div>
              <Box
                component="form"
                sx={{
                  width: "350px",
                  backgroundColor: "white",
                  mx: "auto",
                  opacity: "0.8",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "2px 2px 2px 2px",
                }}
              >
                <Stack spacing={1}>
                  <h3>Loan Amount Details</h3>
                  Loan amount:{userValues.loanAmount} <br />
                  <br />
                  Interest Rate:{userValues.interestRate}% <br />
                  <br />
                  Loan Tenure to repay: {userValues.loanTenure} <br />
                  <br />
                  <hr />
                  <h3>Loan Payment Details</h3>
                  <br />
                  <h6>
                    Please pay the monthly payment before 7th of every month
                  </h6>
                  <br />
                  Monthly Payment - {results.monthlyPayment}
                  <br />
                  <br />
                  Total Payment - {results.totalPayment}
                  <br />
                  <br />
                  <Button
                    onSubmit={handleSubmit}
                    to="/Home"
                    variant="contained"
                    component={Link}
                    type="submit"
                    sx={{ mx: 10 }}
                  >
                    Ok
                  </Button>
                </Stack>
              </Box>
            </div>
          )}
        </form>
      </div>
      <br />
    </div>
  );
};

export default Calculator;
