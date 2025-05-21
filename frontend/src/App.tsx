// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import './App.css'

function App() {
  return (
    <main>
      <section>
        <motion.h1
          className="animated-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Sneha Manna
        </motion.h1>
        <motion.p
          className="animated-paragraph"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IT Analyst | DevOps & AWS Specialist | Infrastructure as Code Advocate
        </motion.p>
        <div className="contact-links">
          <a href="mailto:snehamanna10@gmail.com">
            <Mail /> Contact
          </a>
          <a href="https://github.com/thesnehathing" target="_blank">
            <Github /> GitHub
          </a>
          <a href="https://linkedin.com/in/thesnehathing" target="_blank">
            <Linkedin /> LinkedIn
          </a>
        </div>
        <motion.div
          className="grid-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="card">
            <h2>About Me</h2>
            <p>
              I'm an IT Analyst specializing in DevOps and AWS. I enjoy using infrastructure as code to boost efficiency and simplify deployments. My expertise includes AWS (Lambda, API Gateway, DynamoDB, SQS), Terraform, CDK, and CI/CD with GitLab. I’ve led cloud migration projects, automated AWS server patching, and improved system reliability and monitoring within high-scale environments.
            </p>
          </div>

          <div className="card">
            <h2>Projects</h2>
            <ul>
              <li><strong>HelpAtHand:</strong> A real-time Android app for sending stress/SOS alerts to contacts.</li>
              <li><strong>Lead Management System:</strong> A J2EE-based web app to manage college application leads.</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default App
