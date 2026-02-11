import { useContext } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { AppContext } from 'App/AppContext';
import { WhatsApp } from 'icons';
import { Theme } from 'types';

const ContactContainer = styled.section<{ $theme: Theme }>`
  min-height: 70vh;
  padding: 100px 4rem;
  z-index: 1;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 820px) {
    padding: 80px 2rem;
  }
`;

const SectionTitle = styled(motion.h2) <{ $theme: Theme }>`
  font-size: 2.5rem;
  color: ${({ $theme }) => $theme.primaryTextColor};
  margin-bottom: 2rem;
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

const ContactDescription = styled(motion.p) <{ $theme: Theme }>`
  color: ${({ $theme }) => $theme.secondaryTextColor};
  max-width: 500px;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const ContactButton = styled(motion.a) <{ $theme: Theme }>`
  padding: 1.25rem 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  border: 2px solid #3b82f6;
  background: transparent;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(37, 211, 102, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(37, 211, 102, 0.3), transparent);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }

  &:hover {
    background: rgba(37, 211, 102, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(37, 211, 102, 0.5);
    color: #25D366;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;

export const Contact = () => {
  const { theme } = useContext(AppContext);

  // WhatsApp link
  const whatsappLink = 'https://wa.me/+201200947156';

  return (
    <ContactContainer id="contact" $theme={theme}>
      <SectionTitle
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </SectionTitle>
      <ContactDescription
        $theme={theme}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </ContactDescription>
      <ContactButton
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        $theme={theme}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <WhatsApp />
        <span>Say Hello</span>
      </ContactButton>
    </ContactContainer>
  );
};
