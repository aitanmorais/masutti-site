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
        <img className="logo" src ="https://raw.githubusercontent.com/aitanmorais/masutti-website/b24cd0bcaf28b5f31c9d220b46e431bef9852b62/assets/logo-masutti-branca.svg" alt="Logo"/>
        <h1>Política de Privacidade</h1>
        <img className='imagem' src = "https://raw.githubusercontent.com/aitanmorais/masutti-website/435886fc9a0874251066a3835bc7f32ce329ec94/assets/privacy-policy.svg"/>
        <h2>Sua privacidade e a proteção dos seus dados pessoais importam!</h2>
        <h3>Aqui vocês, nossos parceiros, candidatos, clientes e visitantes, entenderão as nossas práticas no tocante ao tratamento dos dados pessoais compartilhados conosco a partir das suas interações de forma clara e acessível. A título de demonstrar conformidade com a Lei Geral de Proteção de Dados (LGPD), criamos um sistema seguro e transparente para tratar as suas informações.</h3>
        <p>Na MASUTTI, prezamos pela confiança depositada em nós para proteção dos seus dados pessoais, uma vez que os nossos principais valores enquanto organização são norteados pela ética, transparência, responsabilidade social e respeito ao nosso público.</p>
        <div className="button-container">
          <a className="button" href="https://masutticombr-my.sharepoint.com/:b:/g/personal/aitan_farias_masutti_com_br/EezmuGOOjjFEpHShz-y3L48Bst5wHrAyF4cFgzXzXFle6Q?e=dnrRnU">Clientes e Visitantes</a>
          <a className="button" href="https://masutticombr-my.sharepoint.com/:b:/g/personal/aitan_farias_masutti_com_br/EREVAuN0_p9JnJb_jOcUGW0BHx5e4Zo8wy5ouszglEzjoQ?e=HWWFvS">Parceiros e Candidatos</a>
          <a className="button" href="https://masutticombr-my.sharepoint.com/:b:/g/personal/aitan_farias_masutti_com_br/EQP_o6N_jX1GtJZrTjkFnkIBGOztPDLirYEMQhDlBhh9LQ?e=hWebEQ">Cartilha LGPD</a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
