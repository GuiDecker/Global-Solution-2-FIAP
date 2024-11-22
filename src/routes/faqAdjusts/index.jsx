import React, { useState } from "react";
import styled from "styled-components";


const FAQAdjusts = () => {
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
        <div>
            <header className="header">
                <div className="logo">VERIDIS</div>
            </header>

            <main className="faq">
                <h1 className="faq-title">Perguntas Frequentes</h1>
                <div className="question-card">
                    <div className="question-header">
                        <p className="question-title">Pergunta 1</p>
                        <div className="arrow-down"></div>
                    </div>
                </div>
                <div className="question-card">
                    <div className="question-header">
                        <p className="question-title">Pergunta 2</p>
                        <div className="arrow-down"></div>
                    </div>
                </div>
                <div className="question-card">
                    <div className="question-header">
                        <p className="question-title">Pergunta 3</p>
                        <div className="arrow-up"></div>
                    </div>
                    <div className="question-body">
                        <p className="question-answer">Resposta da pergunta 3. Lorem Ipsum é um texto de exemplo da indústria tipográfica.</p>
                    </div>
                </div>
            </main>

            {/* <nav className="nav">
            <div className="nav-btn">
              <div className="btn">
                <div className="icon"></div>
              </div>
              <p className="text-content">Home</p>
            </div>
            <div className="nav-btn">
              <div className="btn">
                <div className="icon"></div>
              </div>
              <p className="text-content">Simulador</p>
            </div>
            <div className="nav-btn">
              <div className="btn">
                <div className="icon"></div>
              </div>
              <p className="text-content">FAQ</p>
            </div>
          </nav> */}
            <footer className="footer">
                <p className="copyright">© Todos os direito</p>
            </footer>
        </div>
    );
};

export default FAQAdjusts;