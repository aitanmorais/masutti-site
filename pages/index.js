import Head from 'next/head';
import styles from '../style/styles.module.jsx';
import { useRouter } from 'next/router.js';

export default function Home() {
  const router = useRouter();

  const handleSaibaMaisClick = (event) => {
    event.preventDefault();
    router.push('/politica');
  }

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
        <img className="qr-code" src="https://www.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=https://www.masutti.com.br/politica" alt="QR Code" />
        <h2>Sua privacidade e a proteção dos seus dados pessoais importam!</h2>
        <a className="button" href="#" onClick={handleSaibaMaisClick}>Saiba mais</a>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
