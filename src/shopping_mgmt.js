import React from 'react'
import "./bootstrap.min.css"
import "./shopping_mgmt.css"
import Header from "./header"
import Middle from "./middle"
import Footer from "./footer"

const ShoppingManagement = () => {
    return(
        <React.Fragment>
            <Header />
            <Middle />
            <Footer />
        </React.Fragment>
    );
}

export default ShoppingManagement;