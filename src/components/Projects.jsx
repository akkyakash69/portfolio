import React from 'react';
import { motion } from 'framer-motion';
import GlareHover from '../Animations/SplitText/HoverGlare';
import Threads from '../Animations/SplitText/Threads';

const projects = [
  {
    title: '🐭 Pikachu Game',
    image: 'https://imgs.search.brave.com/5U_He-x_QhxZc2NadrlxZKzshOVZomIUTPfQcw38ars/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q2Lzk5/LzQ1L2Q2OTk0NTMz/YjliMTIyZjk3ZGY5/OTYyYjlhNTA4YzI5/LmpwZw',
    tryLink: 'https://akash041005.github.io/pikachu-game/',
    codeLink: 'https://github.com/Akash041005/pikachu-game',
  },
  {
    title: '⌨️ Keazy Typing',
    image: 'https://github.com/Akash041005/Keazy-Typing/blob/main/images/keyzy%20typing%20logo.png?raw=true',
    tryLink: 'https://akash041005.github.io/Keazy-Typing/',
    codeLink: 'https://github.com/Akash041005/Keazy-Typing',
  },
  {
    title: '📺 YouTube Clone',
    image: 'https://imgs.search.brave.com/JivkeX8VPo4Vlp43xIXPm2pZJbVdgsCAuUBn58sGErI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQveW91/dHViZS1sb2dvLWJs/YWNrLWJhY2tncm91/bmQtMTI4MC14LTkw/NS0yZnZyNHBxcHVm/bzhxaXhwLmpwZw',
    tryLink: 'https://akash041005.github.io/Sheryians-live-Cohort/Yt-clone/',
    codeLink: 'https://github.com/Akash041005/Sheryians-live-Cohort',
  },
  {
    title: '🤖 Cyberpunk Login',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*OpXzss9Qr6X7TzPWXjFblQ.jpeg',
    tryLink: 'https://akash041005.github.io/Sheryians-live-Cohort/robotic%20cyberpunk/',
    codeLink: 'https://github.com/Akash041005/Sheryians-live-Cohort',
  },
];

const Projects = () => {
  return (
    <section className="relative bg-[#0f0f0f] text-white px-4 sm:px-6 py-20 overflow-hidden">
      {/* 🧵 Threads Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      {/* 🚀 Section Content */}
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16 relative z-10">
        🚀 My <span className="text-purple-500">Projects</span>
      </h2>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateZ: 0.5 }}
            className="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md backdrop-blur-sm hover:shadow-purple-500/30 transition-all duration-300"
          >
            <GlareHover
              className="relative w-full aspect-[4/3] overflow-hidden"
              glareColor="#ffffff"
              glareOpacity={0.4}
              glareAngle={-30}
              glareSize={180}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) =>
                  (e.target.src = 'https://via.placeholder.com/400x250?text=Image+Not+Found')
                }
              />
            </GlareHover>

            <div className="p-5 flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={project.tryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-full transition"
                >
                  Try Now
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-purple-500 text-purple-300 hover:bg-purple-800 text-sm px-4 py-2 rounded-full transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
