import { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const ProjectsContainer = styled.section<{ $theme: Theme }>`
  min-height: 100vh;
  padding: 100px 4rem;
  z-index: 1;
  position: relative;
  text-align: center;

  @media (max-width: 820px) {
    padding: 80px 2rem;
  }
`;

const SectionTitle = styled(motion.h2) <{ $theme: Theme }>`
  font-size: 2.5rem;
  color: ${({ $theme }) => $theme.primaryTextColor};
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  font-weight: 700;
  letter-spacing: -0.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div) <{ $theme: Theme }>`
  background: linear-gradient(135deg, ${({ $theme }) => $theme.shadowColor} 0%, rgba(59, 130, 246, 0.05) 100%);
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid ${({ $theme }) => $theme.tertiaryTextColor}22;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-12px);
    border-color: #3b82f6;
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.25), 0 0 50px rgba(59, 130, 246, 0.1);

    &::before {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div<{ $theme: Theme }>`
  height: 200px;
  background: linear-gradient(135deg, #3b82f622 0%, #06b6d422 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-weight: bold;
  font-size: 1.5rem;
  border-bottom: 2px solid ${({ $theme }) => $theme.tertiaryTextColor}22;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%);
    animation: shimmerFlow 3s infinite;
  }

  @keyframes shimmerFlow {
    0% {
      transform: translateX(-100%) translateY(-100%);
    }
    100% {
      transform: translateX(100%) translateY(100%);
    }
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
`;

const ProjectTitle = styled.h3<{ $theme: Theme }>`
  font-size: 1.25rem;
  color: ${({ $theme }) => $theme.primaryTextColor};
  margin-bottom: 0.75rem;
  font-weight: 700;
`;

const ProjectDesc = styled.p<{ $theme: Theme }>`
  color: ${({ $theme }) => $theme.secondaryTextColor};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  background: linear-gradient(135deg, #3b82f620 0%, #06b6d410 100%);
  color: #3b82f6;
  border-radius: 50px;
  font-weight: 600;
  border: 1px solid #3b82f644;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f630;
    border-color: #3b82f6;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1.5rem;
`;

const ViewCodeBtn = styled(motion.button)`
  flex: 1;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const GitHubLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 8px;
  background: linear-gradient(135deg, #333, #1a1a1a);
  border: 2px solid #3b82f644;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }

  &:hover {
    transform: translateY(-3px) scale(1.1);
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    border-color: #3b82f6;
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
  }
`;

export const Projects = () => {
  const { theme } = useContext(AppContext);

  interface Project {
    title: string;
    desc: string;
    tags: string[];
    image?: string;
    icon?: string;
    link: string;
  }

  const projects: Project[] = [
    {
      title: 'Full Stack .NET Portfolio Website',
      desc: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations, particle background effects, and professional design. Built with React, TypeScript, and Styled Components. This website is a work in progress and is constantly being updated with new projects and features.',
      tags: ['React', 'TypeScript', 'Styled Components', 'Framer Motion', 'tsparticles'],
      image: 'portfolio.png',
      link: 'https://github.com',
    },
    {
      title: 'Library Management System (LMS)',
      desc: 'Full-stack library management platform for handling book inventory, member registration, borrowing/returning books, and generating reports. Features real-time updates, member dashboard, and admin control panel with comprehensive reporting capabilities.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
      image: 'Lms.png',
      link: 'https://github.com',
    },
    {
      title: 'Operating System – Fat File System Project',
      desc: 'Designed and implemented a mini FAT-based file system supporting full file and directory operations with cluster allocation on a virtual disk. Built a custom CLI shell integrating FileSystem, FAT, and Directory layers with a modular architecture.',
      tags: ['C#', 'Operating Systems', 'File Systems', 'Data Structures', 'CLI'],
      image: 'fat.png',
      link: 'https://github.com',
    },
    {
      title: 'E-Commerce Admin Dashboard',
      desc: 'Full-featured e-commerce admin system for managing products, orders, and customers with real-time analytics, role-based access, and a scalable high-performance architecture.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: 'ecommerce.png',
      link: 'https://github.com',
    },
    {
      title: 'Data Management System',
      desc: 'Enterprise-level data management solution with advanced search, filtering, and CRUD operations. Includes data validation, error handling, and comprehensive logging.',
      tags: ['Java', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      image: 'data.png',
      link: 'https://github.com',
    },
    {
      title: 'Fitness Class Booking System – SQL Database Project (ITI Scholarship)',
      desc: 'Developed a gym management database with 5 tables, 50+ SQL queries, indexed performance optimization, and attendance analytics.',
      tags: ['SQL Server', 'Database Design', 'Query Optimization'],
      image: 'db.png',
      link: 'https://github.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ProjectsContainer id="projects" $theme={theme}>
      <SectionTitle
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </SectionTitle>
      <ProjectsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            $theme={theme}
            variants={itemVariants}
          >
            <ProjectImage $theme={theme}>
              {project.image ? (
                <img src={`/img/${project.image}`} alt={project.title} />
              ) : (
                <motion.div
                  style={{
                    fontSize: '4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.icon}
                </motion.div>
              )}
            </ProjectImage>
            <ProjectInfo>
              <ProjectTitle $theme={theme}>{project.title}</ProjectTitle>
              <ProjectDesc $theme={theme}>{project.desc}</ProjectDesc>
              <TagList>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
              <ActionButtons>
                <ViewCodeBtn
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(project.link, '_blank')}
                >
                  View Code
                </ViewCodeBtn>
                <GitHubLink
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  as="a"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </GitHubLink>
              </ActionButtons>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};
