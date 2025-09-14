import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

class Check extends Component {
    state = {
        CheckData: {
            customerId: "",
            firstName: "",
            lastName: "",
            monthlyBalance: "",
            loanHistory: "",
            cibilScore: ""
        }
    }

    handleChange = (event) => {
        const newCheckData = { ...this.state.CheckData };
        console.log(event.target.name);
        console.log(event.target.value);
        newCheckData[event.target.name] = event.target.value;
        this.setState({ CheckData: newCheckData });
    };

    render() {
        const { customerId, firstName, lastName, monthlyBalance, loanHistory, cibilScore } = this.state.CheckData;
        
        return (
            <div style={{
                padding: "70px", textAlign: "left",
                backgroundImage: "", backgroundSize: "cover"
            }}><br/>
<Typography variant="h4" textAlign="center" fontFamily="Castellar" fontWeight="Bold" color="#78909c">
                            Credit Check
                        </Typography>
                <div>
                    
                    <Box
                        component="form"
                        sx={{
                            width: "450px",
                            backgroundColor: "white",
                            mx: "auto",
                            opacity: "0.8",
                            p: 3,
                            borderRadius: 2,
                            boxShadow: "2px 2px 2px 2px"
                        }}
                    >
                        
                        <br />
                        <Stack spacing={2} fontWeight="medium">
                            <TextField
                                required
                                id="customerId"
                                label="Customer ID"
                                type="text"
                                value={customerId}
                                name="customerId"
                                onChange={this.handleChange}
                            />
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    required
                                    id="firstName"
                                    label="First Name"
                                    type="text"
                                    value={firstName}
                                    name="firstName"
                                    onChange={this.handleChange}
                                    style={{ width: 140 }}

                                />
                                <TextField
                                    id="lastName"
                                    label="Last Name"
                                    type="text"
                                    value={lastName}
                                    name="lastName"
                                    onChange={this.handleChange}
                                />
                            </Stack>
                            <TextField
                                required
                                id="monthlyBalance"
                                label="Monthly Balance"
                                type="number"
                                value={monthlyBalance}
                                name="monthlyBalance"
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                id="loanHistory"
                                label="Loan History"
                                type="text"
                                value={loanHistory}
                                name="loanHistory"
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                id="cibilScore"
                                label="CIBIL Score"
                                type="number"
                                value={cibilScore}
                                name="cibilScore"
                                onChange={this.handleChange}
                            />
                            <Stack direction="row" spacing={30}>
                                <Button
                                    to="/Collaterals"
                                    variant="outlined"
                                    component={Link}
                                    //color="error"
                                    sx={{ color: '#000000' }}
                                >
                                    Back
                                </Button>
                                <Button
                                    to="/LoanEligibility"
                                    variant="contained"
                                    type="submit"
                                    component={Link}
                                    color="success"
                                >
                                    Next
                                </Button>
                            </Stack>

                        </Stack>

                    </Box>

                </div>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Check; 