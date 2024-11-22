import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to bottom, #fff, #a2f3a2);
  // min-height: 100vh;

  /* Header */
  h1, h2, h3, h4, h5, h6 {
      font-family: 'Outfit', sans-serif;
  }
  header, main, footer {
      font-family: Roboto, sans-serif;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const LogoHeader = styled.header`
    width: 100%;
    padding: 10px 20px;
    display: flex;
    // justify-content: center;
    align-items: center;
    background: #FFFFFF;
    color: #00ff99;
    // font-weight: 800;
    font-size: 24px;
    font-family: 'Outfit', sans-serif;
`;

const Title = styled.h1`
  color: #00a368;
  font-size: 2rem;
  font-weight: bold;
`;

const FAQContent = styled.div`
    gap: 10px;
    width: 100%;
    padding: 50px 15%;
    background: linear-gradient(90.14deg, #FFFFFF 0.12%, #00FF99 99.88%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FAQItem = styled.div`
width: 100%;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: ${(props) => (props.active ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none")};
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background: ${(props) => (props.active ? "#e0ffe0" : "#f9f9f9")};
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const Answer = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
`;

const Footer = styled.footer`
  margin-top: 30px;
  text-align: center;
  background: #00a368;
  padding: 20px;
  color: white;
`;

const FooterLogo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FooterMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const FooterButton = styled.button`
  background: white;
  color: #00a368;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #e0ffe0;
  }
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "O que é energia nuclear e como ela funciona?",
      answer:
        "Energia nuclear é a energia liberada durante a fissão ou fusão de átomos. Em usinas nucleares, a fissão do urânio aquece a água, gerando vapor para movimentar turbinas que produzem eletricidade.",
    },
    {
      question: "Por que a energia nuclear é considerada uma fonte de baixo carbono?",
      answer:
        "Diferentemente de combustíveis fósseis, a energia nuclear não emite dióxido de carbono (CO₂) durante a geração de eletricidade, ajudando a reduzir o impacto ambiental.",
    },
    {
      question: "É seguro usar energia nuclear?",
      answer:
        "Sim, a energia nuclear é uma das fontes mais seguras quando operada adequadamente, com rígidos padrões de segurança para proteger pessoas e o meio ambiente.",
    },
    {
      question: "Como o simulador ajuda na compreensão de fontes de energia?",
      answer:
        "Nosso simulador apresenta dados regionais e benefícios, como a redução de emissões de carbono, ajudando você a visualizar o impacto positivo da energia renovável.",
    },
    {
      question: "Quais dados posso explorar no simulador?",
      answer:
        "Você pode explorar emissões de carbono, produção de energia renovável em diferentes regiões e cenários hipotéticos baseados em dados reais.",
    },
    {
      question: "O simulador funciona em dispositivos móveis?",
      answer:
        "Sim, o simulador foi projetado para ser responsivo e funciona em celulares, tablets e computadores.",
    },
    {
      question: "De onde vêm os dados usados no simulador?",
      answer:
        "Os dados são obtidos de fontes confiáveis, como OpenWeatherMap, Google Maps, e Renewables.ninja, garantindo precisão e relevância.",
    },
    {
      question: "O simulador é gratuito?",
      answer:
        "Sim, o simulador é uma ferramenta educativa e está disponível gratuitamente para todos os usuários.",
    },
    {
      question: "Posso sugerir melhorias ou novos recursos?",
      answer:
        "Claro! Entre em contato conosco pelo formulário na página inicial. Valorizamos seu feedback para tornar o simulador ainda melhor.",
    },
    {
      question:
        "Quais são os benefícios de usar fontes renováveis além da energia nuclear?",
      answer:
        "Fontes renováveis, como solar e eólica, complementam a energia nuclear, fornecendo eletricidade limpa, diversificando a matriz energética e reduzindo dependências de combustíveis fósseis.",
    },
  ];

  return (
    <FAQContainer>
      <LogoHeader>
        <h1>VERIDIS</h1>
      </ LogoHeader>
      <FAQContent>
      <Header>
        <Title>Perguntas Frequentes</Title>
      </Header>
        {questions.map((item, index) => (
          <FAQItem
            key={index}
            active={activeIndex === index}
            onClick={() => toggleQuestion(index)}
          >
            <Question>
              {item.question}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </Question>
            {activeIndex === index && <Answer>{item.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQContent>
      <Footer>
        <p>© 2024 - Todos os direitos reservados</p>
      </Footer>
    </FAQContainer>
  );
};

export default FAQ;