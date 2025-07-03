import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li><a href="#about" style={styles.link}>About</a></li>
          <li><a href="#projects" style={styles.link}>Projects</a></li>
          <li><a href="#skills" style={styles.link}>Skills</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
          <li>
            <a
              href="/resume.pdf"
              download
              style={styles.resumeButton}
            >
              Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#ffffff",
    padding: "15px 30px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  nav: {
    display: "flex",
    justifyContent: "flex-start",
  },
  navList: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "500",
  },
  resumeButton: {
    textDecoration: "none",
    backgroundColor: "#0073b1",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "5px",
    fontWeight: "500",
  },
};

export default Header;
