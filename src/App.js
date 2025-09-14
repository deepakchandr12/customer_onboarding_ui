import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Footer from "./components/Footer";
import KeyToolInfoSectionOne from "./components/onboarding/indexOne";
import CreateAccount from "./components/AccountCreating/CreateAccount";
import Savingsacc from "./components/AccountCreating/Savingsacc";
import CreateCustomer from "./components/LoanOrigination/CreateCustomer";
import EKYC from "./components/LoanOrigination/EKYC";

import Check from "./components/LoanOrigination/Check";
import LoanEligibility from "./components/LoanOrigination/LoanEligibility";
import LoanAccount from "./components/LoanOrigination/LoanAccount";
import DisburseLoan from "./components/LoanOrigination/DisburseLoan";
import NavbarTool from "./components/NavbarTool";
import CustomerDetails from "./components/AccountCreating/CustomerDetails";
import EkycVerification from "./components/EKYC/EkycVerification";
import Select from "./components/Select";
import UpdateCustomer from "./components/UpdateCustomer";
import SalaryData from "./components/LoanOrigination/SalaryData";
import SavingsAccount from "./components/LoanOrigination/SavingsAccount";
import Navbar from "./components/Navbar";
import LoanCalculator from "./components/LoanOrigination/LoanCalculator";
import Collaterals from "./components/LoanOrigination/Collaterals";
// import { amountvalue } from "./components/LoanOrigination/LoanEligibility";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <NavbarTool/> */}
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/first" element={<CreateCustomer />} />
          <Route path="/updateCustomer/:id" element={<UpdateCustomer />} />

          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/CustomerDetails" element={<CustomerDetails />} />
          <Route path="/Savingsacc" element={<Savingsacc />} />
          <Route path="/SavingAccount/:id" element={<SavingsAccount />} />

          <Route path="/Home" element={<Home />} exact />
          <Route path="/CreateCustomer" element={<CreateCustomer />} />
          <Route path="/Select" element={<Select />} />
          <Route path="/EKYC/:id" element={<EKYC />} />
          <Route path="/Collaterals/:cusId/:accId" element={<Collaterals />} />
          <Route path="/Check" element={<Check />} />
          <Route
            path="/LoanEligibility/:cusId/:accId"
            element={<LoanEligibility />}
          />
          <Route path="/LoanCalculator" element={<LoanCalculator />} />
          <Route
            path="/LoanAccount/:cusId/:accId/:elgId"
            element={<LoanAccount />}
          />
          <Route path="/DisburseLoan" element={<DisburseLoan />} />
          <Route path="/SalaryData/:cusId/:accId" element={<SalaryData />} />

          <Route path="/EkycVerification" element={<EkycVerification />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;
