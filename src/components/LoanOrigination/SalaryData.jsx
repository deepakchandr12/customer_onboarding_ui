import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";

function SalaryData(props) {
  const paramsCustId = useParams();
  const paramsAccId = useParams();

  const [customerData, setCustomerData] = useState({
    salariedList: [
      { value: "", label: "" },
      { value: "yes", label: "Salaried" },
      { value: "no", label: "Not Salaried" },
    ],
    salary: "0",
    salaried: "",
  });

  let [cus, setCus] = useState({
    firstName: "",
    lastName: "",
  });

  let [acct, setAcct] = useState({
    accountNumber: "",
    bankName: "",
    ifscCode: "",
    branch: "",
  });

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  // const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState({});

  function handleValidate(customerData) {
    const errors = {};
    if (customerData.salaried === "") {
      errors.salaried = "Salaried type is required!";
    }
    if (customerData.salary === "") {
      errors.salary = "Salary is required!";
    } else if (Number(customerData.salary) < 0) {
      errors.salary = "Salary Cannot be negative";
    }

    return errors;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(handleValidate(customerData));
    setFormErrors(handleValidate(customerData));
    if (
      Object.keys(formErrors).length === 0 &&
      customerData.salary !== "" &&
      customerData.salaried !== "" &&
      customerData.salary >= 0
    ) {
      axios
        // .post("http://localhost:8083/addSalary/1000/630010000", customerData)
        .post(
          `http://localhost:8082/addSalary/${paramsCustId.cusId}/${paramsAccId.accId}`,
          customerData
        )
        .then((res) => {
          console.log(res);
          alert("Your Salary Account Details are saved");
          navigate(`/Collaterals/${paramsCustId.cusId}/${paramsAccId.accId}`);
        })

        .catch((err) => console.log(err.response));
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8082/customer/viewCustomer/${paramsCustId.cusId}`)
      .then((res) => {
        console.log(res);
        setCus(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8082/savingsAccount/viewSavingsAccount/${paramsAccId.accId}`
      )
      .then((res) => {
        console.log(res);
        setAcct(res.data);
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
        Salary Data
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
              p: 3,
              borderRadius: 2,
              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
            }}
          >
            <Stack spacing={1} fontWeight="medium">
              <TextField
                required
                // autoComplete="off"
                id="firstName"
                label="First Name"
                type="text"
                value={cus.firstName}
                name="firstName"
                // onChange={handleChange}
              />
              {/* {formErrors && <p style={{ color: "red" }}>{formErrors.firstName}</p>} */}

              <TextField
                //  style={{  width: "95%"}}
                required
                // autoComplete="off"
                id="lastName"
                label="Last Name"
                type="text"
                value={cus.lastName}
                name="lastName"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.lastName}</p>
              )}

              <Stack direction="row" spacing={4}>
                <TextField
                  style={{ height: "50px", width: "65%" }}
                  id="salaried"
                  select
                  label="Are you employed?"
                  value={customerData.salaried}
                  name="salaried"
                  onChange={handleChange}
                >
                  {customerData.salariedList.map((salaried) => (
                    <MenuItem key={salaried.value} value={salaried.value}>
                      {salaried.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              {error && <p style={{ color: "red" }}>{error.salaried}</p>}
              {/* {error && <div style={{ color: 'red' }}>Please select Yes or No</div>} */}

              <TextField
                required
                id="salary"
                label="Salary"
                type="number"
                disabled={customerData.salaried === "no"}
                //   value={()=>{if(customerData.salaried ==="no"){
                //     setCustomerData(salary(0));
                //   }
                // else{
                //   return customerData.salary;
                // }}}
                value={customerData.salary}
                name="salary"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.salary}</p>
              )}

              <TextField
                required
                id="accountNumber"
                label="Account Number"
                type="number"
                value={acct.accountNumber}
                name="accountNumber"
                onChange={handleChange}
              />
              {/* {formErrors && <p style={{ color: "red" }}>{formErrors.accountId}</p>} */}

              <TextField
                required
                id="bankName"
                label="Bank Name"
                type="text"
                value={acct.bankName}
                name="bankName"
                onChange={handleChange}
              />
              {/* {formErrors && <p style={{ color: "red" }}>{formErrors.bankName}</p>} */}

              <TextField
                required
                id="branch"
                label="Branch"
                type="text"
                autoComplete="branch"
                value={acct.branch}
                name="branch"
                onChange={handleChange}
              />
              {/* {formErrors && <p style={{ color: "red" }}>{formErrors.branch}</p>} */}

              <TextField
                required
                id="ifscCode"
                label="IFSC CODE"
                type="text"
                autoComplete="IFSCCode"
                value={acct.ifscCode}
                name="ifscCode"
                onChange={handleChange}
              />
              {/* {formErrors && <p style={{ color: "red" }}>{formErrors.ifscCode}</p>} */}

              <Stack direction="row" spacing={30}>
                <Button
                  to="/EKYC"
                  variant="outlined"
                  component={Link}
                  color="error"
                  sx={{ color: "#000000" }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  type="submit"
                  name="submit"
                  // to="/LoanDetails"
                  // component={Link}
                  sx={{ mx: 20 }}
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

export default SalaryData;
