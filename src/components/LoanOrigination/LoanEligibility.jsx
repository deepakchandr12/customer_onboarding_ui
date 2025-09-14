import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LoanAccount from "./LoanAccount";

function LoanEligibility(props) {
  const paramsCustId = useParams();
  const paramsAccId = useParams();
  const [loanEligibility, setLoanEligibility] = useState({
    loanTypes: [
      {
        value: "Home Loan",
        label: "Home Loan",
      },
      {
        value: "Personal Loan",
        label: "Personal Loan",
      },
      {
        value: "Gold Loan",
        label: "Gold Loan",
      },
      {
        value: "Education Loan",
        label: "Education Loan",
      },
    ],
    age: "",
    cibilScore: "",
    salary: "",
    loanType: "",
  });
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  function handleValidate(loanEligibility) {
    const errors = {};
    if (loanEligibility.age === "") {
      errors.age = "Age is required!";
    } else if (loanEligibility.age < 0) {
      errors.age = "Age cannot be negative";
    } else if (loanEligibility.age < 18 || loanEligibility.age > 99) {
      errors.age = "Age must be between 18 and 99";
    }
    if (loanEligibility.cibilScore === "") {
      errors.cibilScore = "Cibil Score is required!";
    } else if (loanEligibility.cibilScore < 0) {
      errors.cibilScore = "Cibil Score cannot be negative";
    } else if (
      loanEligibility.cibilScore < 300 ||
      loanEligibility.cibilScore > 900
    ) {
      errors.cibilScore = "Cibil Score must be 300-900";
    }
    if (loanEligibility.salary === "") {
      errors.salary = "Monthly Salary is required!";
    } else if (loanEligibility.salary < 0) {
      errors.salary = "Monthly Salary cannot be negative";
    } else if (
      loanEligibility.salary.length < 5 ||
      loanEligibility.salary.length > 8
    ) {
      errors.salary = "Monthly Salary must be 5-8 characters long!";
    }
    return errors;
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setLoanEligibility({ ...loanEligibility, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(handleValidate(loanEligibility));
    if (
      Object.keys(formErrors).length === 0 &&
      loanEligibility.age !== "" &&
      loanEligibility.cibilScore !== "" &&
      loanEligibility.salary !== ""
    ) {
      axios
        .post("http://localhost:8082/checkEligibility", loanEligibility)
        .then((res) => {
          console.log(res.data);
          if (res.data.eligibleAmount == 0) {
            alert("You are not Eligible for loan");
            navigate("/");
          } else {
            alert("You are eligibile for loan of " + res.data.eligibleAmount);
            navigate(
              `/LoanAccount/${paramsCustId.cusId}/${paramsAccId.accId}/${res.data.eligibilityId}`
            );
            console.log(res.data.eligibleAmount);
            // amountvalue = res.data.eligibleAmount;
          }
        })
        .catch((err) => console.log(err.response));
    }
  };
  // useEffect(() => {
  //   if (
  //     Object.keys(formErrors).length === 0 &&
  //     loanEligibility.age !== "" &&
  //     loanEligibility.cibilScore !== "" &&
  //     loanEligibility.salary !== ""
  //   ) {
  //     axios
  //       .post("http://localhost:8082/checkEligibility", loanEligibility)
  //       .then((res) => {
  //         console.log(res.data);
  //         alert(res.data);
  //         navigate("/LoanAccount");
  //       })
  //       .catch((err) => console.log(err.response));
  //   }
  // }, [formErrors]);

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
        Eligibility Check
      </Typography>
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              width: "400px",
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
                id="salary"
                label="Monthly Salary"
                type="number"
                value={loanEligibility.salary}
                name="salary"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.salary}</p>
              )}
              <TextField
                required
                id="age"
                label="age"
                type="number"
                value={loanEligibility.age}
                name="age"
                onChange={handleChange}
              />
              {formErrors && <p style={{ color: "red" }}>{formErrors.age}</p>}
              <TextField
                required
                id="cibilScore"
                label="Cibil Score"
                type="number"
                value={loanEligibility.cibilScore}
                name="cibilScore"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.cibilScore}</p>
              )}
              <TextField
                id="loanType"
                select
                label="Select Loan Type"
                helperText="Please select your loan type"
                value={loanEligibility.loanType}
                name="loanType"
                onChange={handleChange}
              >
                {loanEligibility.loanTypes.map((loanType) => (
                  <MenuItem key={loanType.value} value={loanType.value}>
                    {loanType.label}
                  </MenuItem>
                ))}
              </TextField>
              <Stack direction="row" spacing={26}>
                <Button
                  to="/Check"
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
        </form>
      </div>
            <br />
    </div>
  );
}
// export { amountvalue };
export default LoanEligibility;
