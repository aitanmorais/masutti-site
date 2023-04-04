import Head from 'next/head';
import styles from './styles.module.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Masutti Website</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="C:\Users\aitan.farias\Documents\GitHub\assets\logo-masutti.svg"></div>
        <h1>Lorem Ipsum</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <img className="qr-code" src="https://www.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=C:\Users\aitan.farias\Documents\GitHub\assets\masutti-politica-privacidade.pdf" alt="QR Code" />
        <a className="button" href="http://www.google.com">Lorem Ipsum</a>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
