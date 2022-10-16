import { useContext } from "react";

import "./sidebar.scss";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Person3Icon from '@mui/icons-material/Person3';
import TimelineIcon from '@mui/icons-material/Timeline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/AccountBalance';

import {DarkModeContext} from "../context/darkModeContext";

export default function Sidebar() {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="center">
                <ul>
                    <p className="title">Filter</p>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <li>
                        <Person3Icon className="icon" />
                        <span>Customers</span>
                    </li>
                    <li>
                        <TimelineIcon className="icon" />
                        <span>Year</span>
                    </li>
                    <li>
                        <MonetizationOnIcon className="icon" />
                        <span>Sales</span>
                    </li>
                    <li>
                        <AccountBalanceIcon className="icon" />
                        <span>Revenue</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}
                ></div>
                <div
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}
                ></div>
            </div>
        </div>
    );
}