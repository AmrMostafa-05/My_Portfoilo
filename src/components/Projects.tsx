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

export const Projects = () => {
    const { theme } = useContext(AppContext);

    const projects = [
        {
            title: 'Full Stack .NET Portfolio Website',
            desc: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations, particle background effects, and professional design. Built with React, TypeScript, and Styled Components.',
            tags: ['React', 'TypeScript', 'Styled Components', 'Framer Motion', 'tsparticles'],
        },
        {
            title: 'Library Management System (LMS)',
            desc: 'Full-stack library management platform for handling book inventory, member registration, borrowing/returning books, and generating reports. Features real-time updates, member dashboard, and admin control panel with comprehensive reporting capabilities.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
        },
        {
            title: 'Library Management System - ASP.NET MVC',
            desc: 'Comprehensive library management solution built with ASP.NET MVC for book catalog management, member registration, circulation management, and generating detailed reports with role-based access control.',
            tags: ['C#', 'ASP.NET MVC', 'SQL Server', 'Entity Framework', 'Bootstrap'],
        },
        {
            title: 'E-Commerce Admin Dashboard',
            desc: 'Full-featured e-commerce administration system for managing products, inventory, orders, and customer data with analytics and reporting capabilities.',
            tags: ['C#', '.NET Core', 'SQL Server', 'JavaScript', 'Bootstrap'],
        },
        {
            title: 'Data Management System',
            desc: 'Enterprise-level data management solution with advanced search, filtering, and CRUD operations. Includes data validation, error handling, and comprehensive logging.',
            tags: ['Java', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
        },
        {
            title: 'Student Performance Analytics',
            desc: 'Analytics platform for tracking student performance, generating progress reports, and providing data-driven insights for educational institutions.',
            tags: ['Python', 'SQL', 'Data Structures', 'Algorithm Optimization'],
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
            <ProjectsGrid>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ display: 'contents' }}
                >
                  {projects.map((project) => (
                      <ProjectCard
                          key={project.title}
                          $theme={theme}
                          variants={itemVariants}
                      >
                          <ProjectImage $theme={theme}>{project.title}</ProjectImage>
                          <ProjectInfo>
                              <ProjectTitle $theme={theme}>{project.title}</ProjectTitle>
                              <ProjectDesc $theme={theme}>{project.desc}</ProjectDesc>
                              <TagList>
                                  {project.tags.map((tag) => (
                                      <Tag key={tag}>{tag}</Tag>
                                  ))}
                              </TagList>
                          </ProjectInfo>
                      </ProjectCard>
                  ))}
                </motion.div>
            </ProjectsGrid>
        </ProjectsContainer>
    );
};
