import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';

class Nav extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/Home">
                            <Stack direction="row" spacing={140} >
                                <Button variant="text" sx={{ fontSize: 23 }}
                                    style={{ color: "Black" }}>
                                    <AccountBalanceSharpIcon />
                                    CRK Bank
                                </Button>

                                <Stack direction="row" spacing={2}   >
                                    <Button variant="text" sx={{ fontSize: 23 }}
                                        style={{ padding: "10px", color: "Black" }}
                                        to="/CustomerData" component={Link}>
                                        <DescriptionIcon /> Financial Data
                                    </Button>

                                    <Button variant="text" sx={{ fontSize: 23 }}
                                        style={{ padding: "10px", color: "Black" }}
                                        to="/Home" component={Link}>
                                        <HomeIcon />Home
                                    </Button>
                                </Stack>
                            </Stack>
                        </NavLink>
                    </div>
                </nav >
            </div >

        );
    }
}
export default Nav;