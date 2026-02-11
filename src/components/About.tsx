import { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const AboutContainer = styled.section<{ $theme: Theme }>`
  min-height: 80vh;
  padding: 100px 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;

  @media (max-width: 820px) {
    padding: 80px 2rem;
  }
`;

const SectionTitle = styled(motion.h2) <{ $theme: Theme }>`
  font-size: 2.5rem;
  color: ${({ $theme }) => $theme.primaryTextColor};
  margin-bottom: 3rem;
  position: relative;
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  max-width: 1100px;
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImagePlaceholder = styled(motion.img) <{ $theme: Theme }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid ${({ $theme }) => $theme.tertiaryTextColor}44;
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.2);
  object-fit: cover;
  object-position: center;

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

const TextContent = styled(motion.div) <{ $theme: Theme }>`
  color: ${({ $theme }) => $theme.secondaryTextColor};
  font-size: 1.125rem;
  line-height: 1.8;
  text-align: left;

  p {
    margin-bottom: 1.5rem;
    animation: fadeInUp 0.8s ease-out forwards;
  }

  p:nth-child(1) {
    animation-delay: 0.2s;
  }

  p:nth-child(2) {
    animation-delay: 0.4s;
  }

  p:nth-child(3) {
    animation-delay: 0.6s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  span {
    color: #3b82f6;
    font-weight: 700;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const About = () => {
  const { theme } = useContext(AppContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <AboutContainer id="about" $theme={theme}>
      <SectionTitle
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </SectionTitle>
      <ContentWrapper>
        <ImagePlaceholder
          src="img/profile.jpg"
          alt="Emad Ahmed - Full Stack Developer"
          $theme={theme}
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <TextContent
          $theme={theme}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            I'm a <span>Full Stack .NET Developer</span> who transforms your ideas into robust, scalable applications. With expertise in <span>C#</span>, <span>ASP.NET MVC</span>, <span>Entity Framework Core</span>, and modern frontend technologies, I deliver end-to-end solutions that drive results.
          </p>
          <p>
            What sets me apart: <span>Strong problem-solving skills</span>, <span>Database optimization expertise</span>, and <span>Clean, maintainable code</span>. I don't just build applications—I architect solutions that scale, perform, and exceed expectations. From responsive UIs with React & TypeScript to powerful backend systems with SQL Server, I've got you covered.
          </p>
          <p>
            Currently training with <span>Digital Egypt Pioneers Initiative</span> and certified by <span>ITI</span>, I bring professional development practices and competitive programming experience to every project. Let's build something exceptional together! 🚀
          </p>
        </TextContent>
      </ContentWrapper>
    </AboutContainer>
  );
};
