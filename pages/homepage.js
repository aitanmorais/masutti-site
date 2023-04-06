import Head from 'next/head';
import styles from '../style/styles.module.jsx';

export default function homepage() {
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
        <h2>Sua privacidade e a proteção dos seus dados pessoais importam!</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur sapien quis est consectetur, at condimentum mi mattis. In blandit venenatis efficitur. Sed pulvinar a leo ut porttitor. Donec tellus nibh, sodales at pellentesque nec, ornare quis risus. Donec facilisis magna in nisi consequat, sit amet luctus ante auctor. Donec mattis nisi non ipsum pretium, at blandit metus dignissim. Nulla placerat semper tellus quis cursus. In porttitor volutpat sem non egestas. Fusce at urna in urna accumsan molestie ac vitae tortor. Nam gravida ac diam sit amet vulputate. Proin nec metus sem. Morbi pharetra, tellus fringilla sollicitudin accumsan, velit lorem aliquam orci, eu placerat libero lectus id nunc. Donec tincidunt, elit in luctus ultrices, quam neque laoreet leo, vitae molestie erat lectus eu purus. Maecenas non ante sed leo condimentum varius. Proin dui tellus, pulvinar at condimentum vel, malesuada in mauris. Sed elementum ligula id tellus elementum suscipit.</h3>
        <div className="button-container">
          <a className="button" href="https://drive.google.com/file/d/1sRdJKNeS49P28SY2-GQCs8iNmWHgwgWl/view">Parceiros e Candidatos</a>
          <a className="button" href="https://drive.google.com/file/d/1sRdJKNeS49P28SY2-GQCs8iNmWHgwgWl/view">Clientes e Visitantes</a>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
