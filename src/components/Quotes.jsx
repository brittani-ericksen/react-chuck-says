import userEvent from "@testing-library/user-event";
import React, { Component } from "react";
import "./Quotes.css";

const Quotes = (props) => {
    const { quoteData } = props;
    return (
        <div className="quote-box">
            {quoteData}
        </div>
    );
};






export default Quotes;

