import { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const ExperienceContainer = styled.section<{ $theme: Theme }>`
  min-height: 80vh;
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

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, #3b82f655 0%, #06b6d455 50%, transparent 100%);
    @media (max-width: 600px) {
      left: 20px;
    }
  }
`;

const ExperienceItem = styled(motion.div)`
  margin-bottom: 3rem;
  padding-left: 3rem;
  position: relative;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 100%);
  padding: 2rem;
  padding-left: 3rem;
  border-radius: 12px;
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: #3b82f6;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.15);
  }

  @media (max-width: 600px) {
    padding-left: 4rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 2rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.2);
    transition: all 0.3s ease;
    @media (max-width: 600px) {
      left: 14px;
    }
  }

  &:hover::before {
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.3);
  }
`;

const JobTitle = styled.h3<{ $theme: Theme }>`
  font-size: 1.5rem;
  color: ${({ $theme }) => $theme.primaryTextColor};
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`;

const Company = styled.div<{ $theme: Theme }>`
  font-size: 1.1rem;
  background: linear-gradient(90deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const JobDesc = styled.p<{ $theme: Theme }>`
  color: ${({ $theme }) => $theme.secondaryTextColor};
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
`;

export const Experience = () => {
    const { theme } = useContext(AppContext);

    const experiences = [
        {
            title: 'Professional Development Trainee',
            company: 'Digital Egypt Pioneers Initiative (DEPI)',
            date: 'Current • 6 Months',
            desc: 'Comprehensive full-stack development training focusing on .NET technologies, web development, and professional software engineering practices.'
        },
        {
            title: 'Web Development using .NET Certification',
            company: 'Information Technology Institute (ITI)',
            date: 'June 2025 - July 2025',
            desc: 'Completed intensive summer course on web development using .NET framework, covering ASP.NET MVC, Entity Framework, and modern web architecture patterns.'
        },
        {
            title: 'Competitive Programming Participant',
            company: 'ICPC ECPC (Egyptian Collegiate Programming Contest)',
            date: 'August 2025',
            desc: 'Participated in Day 7 programming contest achieving Honorable Mention recognition. Solved algorithmic problems under time constraints demonstrating strong problem-solving and analytical skills.'
        }
    ];

    return (
        <ExperienceContainer id="experience" $theme={theme}>
            <SectionTitle
                $theme={theme}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </SectionTitle>
            <Timeline>
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={exp.title + index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <JobTitle $theme={theme}>{exp.title}</JobTitle>
                        <Company $theme={theme}>{exp.company} • {exp.date}</Company>
                        <JobDesc $theme={theme}>{exp.desc}</JobDesc>
                    </ExperienceItem>
                ))}
            </Timeline>
        </ExperienceContainer>
    );
};
