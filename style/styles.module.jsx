const styles = `
  .logo {
    display: inline-block;
    height: 32px;
    width: 250px;
  }

   body {
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;
    background-color: #125060;
  }

  h1 {
    display: inline-block;
    font-size: 32px;
    font-weight: normal;
    color: #fff;
    margin-top: 0 auto;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 24px;
    font-weight: normal;
    color: #fff;
    margin-top: 0 auto;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: left;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: left;
  }

  .qr-code {
    display: block;
    margin-bottom: 0 auto;
    height: 300px;
    width: 300px;
  }

    .button-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 600px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    
    .button {
      padding: 12px 24px;
      font-size: 20px;
      font-weight: bold;
      background-color: #fff;
      color: #125060;
      border-radius: 8px;
      text-decoration: none;
      margin: 16px;
    }
    
    @media (max-width: 780px) {
      .button-container {
        flex-wrap: wrap;
        justify-content: center;
      }
      .button {
        margin: 16px;
      }
    }
    
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #125060;
  }
`;

export default styles;
