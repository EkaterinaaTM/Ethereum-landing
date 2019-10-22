import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet>
      <script
        src="https://kit.fontawesome.com/fe4f036823.js"
        crossorigin="anonymous"
      ></script>
      <meta charSet="utf-8" />
      <base href="/" />
      <title>Ethereum</title>
      <meta name="Description" content="Ethereum - decentralized open source, public, blockchain-based distributed computing platform for money." />
      <meta property="og:title" content="Ethereum" />
      <meta
        property="og:description"
        content="Ethereum - decentralized open source, public, blockchain-based distributed computing platform for money."
      />
      {/* <meta property="og:image" content="https://something.io/cover.jpeg" /> */}

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon.png"
      />
      {/* <link rel="manifest" href="/favicon/manifest.json"/> */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/favicon.png"
      />
      <meta name="theme-color" content="#ffffff" />
      <script>let pos</script>
    </Helmet>
  )
}

export default Head
