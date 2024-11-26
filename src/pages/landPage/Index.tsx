import {
  ButtonContainer,
  DivAboutUs,
  DivImgAbout,
  DivImgProblem,
  DivProblem,
  Header,
  HeaderNav,
  HeaderSection,
  PageConatiner,
  SectionAboutUs,
  SectionProblem,
} from "./style";
import ImgHeader from "../../assets/images/img-header.svg";
import ImgProblem from "../../assets/images/img-problema.svg";

export function LandPage() {
  return (
    <PageConatiner>
      <Header>
        <HeaderNav>
          <h1>Stock Wise</h1>
          <nav>
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Problemas</a>
            <a href="">Tecnologias</a>
            <a href="">Solução</a>
          </nav>
          <ButtonContainer>
            <button>Entrar</button>
            <button>Cadastrar</button>
          </ButtonContainer>
        </HeaderNav>
        <HeaderSection>
          <h1>Bem-vindo ao sistema que simplifica a gestão de patrimônios!</h1>
          <p>
            Transforme o jeito de fazer inventários: agilidade, precisão e
            tecnologia ao seu alcance.
          </p>
          <img src={ImgHeader} alt="" />
        </HeaderSection>
      </Header>
      <SectionAboutUs>
        <h2>Sobre</h2>
        <p>
          Somos uma equipe dedicada a inovar processos tradicionais de
          inventário. Nosso sistema foi desenvolvido com foco em eficiência e
          sustentabilidade, utilizando tecnologias modernas para transformar a
          experiência de gerenciamento de patrimônios.
        </p>
      </SectionAboutUs>
      <SectionProblem>
        <DivImgProblem>
          <img src={ImgProblem} alt="" />
        </DivImgProblem>
        <DivProblem>
          <h2>Problemas</h2>
          <ul>
            <li>
              Processo manual de inventário, realizado com papel e coleta de
              assinaturas.
            </li>
            <li>Demorado, sujeito a erros e dificultava a organização. </li>
            <li>
              A falta de padronização comprometia a precisão e gerava
              retrabalho.
            </li>
          </ul>
        </DivProblem>
      </SectionProblem>
      <section>
        <h1>Tecnologias</h1>
        <div>
          <article>
            <img src="" alt="" />
            <div>
              <h6></h6>
              <p></p>
            </div>
          </article>
          <article>
            <img src="" alt="" />
            <div>
              <h6></h6>
              <p></p>
            </div>
          </article>
          <article>
            <img src="" alt="" />
            <div>
              <h6></h6>
              <p></p>
            </div>
          </article>
          <article>
            <img src="" alt="" />
            <div>
              <h6></h6>
              <p></p>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div>
          <h1></h1>
          <p></p>
        </div>
      </section>
    </PageConatiner>
  );
}
