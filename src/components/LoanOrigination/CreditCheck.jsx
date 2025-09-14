import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Joi from "joi-browser";
//import { CheckContext } from "../Helpers/Contexts";

function Credit(props) {
    // const{checkState, setCheckState} = useContext(CheckContext);

    let [customerObj, setCustomerObj] = useState({
    customerId: 0,
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    accountBalance:0.0,
    loanHistory:"",
    pinCode: 0,
    emailId: "",
    contactNo: 0,
  });

 // const [errors, setErrors] = useState({});
  let navigate = useNavigate()

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    if (type === "text" || type === "number") {
        setCustomerObj({ ...customerObj, [name]: value });
    }
    else {
        setCustomerObj({ ...customerObj, termCondition: checked });
    }
}

    function handleSubmit(e) {
        e.preventDefault();
        console.log("hello");
        // setErrors(validate());
        // if (errors) {
        //     return;
        // }
        navigate("/LoanEligibility");

        // navigate("/home");
    }




  return (
    <div style={{ marginTop: "0px",marginBottom:"20px", width:"100%", textAlign:"left", 
    backgroundImage: "url(/images/mediamodifier-nCk22aqZjlM-unsplash.jpg)" , 
    backgroundSize:"contain", backgroundRepeat:"no-repeat", height:"" }}>
        <h1 style={{border:"", borderRadius:"5px", textAlign:"left"}}>Credit Check</h1>
        
        {/* <form style={{width:"30%"}}>
  <div class="mb-3">
   Customer Id: <input type="text" class="form-control" id="InputId" aria-describedby="emailHelp" required/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="InputFirstName" class="form-label">First Name</label>
    <input type="text" class="form-control" id="InputFirstName" required/>
  </div>
  <div class="mb-3">
    <label for="InputLastName" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="InputLastName" required/>
  </div>
  <div class="mb-3">
    <label for="InputAddress" class="form-label">Address </label>
    <input type="text" class="form-control" id="InputAddress" required/>
  </div>
  <div class="mb-3">
    <label for="InputCountry" class="form-label">Country </label>
    <input type="text" class="form-control" id="InputCountry" required/>
  </div>
  <div class="mb-3">
    <label for="InputAddress" class="form-label">Address </label>
    <input type="text" class="form-control" id="InputAddress" required/>
  </div>
  <div class="mb-3">
    <label for="InputAccountBalance" class="form-label">Account Balance </label>
    <input type="number" class="form-control" id="InputAccountBalance" required/>
  </div>
  <div class="mb-3">
    <label for="InputLoanHistory" class="form-label">Loan History </label>
    <input type="text" class="form-control" id="InputLoanHistory" required/>
  </div>
  <div class="mb-3">
    <label for="InputLoanHistory" class="form-label">Cibil Score </label>
    <input type="text" class="form-control" id="InputLoanHistory" required/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="Check1" required/>
    <label class="form-check-label" for="Check1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}
<Box component="form"
            sx={{
              width: "600px",
              backgroundColor: "white",
              mx: "auto",
              opacity: "0.8",
              p: 3,
              borderRadius: 2,
              boxShadow: "2px 2px 2px 2px"
            }}>


      {/* <form
        style={{
          textAlign: "left",
          marginLeft: "300px",
          marginRight: "300px",
        }} */}
      
        <div style={{ textAlign: "center" }}>
        <Typography variant="h4" textAlign="center" fontFamily="Castellar" fontWeight="Bold" color="#78909c">
        Create Customer
            </Typography>
          {/* <strong>Create Customer</strong> */}
        </div>
        <div style={{ border: "1px blue", padding: "5px" }}>
          Customer Id:
          <input type={"number"} name="customerId my-3" value={customerObj.customerId} onChange={handleChange}></input>
          <br />
          First Name:
          <input type={"text"} name="firstName mx-3" value={customerObj.firstName} onChange={handleChange}></input>
          <br />
          Last Name:
          <input type={"text"} name="lastName" value={customerObj.lastName} onChange={handleChange}></input>
          <br />
          Id Type:
          <input type={"text"} name="idType" value={customerObj.idType} onChange={handleChange}></input>
          <br />
          Id Number:
          <input type={"text"} name="idNo" value={customerObj.idNo} onChange={handleChange}></input>
          <br />
          Address Line1:
          <input type={"text"} name="addressLine1" value={customerObj.addressLine1} onChange={handleChange}></input>
          <br />
          Address Line2:
          <input type={"text"} name="addressLine2" value={customerObj.addressLine2} onChange={handleChange}></input>
          <br />
          Country:<input type={"text"} name="country" value={customerObj.country} onChange={handleChange}></input>
          <br />
          Account Balance:
          <input type={"number"} name="accountBalance" value={customerObj.accountBalance} onChange={handleChange}/>
          <br />
          Loan History:<input type={"text"} name="loanHistory" value={customerObj.loanHistory} onChange={handleChange}></input>
          <br />
          Pin Code:<input type={"number"} name="pinCode" value={customerObj.pinCode} onChange={handleChange}></input>
          <br />
          Email Id:<input type={"text"} name="emailId" value={customerObj.emailId} onChange={handleChange}></input>
          <br />
          Contact:<input type={"number"} name="contactNo" value={customerObj.contactNo} onChange={handleChange}></input>
          <br />
          <button style={{ alignContent: "end"}}
          onClick={handleSubmit}
    
          >Submit</button>
        </div>
        </Box>
      {/* </form>  */}
    </div>
  );
}

export default Credit;
