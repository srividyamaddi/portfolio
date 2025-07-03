import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.text}>
        Feel free to reach out via phone, email, or connect with me on LinkedIn!
      </p>

      <div style={styles.linksContainer}>
        <a href="tel:3147046671" style={styles.link}>
          📞 (314) 704-6671
        </a>

        <a
          href="mailto:srividyam004@gmail.com"
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          📧 srividyam004@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/srividya-maddi-98680421b"
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "4rem 2rem",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.1rem",
    marginBottom: "2rem",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    fontSize: "1rem",
    color: "#0073b1",
    textDecoration: "none",
    border: "1px solid #0073b1",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    transition: "all 0.3s",
  },
};

export default Contact;
