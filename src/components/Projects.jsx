function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <div className="project">
        <h3>Cloud-Based E-commerce Platform</h3>
        <p>
          Designed and deployed a scalable e-commerce platform using AWS EC2, S3, and RDS. Backend services built with Flask and Python, frontend with HTML/CSS/Bootstrap. Implemented cloud-native architecture, login system, product listing, and shopping cart.
        </p>
      </div>

      <div className="project">
        <h3>Predictive Analytics Using Machine Learning</h3>
        <p>
          Built machine learning models using Scikit-learn and TensorFlow to predict customer churn. Developed efficient data pipelines using Pandas and NumPy. Visualized insights using Tableau dashboards for decision-making.
        </p>
      </div>

      <div className="project">
        <h3>Ariel Data Challenge – NeurIPS 2024</h3>
        <p>
          Participated in an international ML challenge to detect exoplanets using noisy datasets. Created ensemble classifiers in TensorFlow, cleaned astronomical data, and ranked in the top percentile based on model performance.
        </p>
      </div>

      <div className="project">
        <h3>Cloud-Based ETL & Monitoring System</h3>
        <p>
          Developed a real-time ETL pipeline using AWS Lambda, S3, and RDS. Monitored and scheduled jobs using CloudWatch, integrated error tracking via Splunk and SonarQube. Improved data processing efficiency by 40%.
        </p>
      </div>
    </section>
  );
}

export default Projects;
