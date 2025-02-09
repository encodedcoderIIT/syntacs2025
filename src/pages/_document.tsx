import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Primary Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="SYNTACS 2025 - International Conference on Systems, Networks, and Technical Applications in Computer Science"
          />
          <meta
            name="keywords"
            content="SYNTACS, conference, computer science, technology, 2025, systems, networks, technical applications"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="SYNTACS 2025 - International Conference"
          />
          <meta
            property="og:description"
            content="Join us at SYNTACS 2025 - International Conference on Systems, Networks, and Technical Applications in Computer Science"
          />
          <meta property="og:image" content="/og-image.png" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="SYNTACS 2025 - International Conference"
          />
          <meta
            name="twitter:description"
            content="Join us at SYNTACS 2025 - International Conference on Systems, Networks, and Technical Applications in Computer Science"
          />
          <meta name="twitter:image" content="/og-image.png" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
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
