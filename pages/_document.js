import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
  --main-color: #516163;
  --secondary-color: #63B2BB;

  body {
    color: var(--main-color);
    font-family: 'PT Sans';
    font-size: 22px;
    font-weight: 300;
    line-height: 36px;
  }

  h1 {
    color: #323B3C;
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
    color: #323B3C;
  }
`;

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          <title>gist viewer</title>
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
          {styleTags}
        </Head>

        <body>
          <div className="root">
            {main}
          </div>

          <NextScript />
        </body>
      </html>
    );
  }
}
