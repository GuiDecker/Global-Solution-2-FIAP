import React, { useState } from "react";
import "../../styles/FAQF.css";

const FAQF = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const faqs = [
        { question: "Pergunta 1", answer: "Resposta da pergunta 1." },
        { question: "Pergunta 2", answer: "Resposta da pergunta 2." },
        { question: "Pergunta 3", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    ];

    return (
        <div className="faq-page">
            <header className="header">
                <h1>VERIDIS</h1>
            </header>
            <main className="content">
                <h2>Perguntas Frequentes</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div
                                className="faq-question"
                                onClick={() => toggleQuestion(index)}
                            >
                                {faq.question}
                                <span className="arrow">
                                    {activeQuestion === index ? "▲" : "▼"}
                                </span>
                            </div>
                            {activeQuestion === index && (
                                <div className="faq-answer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <footer className="footer">
                <button className="nav-button">Home</button>
                <button className="nav-button">Simulador</button>
                <button className="nav-button">FAQ</button>
            </footer>
        </div>
    );
};

export default FAQF;