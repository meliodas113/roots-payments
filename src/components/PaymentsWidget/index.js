import React from "react";
import "./styles.css";
import { CustomButton } from "../common/CustomButton";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PaymentsTable } from "./PaymentsTable";

const PaymentsWidget = () => {
  return (
    <div className="PaymentsWidgetWrapper">
      <div className="HeadingWrapper">
        <div className="BankLabel">
          <div className="Status"></div>
          <div className="BankName">JP Morgan & Chase</div>
        </div>
      </div>
      <div className="HeroSection">
        <div className="HeroContent">
          <span className="Heading">Payouts</span>
          <span className="SubHeading">Manage all your payouts</span>
        </div>
        <CustomButton
          text={"Create Payout"}
          icon={<IoIosAddCircleOutline />}
          bgColor={"#0F162A"}
          color={"white"}
        />
      </div>
      <div className="TableSection">
        <PaymentsTable />
      </div>
    </div>
  );
};

export default PaymentsWidget;
