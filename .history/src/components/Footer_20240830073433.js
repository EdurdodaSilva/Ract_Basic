import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map((links) => {
                    return (
                        <li key={links.id}>
                            <a href={links.href} className="footer-link">
                                {links.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    const { id, href, icon } = link;
                    return (
                        <li key={id}>
                            <a
                                href={href}
                                target="_blank"
                                className="footer-icon"
                                rel="noreferrer"
                            >
                                <>
                                    <i className={icon}></i>
                                </>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{newDate().getFullYears()}</span> all rights
                reserved
            </p>
        </footer>
    );
};

export default Footer;
