import Head from 'next/head';
import styles from '../style/styles.module.jsx';

export default function politica() {
  return (
    <>
      <Head>
        <title>Masutti</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <img className="logo" src ="https://res.cloudinary.com/dl4p8g4l6/image/upload/v1681216684/logo-masutti_agwydm.svg" alt="Logo"/>
        <h1>Política de Privacidade</h1>
        <img className='imagem' src = "https://res.cloudinary.com/dl4p8g4l6/image/upload/v1681217551/privacy-policy_hwd8lb.svg"/>
        <h2>Sua privacidade e a proteção dos seus dados pessoais importam!</h2>
        <h3>Aqui vocês, nossos parceiros, candidatos, clientes e visitantes, entenderão as nossas práticas no tocante ao tratamento dos dados pessoais compartilhados conosco a partir das suas interações de forma clara e acessível. A título de demonstrar conformidade com a Lei Geral de Proteção de Dados (LGPD), criamos um sistema seguro e transparente para tratar as suas informações.</h3>
        <p>Na MASUTTI, prezamos pela confiança depositada em nós para proteção dos seus dados pessoais, uma vez que os nossos principais valores enquanto organização são norteados pela ética, transparência, responsabilidade social e respeito ao nosso público.</p>
        <div className="button-container">
          <a className="button" href="https://drive.google.com/file/d/1rcriZMMXlbmyxYvWwXprXb-jdlvNgsAz/view">Clientes e Visitantes</a>
          <a className="button" href="https://drive.google.com/file/d/1MR415Rj3Oj9bvdsHXPis_d365tfgTE9N/view">Parceiros e Candidatos</a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
