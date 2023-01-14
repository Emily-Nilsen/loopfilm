import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased bg-white" lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/ywa8vue.css" />
      </Head>
      <body className="flex flex-col h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
