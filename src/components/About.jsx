import React from 'react';

const About = () => {
  return (
    <section style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <img
        src="/profile.jpg"
        alt="Srividya Maddi"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          objectPosition: 'top',
          border: '4px solid #ccc',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}
      />

      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Hi, I'm Srividya Maddi</h2>

      <p style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto 20px', lineHeight: '1.6' }}>
        Full Stack Java Developer with over 3 years of hands-on experience in building secure, scalable
        enterprise applications and cloud-based platforms. Proficient in Java, Spring Boot, AWS, and a wide
        array of web technologies. Recently completed a Master of Science in Computer Science with a focus on
        machine learning, cloud computing, and automation.
      </p>

      <a
        href="/Srividya_Maddi_Resume(1).pdf"
        download="Srividya_Maddi_Resume.pdf"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Download Resume
      </a>
    </section>
  );
};

export default About;
