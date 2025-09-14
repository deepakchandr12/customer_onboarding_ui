import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";

function SavingsAccount(props) {
  const params = useParams();
  const [accountData, setAccountData] = useState({
    accountNumber: "",
    bankName: "BANK",
    ifscCode: "",
    branch: "",
    creationDate: new Date().toISOString().slice(0, 10),
  });

  let [cus, setCus] = useState({
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  // const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState({});

  function handleValidate(accountData) {
    const errors = {};
    if (accountData.accountNumber === "") {
      errors.accountNumber = "Account Number type is required!";
    }
    if (accountData.bankName === "") {
      errors.bankName = "Bank Name is required!";
    }
    if (accountData.ifscCode === "") {
      errors.ifscCode = "Ifsc Code is required!";
    }
    if (accountData.branch === "") {
      errors.branch = "Branch is required!";
    }
    if (accountData.creationDate === "") {
      errors.creationDate = "Creation Date is required!";
    }

    return errors;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setAccountData({ ...accountData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit is triggered");
    setError(handleValidate(accountData));
    setFormErrors(handleValidate(accountData));
    if (
      // Object.keys(formErrors).length === 0 &&
      accountData.bankName !== "" &&
      accountData.ifscCode !== "" &&
      accountData.branch !== "" &&
      accountData.creationDate !== ""
    ) {
      axios
        .post(
          `http://localhost:8082/addSavingsAccount/${params.id}`,
          accountData
        )
        .then((res) => {
          console.log(res);
          alert("Your Savings Account is Created ");
          navigate(`/SalaryData/${params.id}/${res.data.accountId}`);
        })

        .catch((err) => console.log(err.response));
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8082/customer/viewCustomer/${params.id}`)
      .then((res) => {
        console.log(res);
        setCus(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  }, []);

  //     useEffect(() => {
  //       axios.get(`http://localhost:8083/savingsAccount/viewSavingsAccount/630010000`)
  //       .then((res) => {
  //         console.log(res);
  //         setAcct(res.data);
  //       }).catch((err) => {
  //         console.log(err);
  //         console.log(err.response.data.message);
  //       });
  //   },[])

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
        Savings Account
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
              />

              <TextField
                required
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

              {/* <TextField
                required
                id="accountNumber"
                label="Account Number"
                type="number"
                value={accountData.accountNumber}
                name="accountNumber"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.accountNumber}</p>
              )} */}

              <TextField
                required
                id="bankName"
                label="Bank Name"
                type="text"
                value={accountData.bankName}
                name="bankName"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.bankName}</p>
              )}

              <TextField
                required
                id="ifscCode"
                label="Ifsc Code"
                type="text"
                value={accountData.ifscCode}
                name="ifscCode"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.ifscCode}</p>
              )}

              <TextField
                required
                id="branch"
                label="Branch"
                type="text"
                value={accountData.branch}
                name="branch"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.branch}</p>
              )}

              <TextField
                required
                id="creationDate"
                label="Creation Date"
                // type="number"
                value={accountData.creationDate}
                name="creationDate"
                onChange={handleChange}
              />
              {formErrors && (
                <p style={{ color: "red" }}>{formErrors.creationDate}</p>
              )}

              <Stack direction="row" spacing={30}>
                <Button
                  to="/CreateCustomer"
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

export default SavingsAccount;
