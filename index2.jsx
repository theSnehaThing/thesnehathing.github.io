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
          Web Developer | Designer | Tech Enthusiast
        </motion.p>
        <div className="flex justify-center gap-4 mb-12">
          <a href="mailto:sneha@example.com">
            <Button variant="outline">
              <Mail className="mr-2" /> Contact
            </Button>
          </a>
          <a href="https://github.com/snehamanna" target="_blank">
            <Button variant="outline">
              <Github className="mr-2" /> GitHub
            </Button>
          </a>
          <a href="https://linkedin.com/in/snehamanna" target="_blank">
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
                I'm a passionate frontend developer focused on creating beautiful,
                responsive, and user-friendly interfaces. I love combining design and
                technology to solve real-world problems.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Projects</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Portfolio Website:</strong> This website showcasing my work.</li>
                <li><strong>Task Manager:</strong> A simple app to track daily tasks.</li>
                <li><strong>Design Mockups:</strong> UI mockups for web/mobile apps.</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
