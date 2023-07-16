

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} · ${siteName}` : siteName}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  )
}
