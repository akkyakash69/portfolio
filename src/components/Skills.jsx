import React from 'react';
import { motion } from 'framer-motion';
import Particles from '../Animations/SplitText/Particles';
import GlareHover from '../Animations/SplitText/HoverGlare';
const skills = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Tailwind", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Framer Motion", logo: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },
  { name: "GSAP", logo: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
  { name: "DevOps", logo: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Web 3.0", logo: "https://imgs.search.brave.com/_VMXYaiyMYSBZlMozg_tp43QOqpA_r_kJrj-1mfjahU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/ODk4ODEwNS9maWxl/L29yaWdpbmFsLTVm/ZTEzOGU0NWMzNTk5/ODMwMGUzM2FkODdm/YzU0MDk0LmpwZz9y/ZXNpemU9NDAweDA" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Gen AI", logo: "https://imgs.search.brave.com/_UXlJi0ltZu1TjeGFEOY5rt2IO42GtTSa4we7lOsClg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvNTI3OC81Mjc4/NDAyLnBuZw" },
  { name: "REST API", logo: "https://imgs.search.brave.com/eX7xlXabJRMYkPRT8HGJR4FoOQgrnotpEyeTk4Mx-RY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXN0/ZnVsYXBpLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvd2hhdC1p/cy1yZXN0LWFwaS5w/bmc" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen bg-[#141414] text-white px-6 py-24 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          💻 My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <GlareHover
                width="100%"
                height="100%"
                borderRadius="1rem"
                background="rgba(255,255,255,0.05)"
                borderColor="rgba(255,255,255,0.1)"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={45}
                glareSize={180}
                className="p-4"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-3 z-10"
                    loading="lazy"
                  />
                  <p className="text-sm text-white/80 text-center">{skill.name}</p>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
