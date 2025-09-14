import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";

class Home extends Component {
  state = {
    curDT: new Date().toLocaleString(),
  }
  render() {

    return (
      <div
        style={{ backgroundImage: "url(/images/7.jpg)", backgroundSize: "cover", height: "715px" }}>
        <Stack direction="row" marginLeft={70} spacing={46}>
          <Typography variant="h1" textAlign="center" fontFamily="Castellar" color="#000000">
            CRK Bank
          </Typography>
          <Typography textAlign="right" paddingRight={5}> <p > {this.state.curDT}</p>
          </Typography>
        </Stack>
        <Typography variant="h3" textAlign="center" fontFamily="Candara" color="#000000">
          Welcomes You!!
        </Typography>
        <br /><br /><br />

        <Box
          sx={{ width: "550px", mx: "auto", opacity: "0.8", borderRadius: "14" }}>
          <Typography backgroundColor="white" variant="h4" textAlign="center" fontFamily="Candara" color="#000000">
            IN NEED OF A LOAN?
          </Typography>
          
          <Typography backgroundColor="white" variant="h3" textAlign="center" fontFamily="Candara" color="#000000">
            It's never been so simple!
          </Typography></Box>
          <br /><br /><br />
          <Box
          sx={{ width: "850px", mx: "auto", opacity: "0.7", borderRadius: "14" }}>
          <Typography backgroundColor="white" variant="h3" textAlign="center" fontFamily="Candara" color="#000000">
            Meet all your Financial Needs with Loan 
          </Typography><br /><br />
          </Box>

      </div>
    );
  }
};
export default Home;