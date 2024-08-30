import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button
                        type="button"
                        className="nav-toggle"
                        id="nav-toggle"
                    >
                        <i className="fas fa-bars"></i>
                        <></>
                    </button>
                </div>
                {/* <!-- left this comment on purpose --> */}
                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((links) => {
                        return (
                            <li key={links.id}>
                                <a href={links.href} className="nav-link">
                                    {links.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((link) => {
                        const { id, href, icon } = link;
                        return (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    className="nav-icon"
                                    rel="noreferrer"
                                >
                                    <>
                                        <i className={link.icon}></i>
                                    </>
                                </a>
                            </li>
                        );
                    })}
                    <li>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            className="nav-icon"
                            rel="noreferrer"
                        >
                            <>
                                <i className="fab fa-twitter"></i>
                            </>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            className="nav-icon"
                            rel="noreferrer"
                        >
                            <>
                                <i className="fab fa-squarespace"></i>
                            </>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
