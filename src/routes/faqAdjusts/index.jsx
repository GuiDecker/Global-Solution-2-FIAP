import React, { useState } from "react";
import styled from "styled-components";

const StyledFAQ = styled.div`

/* Header */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
}
header, main, footer {
    font-family: Roboto, sans-serif;
}

header {
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
}

main {
    width: 100%;
    padding: 50px 15%;
    background: linear-gradient(90.14deg, #FFFFFF 0.12%, #00FF99 99.88%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.faq-title {

}

/* Footer */
footer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
}
.copyright {
    color: #00051E;
    font-size: 10px;
    font-family: 'Outfit', sans-serif;
    
}

// /* faq-title */

// position: absolute;
// width: 535px;
// height: 60px;
// left: calc(50% - 535px/2 - 0.5px);
// top: 149px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 48px;
// line-height: 100%;
// /* or 48px */
// text-align: center;

// color: #00051E;



// /* question-card */

// position: absolute;
// width: 1097px;
// height: 70px;
// left: 171px;
// top: 260px;



// /* question-header */

// position: absolute;
// width: 1097px;
// height: 70px;
// left: 171px;
// top: 260px;

// background: #FFFFFF;
// box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
// border-radius: 15px;


// /* question-title */

// position: absolute;
// width: 227px;
// height: 27px;
// left: calc(50% - 227px/2 - 406.5px);
// top: 282px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 26px;
// line-height: 100%;
// /* or 26px */

// color: #333333;



// /* arrow-down */

// position: absolute;
// width: 29px;
// height: 12px;
// left: 1205px;
// top: 289px;



// /* Icon */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// border: 2px solid #666666;


// /* question-card */

// position: absolute;
// width: 1097px;
// height: 279px;
// left: 171px;
// top: 442px;



// /* question-body */

// position: absolute;
// width: 1097px;
// height: 279px;
// left: 171px;
// top: 442px;

// background: #FFFFFF;
// box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
// border-radius: 15px;


// /* question-answer */

// position: absolute;
// width: 1031px;
// height: 138px;
// left: calc(50% - 1031px/2 - 4.5px);
// top: 558px;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 100%;
// /* or 20px */

// color: #666666;



// /* question-header */

// position: absolute;
// width: 1097px;
// height: 70px;
// left: 171px;
// top: 442px;

// background: #FFFFFF;
// box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
// border-radius: 15px;


// /* question-title */

// position: absolute;
// width: 227px;
// height: 27px;
// left: calc(50% - 227px/2 - 406.5px);
// top: 464px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 26px;
// line-height: 100%;
// /* or 26px */

// color: #333333;



// /* arrow-up */

// position: absolute;
// width: 29px;
// height: 12px;
// left: 1234px;
// top: 482px;

// transform: rotate(180deg);


// /* Icon */

// position: absolute;
// left: 100%;
// right: -100%;
// top: 100%;
// bottom: -100%;

// border: 2px solid #666666;
// transform: rotate(180deg);


// /* question-card */

// position: absolute;
// width: 1097px;
// height: 70px;
// left: 171px;
// top: 351px;



// /* question-header */

// position: absolute;
// width: 1097px;
// height: 70px;
// left: 171px;
// top: 351px;

// background: #FFFFFF;
// box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
// border-radius: 15px;


// /* question-title */

// position: absolute;
// width: 227px;
// height: 27px;
// left: calc(50% - 227px/2 - 406.5px);
// top: 373px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 26px;
// line-height: 100%;
// /* or 26px */

// color: #333333;



// /* arrow-down */

// position: absolute;
// width: 29px;
// height: 12px;
// left: 1205px;
// top: 380px;



// /* Icon */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// border: 2px solid #666666;


// /* header */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 87.55%;

// background: #FFFFFF;


// /* nav */

// position: absolute;
// width: 650px;
// height: 120px;
// left: 395px;
// top: 653px;



// /* nav-bar */

// position: absolute;
// width: 650px;
// height: 120px;
// left: 395px;
// top: 653px;

// background: rgba(0, 0, 0, 0.11);
// backdrop-filter: blur(2px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 20px;


// /* nav-buttons */

// position: absolute;
// width: 330px;
// height: 90px;
// left: 675px;
// top: 668px;



// /* nav-btn */

// position: absolute;
// width: 90px;
// height: 90px;
// left: 675px;
// top: 668px;



// /* btn */

// position: absolute;
// width: 90px;
// height: 90px;
// left: 675px;
// top: 668px;

// background: #FFFFFF;
// box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
// border-radius: 15px;


// /* icon */

// position: absolute;
// width: 60px;
// height: 60px;
// left: 690px;
// top: 678px;



// /* Icon */

// position: absolute;
// left: 12.5%;
// right: 12.5%;
// top: 12.5%;
// bottom: 12.5%;

// border: 2px solid #00FF99;


// /* text-content */

// position: absolute;
// width: 38px;
// height: 14px;
// left: 701px;
// top: 738px;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 100%;
// /* identical to box height, or 14px */

// color: #00FF99;



// /* nav-btn */

// position: absolute;
// width: 90px;
// height: 90px;
// left: 795px;
// top: 668px;



// /* btn */

// position: absolute;
// width: 90px;
// height: 90px;
// left: 795px;
// top: 668px;

// background: #FFFFFF;
// box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
// border-radius: 15px;


// /* icon */

// position: absolute;
// width: 60px;
// height: 60px;
// left: 810px;
// top: 678px;



// /* icon */

// position: absolute;
// left: 17.12%;
// right: 17.13%;
// top: 8.32%;
// bottom: 8.33%;

// border: 1.5px solid #00FF99;


// /* text-content */

// position: absolute;
// width: 64px;
// height: 14px;
// left: 808px;
// top: 738px;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 100%;
// /* identical to box height, or 14px */

// color: #00FF99;



// /* nav-btn */

// position: absolute;
// width: 90px;
// height: 90px;
// left: 915px;
// top: 668px;



// /* btn */

// position: absolute;
// width: 90px;
// height: 90px;
// left: 915px;
// top: 668px;

// background: #FFFFFF;
// box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
// border-radius: 15px;


// /* icon */

// position: absolute;
// width: 60px;
// height: 60px;
// left: 930px;
// top: 678px;



// /* icon */

// position: absolute;
// left: 8.33%;
// right: 8.33%;
// top: 10.13%;
// bottom: 10.17%;

// border: 1.5px solid #00FF99;


// /* text-content */

// position: absolute;
// width: 26px;
// height: 14px;
// left: 947px;
// top: 738px;

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 100%;
// /* identical to box height, or 14px */

// color: #00FF99;



// /* logo */

// position: absolute;
// width: 190px;
// height: 60px;
// left: calc(50% - 190px/2 - 200px);
// top: 691px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 48px;
// line-height: 100%;
// /* or 48px */
// text-align: center;

// color: #001131;

// border: 1px solid #001131;


// /* scroll */

// position: absolute;
// width: 39px;
// height: 811px;
// left: 1401px;
// top: 0px;



// /* scroll-container */

// position: absolute;
// width: 39px;
// height: 811px;
// left: 1401px;
// top: 0px;

// background: #F9F9F9;


// /* scroll-bar */

// position: absolute;
// width: 39px;
// height: 266px;
// left: 1401px;
// top: 31px;

// background: #74FFC7;


// /* logo */

// position: absolute;
// width: 284px;
// height: 60px;
// left: calc(50% - 284px/2 - 552px);
// top: 20px;

// font-family: 'Outfit';
// font-style: normal;
// font-weight: 700;
// font-size: 48px;
// line-height: 100%;
// /* or 48px */

// color: #00FF99;

// border: 1px solid #00FF99;

`;


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
        <StyledFAQ>
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
            <footer className="footer">
                <p className="copyright">Veridis 2024 - Todos os direitos reservados</p>
            </footer>
        {/* </StyledFAQ> */}
        </div>
        </StyledFAQ>
    );
};

export default FAQAdjusts;