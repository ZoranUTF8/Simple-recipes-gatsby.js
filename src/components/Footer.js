import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Jednostavni recepti</span>{" "}
        Napravljeno sa <a href="https://www.gatsbyjs.com/">Gatsby</a>
        <br />
        Zoran Janjic
      </p>
    </footer>
  );
};

export default Footer;
