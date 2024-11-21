import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import anaImage from "../../assets/img/anaImage.jpeg";
import guilhermeImage from "../../assets/img/guilhermeImage.jpeg";
import bentoImage from "../../assets/img/bentoImage.jpeg";
import giuliaImage from "../../assets/img/giuliaImage.jpg";
import felipeImage from "../../assets/img/felipeImage.jpeg";
import imagehome from "../../assets/logohome.svg";
import linkedinimage from "../../assets/Linkedin.svg";
import githubimage from "../../assets/Github.svg";

function Icon({ src, alt, size = 24, link = null }) {
  const style = {
    width: size,
    height: size,
    display: "inline-block",
    objectFit: "contain",
    cursor: link ? "pointer" : "default",
  };

  const iconElement = <img src={src} alt={alt} style={style} />;

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {iconElement}
      </a>
    );
  }

  return iconElement;
}

function TeamCard({ name, rm, image, linkedin, github }) {
  return (
    <div
      className="team-card"
      style={{
        height: "35vh",
        borderRadius: "8px",
        background: "linear-gradient(to top, #ffffff, #00FF99)",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div className="text-container">
        <p className="card-name" style={{ color: "#00FF99", fontWeight: "bold" }}>
          {name}
        </p>
        <p>RM: {rm}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {linkedin && <Icon src={linkedinimage} alt="LinkedIn Icon" link={linkedin} />}
          {github && <Icon src={githubimage} alt="GitHub Icon" link={github} />}
        </div>
      </div>
    </div>
  );
}

function Home() {
  const gradientStyle = {
    background: "linear-gradient(to right, #00FF99, #ffffff)",
    padding: "20px",
    height: "100%",
  };
  const contatogradientStyle = {
    background: "linear-gradient(to left, #00FF99, #ffffff)",
    padding: "20px",
  };

  const responsiveGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    margin: "20px",
  };

  return (
    <div
      className="container-total"
      style={{
        flex: 1,
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      <div className="container-inicio" style={gradientStyle}>
        <h1 className="title" style={{ fontWeight: "bold", fontSize: "40px", color: "#001131" }}>
          VERIDIS
        </h1>
        <section
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "50px",
            margin: "0 20px",
          }}
        >
          <div
            className="col-sm-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  padding: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#001131",
                }}
              >
                Simule. Planeje. Inove!
              </h2>
              <p
                style={{
                  padding: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  textAlign: "justify",
                  letterSpacing: "1px",
                  color: "#001131",
                }}
              >
                Explore novas possibilidades com VERIDIS. Com apenas alguns cliques, simule a implementação de energia
                limpa e descubra gratuitamente as oportunidades renováveis da sua região. Experimente já.
              </p>
            </div>
          </div>
          <div
            className="col-sm-8"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={imagehome}
              alt="Logo Veridis"
              style={{
                position: "relative",
                top: "-100px",
              }}
            />
          </div>
        </section>
      </div>

      {/* Video */}
      <div
        style={{
          textAlign: "center",
          padding: "20px 20px 120px 20px",
          background: "linear-gradient(to bottom, #FFFFFF, #BFFFE5)",
        }}
      >
        <h2 style={{ color: "#00FF99", fontWeight: "bold" }}>Nosso Projeto</h2>
        <p>Veja a seguir uma breve apresentação do projeto Veridis e de seu funcionamento.</p>
        <iframe
          src="https://www.youtube.com/embed/seu-video-id"
          title="Vídeo Pitch"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: "100%",
            height: "300px",
            maxWidth: "800px",
          }}
        />
      </div>

      {/* Equipe */}
      <div style={{ padding: "50px 0", marginTop: "100px" }}>
        <h2
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#00FF99",
            fontWeight: "bold",
          }}
        >
          Equipe Veridis
        </h2>
        <p style={{ textAlign: "center", padding: "20px" }}>Conheça os nossos desenvolvedores!</p>
        <div style={responsiveGridStyle}>
          <TeamCard
            name="Ana Clara Santos Moreira"
            rm="558786"
            image={anaImage}
            linkedin="https://www.linkedin.com/in/ana-clara-santos-moreira-066968159/"
            github="https://github.com/AnaClaraSM"
          />
          <TeamCard
            name="Guilherme Barreto Mendes"
            rm="557916"
            image={guilhermeImage}
            linkedin="https://www.linkedin.com/in/guilherme-barreto-mendes"
            github="https://github.com/GuiDecker"
          />
          <TeamCard
            name="Bento Del Santo Coutinho"
            rm="555442"
            image={bentoImage}
            linkedin="https://www.linkedin.com/in/bentocoutinho?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            github="https://github.com/drakonw4"
          />
          <TeamCard
            name="Giulia Milanez Pirolo"
            rm="557575"
            image={giuliaImage}
            linkedin="https://www.linkedin.com/in/giulia-pirolo-a018b824a/"
            github="https://github.com/Giulia-pirolo"
          />

          <TeamCard
            name="Felipe Alberto Oliveira dos Santos"
            rm="557348"
            image={felipeImage}
            linkedin="https://www.linkedin.com/in/felipe-alberto-8b01a2268"
            github="https://github.com/felipalb"
          />
        </div>
      </div>

      {/* ========================= */}

      <div className="container-faleconosco" style={contatogradientStyle}>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "70px",
          }}
        >
          <div
            className="col-sm-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  // padding: '30px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "#001131",
                }}
              >
                Tem alguma dúvida, comentário ou sugestão?
              </p>

              <div className="contato">
                <h1
                  style={{
                    fontSize: "70px",
                    color: "#001131",
                    fontWeight: "bold",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Fale Conosco
                </h1>
              </div>

              <p
                style={{
                  // padding: '30px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "#001131",
                }}
              >
                Quero ouvir o que você tem a dizer!
              </p>
            </div>
          </div>
          <div
            className="col-sm-8"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                maxWidth: "600px",
                margin: "auto",
                padding: "50px 70px",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0)",
              }}
            >
              <form>
                <div class="mb-3">
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "#00FF99",
                      textAlign: "center",
                    }}
                  >
                    VERIDIS
                  </h3>
                  <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: "bold", color: "#00FF99" }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="nameHelp"
                    style={{ backgroundColor: "#B7FFE6" }}
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label" style={{ fontWeight: "bold", color: "#00FF99" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{ backgroundColor: "#B7FFE6" }}
                  ></input>
                </div>
                <div class="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label"
                    style={{ fontWeight: "bold", color: "#00FF99" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    style={{ backgroundColor: "#B7FFE6" }}
                  ></textarea>
                </div>

                <div class="d-flex btn-color justify-content-center">
                  <button
                    class="form-control mt-3 btn btn-info btn-block btn-lg"
                    type="submit"
                    style={{
                      width: "250px",
                      height: "50px",
                      borderRadius: "10px",
                      backgroundColor: "#00FF99",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: "center", marginTop: "20px", marginBottom: "160px" }}>
        <p>VERIDIS - Todos direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
