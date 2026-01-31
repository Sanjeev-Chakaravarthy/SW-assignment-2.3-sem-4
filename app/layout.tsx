export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', padding: 20 }}>
        <h1>Kalvium – Advanced Rendering Demo</h1>
        <nav style={{ display: 'flex', gap: 16 }}>
          <a href="/">Home</a>
          <a href="/about">About (SSG)</a>
          <a href="/dashboard">Dashboard (SSR)</a>
          <a href="/news">News (ISR)</a>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}