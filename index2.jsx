import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-100 via-rose-200 to-rose-100 p-6 text-gray-800">
      <section className="max-w-4xl mx-auto text-center py-20">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Sneha Manna
        </motion.h1>
        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IT Analyst | DevOps & AWS Specialist | Infrastructure as Code Advocate
        </motion.p>
        <div className="flex justify-center gap-4 mb-12">
          <a href="mailto:snehamanna10@gmail.com">
            <Button variant="outline">
              <Mail className="mr-2" /> Contact
            </Button>
          </a>
          <a href="https://github.com/snehamanna" target="_blank">
            <Button variant="outline">
              <Github className="mr-2" /> GitHub
            </Button>
          </a>
          <a href="https://linkedin.com/in/thesnehathing" target="_blank">
            <Button variant="outline">
              <Linkedin className="mr-2" /> LinkedIn
            </Button>
          </a>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">About Me</h2>
              <p>
                I'm an IT Analyst specializing in DevOps and AWS. I enjoy using infrastructure as code to boost efficiency and simplify deployments. My expertise includes AWS (Lambda, API Gateway, DynamoDB, SQS), Terraform, CDK, and CI/CD with GitLab. I’ve led cloud migration projects, automated AWS server patching, and improved system reliability and monitoring within high-scale environments.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Projects</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>HelpAtHand:</strong> A real-time Android app for sending stress/SOS alerts to contacts.</li>
                <li><strong>Lead Management System:</strong> A J2EE-based web app to manage college application leads.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
