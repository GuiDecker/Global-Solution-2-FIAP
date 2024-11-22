import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to bottom, #fff, #a2f3a2);

  /* Header */
  h1, h2, h3, h4, h5, h6 {
      font-family: 'Outfit', sans-serif;
  }
  header, main, footer {
      font-family: Roboto, sans-serif;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;
const LogoHeader = styled.div`
    width: 100%;
    padding: 20px 20px 0;
    display: flex;
    // justify-content: center;
    align-items: center;
    background: #FFFFFF;
    color: #00ff99;
    font-weight: bold;
    font-size: 24px;
    font-family: 'Outfit', sans-serif;
`;

const Title = styled.h1`
  color: #black;
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
  // border: 1px solid #d9d9d9;
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
  // margin-top: 30px;
  text-align: center;
  background: #fff;
  padding: 20px 0 10px;
  color: black;
  font-size: 12px;
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: " Como o simulador de implementação de energia renovável poderá demonstrar, de forma interativa e educativa, os benefícios da energia renovável para diferentes regiões?",
      answer:
        "O simulador permite que os usuários selecionem uma região via mapa ou entrada de dados, e exibirá gráficos e dados sobre redução de emissões de carbono, impacto ambiental e eficiência energética, utilizando APIs externas como Renewables.ninja e OpenWeatherMap.",
    },
    {
      question: "O mapa interativo é suficientemente intuitivo para os usuários selecionem leigos?",
      answer:
        "Sim, o mapa foi desenvolvido de forma a garantinr uma interface intuitiva, permitindo que o usuário realize a simulação nas regiões por meio de cliques, além de contar com ferramentas como zoom e marcadores que destacam a área selecionada. ",
    },
    {
      question: "O assistente virtual e a seção de FAQ são suficientes para esclarecer dúvidas comuns e fornecer informações detalhadas sobre a plataforma e sobre as fontes renováveis?",
      answer:
        "Sim, a seção de FAQ abordará perguntas frequentes de forma direta e informativa. Além disso, o assistente virtual, que pretendemos disponibilizar em breve, usará inteligência artificial para responder a dúvidas mais complexas e fornecer informações adicionais personalizadas.",
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
        "Quais são os benefícios de usar fontes renováveis apresentadas pelo simulador?",
      answer:
        "Fontes renováveis, como solar e eólica, complementam outras fontes de energia fornecendo eletricidade limpa, diversificando a matriz energética e reduzindo dependências de combustíveis fósseis.",
    },
  ];

  return (
    <FAQContainer>
      <LogoHeader>
        <div>
        <p>VERIDIS</p>
        </div>
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
        <p>Veridis ©2024 - Todos os direitos reservados</p>
      </Footer>
    </FAQContainer>
  );
};

export default FAQ;