import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import { Button,Dropdown } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RightSide = (props) => {
  const navigate = useNavigate();

  const logout = async() => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    
    <div className="RightSide">
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Hello, {props.data}
    </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <button onClick={logout} className="button is-light">
            Logout
          </button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
