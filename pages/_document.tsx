import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
            rel="stylesheet"
          />
          <meta
            name="title"
            content="Mathletes - Douglas Memorial H.S. School"
          />
          <meta
            name="description"
            content="Douglas Memorial H.S. School presents to you Mathletes, a fun filled two day inter-school event revolving around the beautiful world of maths!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mathletes.dmhss.org/" />
          <meta
            property="og:title"
            content="Mathletes - Douglas Memorial H.S. School"
          />
          <meta
            property="og:description"
            content="Douglas Memorial H.S. School presents to you Mathletes, a fun filled two day inter-school event revolving around the beautiful world of maths!"
          />
          <meta
            property="og:image"
            content="https://billboard.srmkzilla.net/api/blog?title=Mathletes&subtitle=Douglas%20Memorial%20H.S.%20School&theme=dark&fontSize=180px"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://mathletes.dmhss.org/" />
          <meta
            property="twitter:title"
            content="Mathletes - Douglas Memorial H.S. School"
          />
          <meta
            property="twitter:description"
            content="Douglas Memorial H.S. School presents to you Mathletes, a fun filled two day inter-school event revolving around the beautiful world of maths!"
          />
          <meta
            property="twitter:image"
            content="https://billboard.srmkzilla.net/api/blog?title=Mathletes&subtitle=Douglas%20Memorial%20H.S.%20School&theme=dark&fontSize=180px"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
