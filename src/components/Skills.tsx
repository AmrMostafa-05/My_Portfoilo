import { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const SkillsContainer = styled.section<{ $theme: Theme }>`
  min-height: auto;
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
  margin-bottom: 3rem;
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

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 140px;
  height: 140px;
  font-size: 5rem;
  line-height: 1;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  border-radius: 15px;
  background: rgba(10, 14, 39, 0.6);
  border: 2px solid rgba(59, 130, 246, 0.5);
  padding: 15px;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);

  &:hover {
    transform: translateY(-15px) scale(1.15);
    filter: drop-shadow(0 15px 30px rgba(59, 130, 246, 0.6));
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(59, 130, 246, 0.8);
  }

  @media (max-width: 600px) {
    width: 110px;
    height: 110px;
    font-size: 3.5rem;
  }
`;

export const Skills = () => {
    const { theme } = useContext(AppContext);

    const technologies = [
        { name: 'HTML5', icon: '🌐', color: '#E34C26' },
        { name: 'CSS3', icon: '🎨', color: '#1572B6' },
        { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
        { name: 'React', icon: '⚛️', color: '#61DAFB' },
        { name: 'Node.js', icon: '🟢', color: '#68A063' },
        { name: 'Bootstrap', icon: '📐', color: '#7952B3' },
        { name: 'Sass', icon: '🎨', color: '#CC6699' },
        { name: 'TypeScript', icon: '📘', color: '#3178C6' },
        { name: 'C#', icon: '⚙️', color: '#239120' },
        { name: 'SQL Server', icon: '🗄️', color: '#CC2927' },
        { name: 'Git', icon: '🐙', color: '#F1502F' },
        { name: '.NET', icon: '🔷', color: '#512BD4' },
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 30, scale: 0.8 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5 },
      },
    };

    return (
        <SkillsContainer id="skills" $theme={theme}>
            <SectionTitle
                $theme={theme}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                My Skills
            </SectionTitle>
            <SkillsGrid>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ display: 'contents' }}
                >
                  {technologies.map((tech) => (
                      <SkillCard
                          key={tech.name}
                          variants={itemVariants}
                          title={tech.name}
                      >
                          <span style={{ fontSize: '5rem', marginBottom: '8px', display: 'block', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                              {tech.icon}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: '#06b6d4', fontWeight: 700, textAlign: 'center' }}>
                              {tech.name}
                          </span>
                      </SkillCard>
                  ))}
                </motion.div>
            </SkillsGrid>
        </SkillsContainer>
    );
};
