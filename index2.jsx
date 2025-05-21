import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main style={{ minHeight: '100vh', background: 'radial-gradient(circle at center, #ffe4e6, #fecdd3)', color: '#1f2937', padding: '1.5rem' }}>
      <section style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center', paddingTop: '5rem' }}>
        <motion.h1
          style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Sneha Manna
        </motion.h1>
        <motion.p
          style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IT Analyst | DevOps & AWS Specialist | Infrastructure as Code Advocate
        </motion.p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <a href="mailto:snehamanna10@gmail.com" style={{ border: '1px solid #d1d5db', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#1f2937' }}>
            <Mail style={{ marginRight: '0.5rem' }} /> Contact
          </a>
          <a href="https://github.com/snehamanna" target="_blank" style={{ border: '1px solid #d1d5db', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#1f2937' }}>
            <Github style={{ marginRight: '0.5rem' }} /> GitHub
          </a>
          <a href="https://linkedin.com/in/thesnehathing" target="_blank" style={{ border: '1px solid #d1d5db', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#1f2937' }}>
            <Linkedin style={{ marginRight: '0.5rem' }} /> LinkedIn
          </a>
        </div>
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s ease' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>About Me</h2>
            <p>
              I'm an IT Analyst specializing in DevOps and AWS. I enjoy using infrastructure as code to boost efficiency and simplify deployments. My expertise includes AWS (Lambda, API Gateway, DynamoDB, SQS), Terraform, CDK, and CI/CD with GitLab. I’ve led cloud migration projects, automated AWS server patching, and improved system reliability and monitoring within high-scale environments.
            </p>
          </div>

          <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s ease' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>Projects</h2>
            <ul style={{ paddingLeft: '1.25rem', listStyleType: 'disc' }}>
              <li><strong>HelpAtHand:</strong> A real-time Android app for sending stress/SOS alerts to contacts.</li>
              <li><strong>Lead Management System:</strong> A J2EE-based web app to manage college application leads.</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
