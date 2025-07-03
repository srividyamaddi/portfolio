import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <a href="#about" style={styles.link}>About</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#contact" style={styles.link}>Contact</a>
        <a
          href="/Srividya_Maddi_Resume.pdf"
          download
          style={{ ...styles.link, ...styles.downloadButton }}
        >
          Download Resume
        </a>
      </nav>

      {/* Header */}
      <header style={styles.header}>
        <img
          src="/profile.jpg"
          alt="Profile"
          style={styles.profilePic}
        />
        <h1>Srividya Maddi</h1>
        <p>Full Stack Java Developer | Cloud Enthusiast | Spring Boot & AWS Expert</p>
      </header>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p>
          I am a Full Stack Java Developer with over 3 years of experience building secure,
          scalable enterprise applications. I specialize in Java, Spring Boot, AWS, and cloud-based platforms.
          I recently completed my MS in Computer Science from Southeast Missouri State University and love working on
          innovative and impactful projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ ...styles.section, ...styles.highlightSection }}>
        <h2 style={styles.sectionTitle}>🚀 Projects</h2>
        <div style={styles.projectList}>
          <div style={styles.projectCard}>
            <h3>E-commerce Platform</h3>
            <p>
              Full-stack platform built with Java, Spring Boot, React, and AWS.
              Handles payments, inventory, authentication, and responsive UI.
            </p>
          </div>
          <div style={styles.projectCard}>
            <h3>Predictive Analytics System</h3>
            <p>
              Machine learning model to forecast trends using Python and Scikit-learn.
              Integrated dashboards and charts.
            </p>
          </div>
          <div style={styles.projectCard}>
            <h3>ETL Pipeline</h3>
            <p>
              Built data pipelines with Apache Airflow to extract and transform large datasets into PostgreSQL.
              Automated and cloud-deployed.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ ...styles.section, ...styles.highlightSection }}>
        <h2 style={styles.sectionTitle}>🧠 Skills</h2>
        <div style={styles.skillGrid}>
          <div>
            <h4>Languages</h4>
            <p>Java, SQL, Python, Kotlin, TypeScript</p>
          </div>
          <div>
            <h4>Technologies</h4>
            <p>Spring Boot, React, REST APIs, AWS, Docker, Git</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>IntelliJ, VS Code, GitHub, Postman, Maven</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>📬 Contact</h2>

        <p style={styles.contactItem}>
          <FaEnvelope style={styles.icon} />
          <a href="mailto:srividyam004@gmail.com" style={styles.contactLink}>
            srividyam004@gmail.com
          </a>
        </p>

        <p style={styles.contactItem}>
          <FaPhoneAlt style={styles.icon} />
          +1 (314) 704-6671
        </p>

        <p style={styles.contactItem}>
          <FaLinkedin style={styles.icon} />
          <a
            href="https://www.linkedin.com/in/srividya-maddi-98680421b"
            target="_blank"
            rel="noreferrer"
            style={styles.contactLink}
          >
            View Profile
          </a>
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    backgroundImage: "url('/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "rgba(230, 248, 255, 0.9)",
    padding: "15px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(5px)"
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#000",
    padding: "8px 12px"
  },
  downloadButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px"
  },
  header: {
    textAlign: "center",
    backgroundColor: "rgba(240, 248, 255, 0.85)",
    padding: "60px 20px",
    margin: "40px auto",
    borderRadius: "12px",
    maxWidth: "900px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
  },
  profilePic: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px"
  },
  section: {
    padding: "60px 40px",
    margin: "60px auto",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    maxWidth: "900px",
    textAlign: "center"
  },
  highlightSection: {
    backgroundColor: "rgba(253, 253, 253, 0.95)",
  },
  sectionTitle: {
    fontSize: "2.2rem",
    marginBottom: "30px",
    marginTop: "10px",
    color: "#007bff"
  },
  projectList: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    textAlign: "left",
    padding: "0 20px",
    maxWidth: "800px",
    margin: "0 auto"
  },
  projectCard: {
    backgroundColor: "rgba(238, 246, 255, 0.9)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "0 20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left"
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "10px 0",
    fontSize: "1.1rem"
  },
  icon: {
    color: "#007bff"
  },
  contactLink: {
    color: "#007bff",
    textDecoration: "underline"
  }
};

export default App;
