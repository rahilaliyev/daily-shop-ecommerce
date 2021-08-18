import React from "react";

const Total = ({ totalprice }) => {
  return (
    <div className="totalAmount">
      <button>Buy now</button>
      <table>
        <tbody>
          <tr>
            <td>Shipping</td>
            <td>Free</td>
          </tr>
          <tr>
            <td> Total amount</td>
            <td>$ {totalprice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Total;
