import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Checkout1() {
  return (
    <div className="bg-image1">
      <div className="PaymentForm d-flex justify-content-center mt-5 ">
        <form>
          <div className="Title mb-3">Payment information</div>
          <input
            name="name"
            label="Name on credit card"
            type="text"
            placeholder="Saran"
          />
          <div className="mb-3 mt-3">Card Number</div>
          <input
            name="card"
            label="Credit card number"
            type="number"
            placeholder="0000 0000 0000 0000"
          />
          <div className="ExpiryDate mb-3">
            <div>
              <div className="mb-3 mt-3">Expires on</div>

              <div className="Expiry">
                <select>
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                  <option value="">April</option>
                  <option value="">May</option>
                  <option value="">June</option>
                  <option value="">July</option>
                  <option value="">August</option>
                  <option value="">September</option>
                  <option value="">October</option>
                  <option value="">November</option>
                  <option value="">December</option>
                </select>
                <select name="" id="">
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025</option>
                </select>
              </div>
            </div>
            <div className="CVCField">
              <div className="mb-3 mt-3">CVC</div>
              <input placeholder="000" type="number" />
            </div>
          </div>
          <div>
            <div className="CheckoutButton mb-3 mt-3">
              <button className="mb-3 mt-3 btn btn-primary">
                Book securely
              </button>
              <br></br>
              <span>
                <i className="fa fa-fw fa-lock mb-3 mt-3" /> Your credit card
                information is encrypted
              </span>
            </div>
          </div>
          <Link to="/userhome">
            <button className="mb-3 mt-3 btn btn-warning">
              Back to Shopping
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Checkout1;
