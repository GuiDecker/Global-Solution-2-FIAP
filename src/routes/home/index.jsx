import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import anaImage from '../../assets/img/anaImage.jpeg';
import guilhermeImage from '../../assets/img/guilhermeImage.jpeg';
import bentoImage from '../../assets/img/bentoImage.jpeg';
import giuliaImage from '../../assets/img/giuliaImage.jpg';
import felipeImage from '../../assets/img/felipeImage.jpeg';
import imagehome from '../../assets/logohome.svg';

function TeamCard({ name, rm, image }) {
  return (
    <div
      className="team-card"
      style={{
        height: '35vh',
        borderRadius: '8px',
        background: 'linear-gradient(to top, #FFFFFF, #BFFFE5)',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <div className="text-container">
        <p
          className="card-name"
          style={{ color: '#00FF99', fontWeight: 'bold' }}
        >
          {name}
        </p>
        <p>RM: {rm}</p>
      </div>
    </div>
  );
}

function Home() {
  const gradientStyle = {
    background: 'linear-gradient(to right, #00FF99, #ffffff)',
    padding: '20px',
    height: '100%',
  };
  const contatogradientStyle = {
    background: 'linear-gradient(to left, #00FF99, #ffffff)',
    padding: '20px',
  };

  const responsiveGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    margin: '20px',
  };

  return (
    <div className="container-total">
      {/* Cabeçalho */}
      {/* <header className="header" style={gradientStyle}>
        <h1 className="title" style={{ fontWeight: 'bold', fontSize: '40px' }}>
          VERIDIS
        </h1>
      </header> */}

      {/* Simulação */}
      <div className="container-inicio" style={gradientStyle}>
        <h1 className="title" style={{ fontWeight: 'bold', fontSize: '40px' }}>
          VERIDIS
        </h1>
        <section
          className=" row "
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '50px',
          }}
        >
          <div
            className="col-sm-4"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h2
                style={{
                  fontWeight: 'bold',
                  padding: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                Simule. Planeje. Inove!
              </h2>
              <p
                style={{
                  padding: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Explore novas possibilidades com VERIDIS. Com apenas alguns
                cliques, simule a implementação de energia limpa e descubra
                gratuitamente as oportunidades renováveis da sua região.
                Experimente já.
              </p>
            </div>
          </div>
          <div
            className="col-sm-8"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={imagehome}
              alt="Logo Veridis"
              style={{
                // maxWidth: '800px',
                // margin: '20px auto',
                // display: 'block',
                // padding: '20px',
                position: 'relative',
                top: '-100px',
                right: '0px',
              }}
            />
          </div>
        </section>
      </div>

      {/* Vídeo */}
      <div
        style={{
          textAlign: 'center',
          padding: '20px 20px 120px 20px',
          background: 'linear-gradient(to bottom, #FFFFFF, #BFFFE5)',
          marginTop: '100px',
        }}
      >
        <h2 style={{ color: '#00FF99', fontWeight: 'bold' }}>Nosso Projeto</h2>
        <p>
          Veja a seguir uma breve apresentação do projeto Veridis e de seu
          funcionamento.
        </p>
        <div style={{ marginBottom: '100px !important' }}>
          <iframe
            src="https://www.youtube.com/embed/seu-video-id"
            title="Vídeo Pitch"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              height: '300px',
              maxWidth: '800px',
            }}
          />
        </div>
      </div>

      {/* Equipe */}
      <div style={{ padding: '50px 0 !impotant' }}>
        <h2
          style={{
            textAlign: 'center',
            padding: '20px',
            color: '#00FF99',
            fontWeight: 'bold',
          }}
        >
          Equipe Veridis
        </h2>
        <p style={{ textAlign: 'center', padding: '20px' }}>
          Conheça os nossos desenvolvedores!
        </p>
        <div style={responsiveGridStyle}>
          <TeamCard
            name="Ana Clara Santos Moreira"
            rm="558786"
            image={anaImage}
          />
          <TeamCard
            name="Guilherme Barreto Mendes"
            rm="557916"
            image={guilhermeImage}
          />
          <TeamCard
            name="Bento Del Santo Coutinho"
            rm="555442"
            image={bentoImage}
          />
          <TeamCard
            name="Giulia Milanez Pirolo"
            rm="557575"
            image={giuliaImage}
          />
          <TeamCard
            name="Felipe Alberto Oliveira dos Santos"
            rm="557348"
            image={felipeImage}
          />
        </div>
      </div>

      <div className="container-faleconosco" style={contatogradientStyle}>
        <p>Tem alguma dúvida, comentário ou sugestão?</p>

        <div className="contato">
          <h1 style={{ fontWeight: 'bold', color: '#001131' }}>Fale Conosco</h1>
        </div>

        <p>Quero ouvir o que você tem a dizer!</p>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>VERIDIS - Todos direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
