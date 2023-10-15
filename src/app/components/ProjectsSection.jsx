"use client"
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard';


const projectsData = [
    {
      id: 1,
      title: "E-commerce Application",
      description: "I designed and developed a sweatshirt e-commerce, applying UX/UI principles to create an exceptional shopping experience. Programming will soon bring this project to life.",
      image: "/images/projects/Ec_app.webp",
      gitUrl: "https://github.com/Abnerszv/FtontEnd-Store-CSS",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "User manager",
      description: "I developed a backend user management system using Spring Boot, Hibernate, and JWT for authentication. I designed an efficient RESTful API for user management and gained hands-on experience in backend practices.",
      image: "/images/projects/UserM.webp",
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "3Amigos Restaurant-Bar Application UX",
      description: "I conducted interviews, created prototypes, and conducted usability studies for a restaurant app, enhancing the user experience.",
      image: "/images/projects/3A_UX_app.webp",
      gitUrl: "https://docs.google.com/presentation/d/1XRts1qNbKOZzPaL1C5p-CF-xh48CuIEZt7ZPR5AEIBM/edit#slide=id.p",
      previewUrl: "https://docs.google.com/presentation/d/1XRts1qNbKOZzPaL1C5p-CF-xh48CuIEZt7ZPR5AEIBM/edit#slide=id.p",
    },
    {
      id: 4,
      title: "Blog Cafe",
      description: "I designed and developed a coffee blog website from initial wireframing to implementation, offering a welcoming experience that celebrates coffee culture with reviews, tips, and a passion for the brew, incorporating UX elements for exceptional navigation.",
      image: "/images/projects/BlogC.WEBP",
      gitUrl: "https://github.com/Abnerszv/BlogCafe",
      previewUrl: "https://github.com/Abnerszv/BlogCafe",
    },
    {
      id: 5,
      title: "Simple Neuronal Network",
      description: "I collaborated to develop a neural network based on the perceptron with a hyperbolic tangent activation function in Java. We used a graphical interface to display five relevant parameters for distinguishing oranges and apples. The implementation of the hyperbolic tangent enabled effective classification by establishing a separation curve on a plane with values ranging from -1 to +1.",
      image: "/images/projects/network.webp",
      gitUrl: "https://github.com/Abnerszv/RedNeuronal2.5",
      previewUrl: "https://github.com/Abnerszv/RedNeuronal2.5",
    },
    {
      id: 6,
      title: "Mecatest",
      description: "In collaboration with former classmates, we developed software that aids in practicing touch typing.",
      image: "/images/projects/Mecatest.webp",
      gitUrl: "https://github.com/Abnerszv/Mecatest",
      previewUrl: "https://github.com/Abnerszv/Mecatest",
    },
  ];

const ProjectsSection = () => {

  return (
    <section id='projects'>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </div>

    </section>
  )
}

export default ProjectsSection