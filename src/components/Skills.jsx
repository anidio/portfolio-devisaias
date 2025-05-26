import React from 'react';

const skills = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Laravel', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Codeigniter', icon: 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg' }, // SVG externo manual
  { name: 'Tailwind CSS', icon: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'RabbitMQ', icon: 'https://cdn.worldvectorlogo.com/logos/rabbitmq.svg' },
  { name: 'AWS', icon: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="glitch w-full flex justify-center text-4xl md:text-5xl font-bold mb-8"data-text="#Habilidades">
            #Habilidades
        </h2>



        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-gradient-to-br from-cyan-900/20 to-cyan-400/10 p-4 rounded-lg hover:scale-105 hover:shadow-lg transition-transform"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain mb-4" />
              <p className="text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;