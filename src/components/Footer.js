import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} E-Thrift. All rights reserved.</p>
            <p>Your go-to place for second-hand treasures and more!</p>
            <div>
                <a href="/" className="footer-link">Home</a> | 
                <a href="/products" className="footer-link">Products</a> | 
                <a href="/contact" className="footer-link">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;