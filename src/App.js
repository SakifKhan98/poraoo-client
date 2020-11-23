import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SignUpHome from "./components/Authentication/SignUpHome/SignUpHome";
import StudentLogin from "./components/Authentication/Student/StudentLogin/StudentLogin";
import StudentSignUp from "./components/Authentication/Student/StudentSignUp/StudentSignUp";
import TeacherLogin from "./components/Authentication/Teacher/TeacherLogin/TeacherLogin";
import TeacherSignUp from "./components/Authentication/Teacher/TeacherSignUp/TeacherSignUp";
import VerifyOtp from "./components/Authentication/VerifyOtp/VerifyOtp";
import BidAssignment from "./components/Dashboard/TeacherDashboard/BidAssignment/BidAssignment";
import BidDetails from "./components/Dashboard/TeacherDashboard/BidDetails/BidDetails";
import CurrentBid from "./components/Dashboard/TeacherDashboard/CurrentBid/CurrentBid";
import FindAssignmentTeacher from "./components/Dashboard/TeacherDashboard/FindAssignmentTeacher/FindAssignmentTeacher";
import StudentPayment from "./components/Dashboard/TeacherDashboard/StudentDashboard/StudentSidebar/StudentPayment/StudentPayment";
import StudentPaymentMethod from "./components/Dashboard/TeacherDashboard/StudentDashboard/StudentSidebar/StudentPayment/StudentPaymentMethod/StudentPaymentMethod";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard/TeacherDashboard/TeacherDashboard";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch> 
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/signUpHome">
          <SignUpHome></SignUpHome>
        </Route>
        <Route path="/teacherSignUp">
          <TeacherSignUp></TeacherSignUp>
        </Route>
        <Route path="/teacherLogin">
          <TeacherLogin></TeacherLogin>
        </Route>
        <Route path="/login">
          <TeacherLogin></TeacherLogin>
        </Route>
        <Route path="/teacherDashboard">
          <TeacherDashboard></TeacherDashboard>
        </Route>
        <Route path="/verifyOtp">
          <VerifyOtp></VerifyOtp>
        </Route>
        <Route path="/findAssignment">
          <FindAssignmentTeacher></FindAssignmentTeacher>
        </Route>
        <Route path="/bidAssignment">
          <BidAssignment></BidAssignment>
        </Route>
        <Route path="/currentBid">
          <CurrentBid/>
        </Route>
        <Route path="/studentPaymentMethod">
          <StudentPaymentMethod/>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/studentSignup">
          <StudentSignUp></StudentSignUp>
        </Route>
        <Route path="/studentLogin">
          <StudentLogin></StudentLogin>
        </Route>
        <Route path="/studentPayment">
          <StudentPayment/>
        </Route>
        <Route path="/bidDetails">
          <BidDetails></BidDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
