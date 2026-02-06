import { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, Moon, Sun, ExternalLink, Download, MapPin, Terminal, Code2, Server, Database, Cloud, Shield, Zap, Users, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="app">
      {/* Fixed Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div className="nav-logo" {...fadeIn}>
            <Terminal size={20} />
            <span>SM</span>
          </motion.div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="terminal-prompt" {...fadeIn}>
              sneha@devops:~$ whoami
            </motion.div>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="highlight">Sneha Manna</span>
            </motion.h1>
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Cloud DevOps Engineer & Platform Architect
            </motion.h2>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I architect scalable cloud infrastructure and automate deployment pipelines 
              that power innovation at scale.
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime Achieved</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#contact" className="btn btn-primary">
                <Mail size={16} />
                Get in Touch
              </a>
              <a href="#" className="btn btn-outline">
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            <motion.div 
              className="hero-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <MapPin size={14} />
              <span>Oslo, Norway</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="impact">
        <div className="container">
          <motion.div 
            className="impact-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div className="impact-card" variants={fadeIn}>
              <div className="impact-icon">
                <Zap size={24} />
              </div>
              <h3>75%</h3>
              <p>Faster Deployments</p>
            </motion.div>
            <motion.div className="impact-card" variants={fadeIn}>
              <div className="impact-icon">
                <Shield size={24} />
              </div>
              <h3>40%</h3>
              <p>Cost Reduction</p>
            </motion.div>
            <motion.div className="impact-card" variants={fadeIn}>
              <div className="impact-icon">
                <Server size={24} />
              </div>
              <h3>95%</h3>
              <p>Fewer Incidents</p>
            </motion.div>
            <motion.div className="impact-card" variants={fadeIn}>
              <div className="impact-icon">
                <Users size={24} />
              </div>
              <h3>2x</h3>
              <p>Team Productivity</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <span className="terminal-prompt">sneha@devops:~$ cat about.md</span>
              <h2>About Me</h2>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate Cloud DevOps Engineer specializing in building resilient, 
                  scalable infrastructure across multi-cloud environments. My expertise spans 
                  from architecting cloud-native solutions to implementing robust CI/CD pipelines 
                  that enable teams to deliver software faster and more reliably.
                </p>
                <p>
                  With deep knowledge of infrastructure as code, container orchestration, and 
                  security best practices, I transform complex technical challenges into elegant, 
                  automated solutions that drive business value.
                </p>
              </div>
              <div className="expertise-areas">
                <div className="expertise-item">
                  <Award size={20} />
                  <span>AWS Solutions Architect</span>
                </div>
                <div className="expertise-item">
                  <Code2 size={20} />
                  <span>Infrastructure as Code</span>
                </div>
                <div className="expertise-item">
                  <Shield size={20} />
                  <span>Security & Compliance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <span className="terminal-prompt">sneha@devops:~$ grep -r "experience" /var/log/career.log</span>
              <h2>Professional Journey</h2>
            </div>
            <div className="timeline">
              <motion.div className="timeline-item" variants={fadeIn}>
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  <div className="timeline-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>IT Analyst – Financial Technology</h3>
                    <div className="timeline-meta">
                      <Calendar size={14} />
                      <span>2022 - Present</span>
                      <MapPin size={14} />
                      <span>Europe & Asia</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    <li>Orchestrated seamless cloud migrations, designing reusable infrastructure modules that reduced project timelines by 50%</li>
                    <li>Engineered automated patching and compliance workflows, achieving zero-downtime deployments</li>
                    <li>Enhanced payment systems for reliability and scale, supporting millions of daily operations</li>
                    <li>Led cross-functional teams in implementing Infrastructure as Code practices across multiple environments</li>
                  </ul>
                  <div className="tech-tags">
                    <span>AWS</span>
                    <span>Terraform</span>
                    <span>Kubernetes</span>
                    <span>GitLab CI</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="timeline-item" variants={fadeIn}>
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>DevOps Engineer</h3>
                    <div className="timeline-meta">
                      <Calendar size={14} />
                      <span>2020 - 2022</span>
                      <MapPin size={14} />
                      <span>Previous Organization</span>
                    </div>
                  </div>
                  <ul className="achievements">
                    <li>Implemented CI/CD pipelines reducing deployment time by 75%</li>
                    <li>Managed containerized applications using Docker and Kubernetes across production environments</li>
                    <li>Automated infrastructure provisioning using Terraform and AWS CDK</li>
                    <li>Established monitoring and alerting systems improving system reliability to 99.9%</li>
                  </ul>
                  <div className="tech-tags">
                    <span>Docker</span>
                    <span>Jenkins</span>
                    <span>Prometheus</span>
                    <span>Grafana</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="section-header">
              <span className="terminal-prompt">sneha@devops:~$ ./skills --list --verbose</span>
              <h2>Technical Expertise</h2>
            </div>
            <div className="skills-grid">
              <motion.div className="skill-card" variants={fadeIn}>
                <div className="skill-header">
                  <Cloud size={24} />
                  <h3>Cloud Platforms</h3>
                </div>
                <p>Multi-cloud architecture and deployment expertise</p>
                <div className="skill-items">
                  <span>AWS</span>
                  <span>Azure</span>
                  <span>GCP</span>
                  <span>Lambda</span>
                  <span>API Gateway</span>
                  <span>DynamoDB</span>
                </div>
              </motion.div>

              <motion.div className="skill-card" variants={fadeIn}>
                <div className="skill-header">
                  <Code2 size={24} />
                  <h3>Infrastructure as Code</h3>
                </div>
                <p>Immutable infrastructure and automated provisioning</p>
                <div className="skill-items">
                  <span>Terraform</span>
                  <span>AWS CDK</span>
                  <span>CloudFormation</span>
                  <span>Ansible</span>
                  <span>Pulumi</span>
                </div>
              </motion.div>

              <motion.div className="skill-card" variants={fadeIn}>
                <div className="skill-header">
                  <Server size={24} />
                  <h3>Container Orchestration</h3>
                </div>
                <p>Kubernetes cluster management and service mesh</p>
                <div className="skill-items">
                  <span>Kubernetes</span>
                  <span>Docker</span>
                  <span>Helm</span>
                  <span>ArgoCD</span>
                  <span>Istio</span>
                </div>
              </motion.div>

              <motion.div className="skill-card" variants={fadeIn}>
                <div className="skill-header">
                  <Database size={24} />
                  <h3>CI/CD & GitOps</h3>
                </div>
                <p>Automated pipelines and progressive delivery</p>
                <div className="skill-items">
                  <span>GitLab CI</span>
                  <span>GitHub Actions</span>
                  <span>Jenkins</span>
                  <span>Tekton</span>
                  <span>Flux</span>
                </div>
              </motion.div>

              <motion.div className="skill-card" variants={fadeIn}>
                <div className="skill-header">
                  <Shield size={24} />
                  <h3>Security & Monitoring</h3>
                </div>
                <p>Zero-trust architecture and observability stack</p>
                <div className="skill-items">
                  <span>Prometheus</span>
                  <span>Grafana</span>
                  <span>ELK Stack</span>
                  <span>Vault</span>
                  <span>OPA</span>
                </div>
              </motion.div>

              <motion.div className="skill-card" variants={fadeIn}>
                <div className="skill-header">
                  <Terminal size={24} />
                  <h3>Programming & Scripting</h3>
                </div>
                <p>Automation tools and development languages</p>
                <div className="skill-items">
                  <span>Python</span>
                  <span>Go</span>
                  <span>Bash</span>
                  <span>TypeScript</span>
                  <span>YAML</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <span className="terminal-prompt">sneha@devops:~$ ls -la /home/projects/featured/</span>
              <h2>Featured Projects</h2>
            </div>
            <div className="projects-grid">
              <motion.div className="project-card" whileHover={{ y: -5 }}>
                <div className="project-header">
                  <h3>Multi-Cloud Infrastructure Platform</h3>
                  <a href="#" className="project-link">
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p>
                  Designed and implemented a unified infrastructure platform using Terraform 
                  modules, reducing deployment time by 60% across AWS, Azure, and GCP environments.
                </p>
                <div className="project-impact">
                  <span className="impact-metric">60% faster deployments</span>
                  <span className="impact-metric">Zero-downtime migrations</span>
                </div>
                <div className="project-tech">
                  <span>Terraform</span>
                  <span>AWS</span>
                  <span>Azure</span>
                  <span>CI/CD</span>
                </div>
              </motion.div>

              <motion.div className="project-card" whileHover={{ y: -5 }}>
                <div className="project-header">
                  <h3>Kubernetes GitOps Pipeline</h3>
                  <a href="#" className="project-link">
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p>
                  Implemented complete GitOps workflow using ArgoCD and Flux, enabling 
                  automatic deployments with security scanning and policy enforcement.
                </p>
                <div className="project-impact">
                  <span className="impact-metric">95% fewer incidents</span>
                  <span className="impact-metric">Automated rollbacks</span>
                </div>
                <div className="project-tech">
                  <span>Kubernetes</span>
                  <span>ArgoCD</span>
                  <span>Helm</span>
                  <span>GitOps</span>
                </div>
              </motion.div>

              <motion.div className="project-card" whileHover={{ y: -5 }}>
                <div className="project-header">
                  <h3>Observability & Monitoring Stack</h3>
                  <a href="#" className="project-link">
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p>
                  Built comprehensive monitoring system with Prometheus, Grafana, and custom 
                  dashboards, reducing MTTR by 40% across microservices architecture.
                </p>
                <div className="project-impact">
                  <span className="impact-metric">40% faster recovery</span>
                  <span className="impact-metric">Full observability</span>
                </div>
                <div className="project-tech">
                  <span>Prometheus</span>
                  <span>Grafana</span>
                  <span>Jaeger</span>
                  <span>AlertManager</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <span className="terminal-prompt">sneha@devops:~$ contact --init</span>
              <h2>Let's Connect</h2>
            </div>
            <div className="contact-content">
              <p>
                Ready to discuss infrastructure challenges or explore collaboration opportunities? 
                I'd love to hear about your projects and how we can build something scalable together.
              </p>
              <div className="contact-links">
                <a href="mailto:snehamanna10@gmail.com" className="contact-link">
                  <Mail size={20} />
                  <span>snehamanna10@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/thesnehathing" target="_blank" className="contact-link">
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/thesnehathing" target="_blank" className="contact-link">
                  <Github size={20} />
                  <span>GitHub Projects</span>
                </a>
              </div>
              <div className="contact-footer">
                <span className="terminal-prompt">Oslo, Norway • Available for remote opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <span className="terminal-prompt">sneha@devops:~$ echo "Built with ❤️ using React & TypeScript"</span>
            <p>&copy; 2026 Sneha Manna • Engineering Scalable Platforms</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate Cloud DevOps Engineer with expertise in building resilient, 
                  future-ready systems. My journey spans continents and industries, always focused 
                  on bridging the gap between development and operations.
                </p>
                <p>
                  I thrive on simplifying complexity—whether automating infrastructure, streamlining 
                  deployments, or boosting system reliability. With experience across AWS, Azure, 
                  and modern DevOps practices, I turn technical challenges into scalable solutions.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <Award size={20} />
                    <span>AWS Certified Solutions Architect</span>
                  </div>
                  <div className="highlight-item">
                    <Code size={20} />
                    <span>Infrastructure as Code Expert</span>
                  </div>
                  <div className="highlight-item">
                    <Server size={20} />
                    <span>CI/CD Pipeline Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Professional Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>IT Analyst – Financial Technology</h3>
                  <div className="timeline-meta">
                    <Calendar size={16} />
                    <span>2022 - Present</span>
                    <MapPin size={16} />
                    <span>Europe & Asia</span>
                  </div>
                  <ul>
                    <li>Orchestrated seamless cloud migrations, designing reusable infrastructure modules that cut project timelines in half</li>
                    <li>Engineered automated patching and compliance workflows, dramatically reducing security risks with zero downtime</li>
                    <li>Enhanced payment and transaction systems for reliability and scale, supporting millions of daily operations</li>
                    <li>Led cross-functional teams in implementing Infrastructure as Code practices</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>DevOps Engineer</h3>
                  <div className="timeline-meta">
                    <Calendar size={16} />
                    <span>2020 - 2022</span>
                    <MapPin size={16} />
                    <span>Previous Company</span>
                  </div>
                  <ul>
                    <li>Implemented CI/CD pipelines reducing deployment time by 75%</li>
                    <li>Managed containerized applications using Docker and Kubernetes</li>
                    <li>Automated infrastructure provisioning using Terraform and AWS CDK</li>
                    <li>Established monitoring and alerting systems improving system reliability</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="skills-grid">
              <motion.div className="skill-category" variants={fadeInUp}>
                <div className="skill-icon">
                  <Cloud size={24} />
                </div>
                <h3>Cloud Platforms</h3>
                <div className="skill-tags">
                  <span>AWS</span>
                  <span>Azure</span>
                  <span>GCP</span>
                  <span>Lambda</span>
                  <span>API Gateway</span>
                  <span>DynamoDB</span>
                  <span>SQS</span>
                </div>
              </motion.div>
              <motion.div className="skill-category" variants={fadeInUp}>
                <div className="skill-icon">
                  <Code size={24} />
                </div>
                <h3>Infrastructure as Code</h3>
                <div className="skill-tags">
                  <span>Terraform</span>
                  <span>AWS CDK</span>
                  <span>CloudFormation</span>
                  <span>Ansible</span>
                  <span>Pulumi</span>
                </div>
              </motion.div>
              <motion.div className="skill-category" variants={fadeInUp}>
                <div className="skill-icon">
                  <Server size={24} />
                </div>
                <h3>DevOps & CI/CD</h3>
                <div className="skill-tags">
                  <span>GitLab CI</span>
                  <span>GitHub Actions</span>
                  <span>Jenkins</span>
                  <span>Docker</span>
                  <span>Kubernetes</span>
                  <span>ArgoCD</span>
                </div>
              </motion.div>
              <motion.div className="skill-category" variants={fadeInUp}>
                <div className="skill-icon">
                  <Users size={24} />
                </div>
                <h3>Programming & Tools</h3>
                <div className="skill-tags">
                  <span>Python</span>
                  <span>TypeScript</span>
                  <span>Bash</span>
                  <span>Go</span>
                  <span>Prometheus</span>
                  <span>Grafana</span>
                  <span>ELK Stack</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <motion.div 
                className="project-card"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="project-header">
                  <h3>Multi-Cloud Infrastructure Automation</h3>
                  <a href="#" className="project-link">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p>
                  Designed and implemented a multi-cloud infrastructure automation platform 
                  using Terraform modules, reducing deployment time by 60% and ensuring 
                  consistent environments across AWS, Azure, and GCP.
                </p>
                <div className="project-tags">
                  <span>Terraform</span>
                  <span>AWS</span>
                  <span>Azure</span>
                  <span>CI/CD</span>
                </div>
              </motion.div>
              <motion.div 
                className="project-card"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="project-header">
                  <h3>Serverless Monitoring System</h3>
                  <a href="#" className="project-link">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p>
                  Built a comprehensive monitoring system using AWS Lambda, CloudWatch, and 
                  custom dashboards. Reduced MTTR by 40% and improved system observability 
                  across microservices architecture.
                </p>
                <div className="project-tags">
                  <span>AWS Lambda</span>
                  <span>CloudWatch</span>
                  <span>Python</span>
                  <span>Grafana</span>
                </div>
              </motion.div>
              <motion.div 
                className="project-card"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="project-header">
                  <h3>Kubernetes GitOps Pipeline</h3>
                  <a href="#" className="project-link">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p>
                  Implemented a complete GitOps workflow using ArgoCD and Kubernetes, 
                  enabling automatic deployments and rollbacks while maintaining security 
                  and compliance standards.
                </p>
                <div className="project-tags">
                  <span>Kubernetes</span>
                  <span>ArgoCD</span>
                  <span>GitOps</span>
                  <span>Helm</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <p>
                I'm always interested in hearing about new opportunities, 
                interesting projects, or just having a chat about cloud technology and DevOps.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={20} />
                  <a href="mailto:snehamanna10@gmail.com">snehamanna10@gmail.com</a>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>Oslo, Norway</span>
                </div>
              </div>
              <div className="contact-social">
                <a href="https://github.com/thesnehathing" target="_blank" className="social-button">
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/thesnehathing" target="_blank" className="social-button">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Sneha Manna. Built with React & deployed on GitHub Pages.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;