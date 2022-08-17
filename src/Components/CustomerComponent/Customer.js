import React from "react";

const Customer = ({
  customerData,
  handleCustomerChange,
  handleCustomerKeyPress,
  customerState,
}) => {
  return (
    <div className="home_container_2">
      <div className="form1">
        <h4 className="dataLine">Customer Details</h4>
        <label>Customer Id:</label>

        <input
          type="text"
          name="customerid"
          list="CustomerIdList"
          value={customerState.customerid}
          onChange={handleCustomerChange}
          onKeyPress={handleCustomerKeyPress}
          placeholder="Enter Customer ID"
        />
        <datalist id="CustomerIdList">
          {customerData.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </datalist>

        <label>Customer Name:</label>
        <input
        required
          type="text"
          name="username"
          value={customerState.username}
          onChange={handleCustomerChange}
        />

        <label>Clear Balance:</label>
        <input
          type="text"
          required
          name="clearbalance"
          value={customerState.clearbalance}
          onChange={handleCustomerChange}
        />

        <label>Over Draft:</label>
        <input
        required
          type="text"
          name="overdraft"
          value={customerState.overdraft ? "Yes" : "No"}
          onChange={handleCustomerChange}
        />

        <label>Customer Type:</label>
        <input
          type="text"
          name="customertype"
          value={customerState.customertype ? "Customer" : "Bank"}
          onChange={handleCustomerChange}
          required
        />
      </div>
    </div>
  );
};

export default Customer;
