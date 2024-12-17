import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
                     
                      var fontLink = document.createElement('link');
                      fontLink.rel = 'stylesheet';
                      fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap';
                      document.head.appendChild(fontLink);
                    })();`,
          }}
        ></script>
        {/* <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" /> */}
        <link rel="icon" href="/icons/logo.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
