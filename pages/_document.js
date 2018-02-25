import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
  :root {
    --main-color: #516163;
    --secondary-color: #63B2BB;
    --black-color: #323B3C;
  }

  body {
    color: var(--main-color);
    font-family: 'PT Sans';
    font-size: 18px;
    font-weight: 300;
    line-height: 2em;
  }

  h1 {
    color: var(--black-color);
    font-family: 'PT Sans Narrow';
    font-weight: 400;
  }

  p {
    margin-bottom: 36px;
  }

  a {
    color: var(--secondary-color);
  }

  a:hover {
    color: var(--black-color);
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>flight search</title>
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,900"
            rel="stylesheet"
            type="text/css"
          />
          {this.props.styleTags}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
