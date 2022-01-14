import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Loading from "../components/Loading";
import SuccessAlert from "../components/SuccessAlert";

import axios from "axios";

function EmployeeDetail({ match, location, history }) {
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const id = match.params.id;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    async function fetchEmployee() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/employee/getemployee/${id}`,
        config
      );
      console.log(data);
      setLoading(false);
      setEmployee(data.employee);
    }
    fetchEmployee();

    if (!userInfo) {
    }
  }, []);
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="container my-5">
      <div className="addform mx-auto" style={{ width: "60vw" }}>
        <button className="btn btn-primary" onClick={goBack}>
          Back
        </button>
        <div className="text-center mx-auto">{loading && <Loading />}</div>
        <h2 className="my-4" style={{ borderBottom: "2px solid black" }}>
          Personal Details
        </h2>
        <div class="mb-3 row">
          <label for="firstName" class="col-sm-2 col-form-label">
            First Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="firstName"
              value={employee.first_name}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="lastName" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="lastName"
              value={employee.last_name}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="Email" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              value={employee.email}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="gender" class="col-sm-2 col-form-label">
            Gender
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              value={employee.gender}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="Age" class="col-sm-2 col-form-label">
            Age
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="Age"
              value={employee.age}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="MobileNumber" class="col-sm-2 col-form-label">
            Mobile Number
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="MobileNumber"
              value={employee.mobile_number}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="Address" class="col-sm-2 col-form-label">
            Address
          </label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
              id="Address"
              value={employee.address}
              readOnly
            />
          </div>
        </div>
        <h2 className="my-4" style={{ borderBottom: "2px solid black" }}>
          Role of Employee
        </h2>
        <div class="mb-3 row">
          <label for="Role" class="col-sm-2 col-form-label">
            Role
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="Role"
              value={employee.role}
              readOnly
            />
          </div>
        </div>
        <h2 className="my-4" style={{ borderBottom: "2px solid black" }}>
          Bank Details
        </h2>
        <div class="mb-3 row">
          <label for="BankName" class="col-sm-2 col-form-label">
            Bank Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="BankName"
              value={employee.bank_name}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="AccountNumber" class="col-sm-2 col-form-label">
            Account Number
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="AccountNumber"
              value={employee.account_no}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="IfscCode" class="col-sm-2 col-form-label">
            Ifsc Code
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="IfscCode"
              value={employee.ifsc_code}
              readOnly
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="BranchName" class="col-sm-2 col-form-label">
            Branch Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="BranchName"
              value={employee.bank_branch_location}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;