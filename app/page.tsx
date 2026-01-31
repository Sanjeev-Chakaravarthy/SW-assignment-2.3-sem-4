export default function Home() {
  const env = process.env.NODE_ENV || "unknown";
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "not set";

  console.log("Home page rendered in environment:", env);

  return (
    <main>
      <h2>Welcome 👋</h2>
      <p>
        This project demonstrates Static, Dynamic, and Hybrid rendering
        using Next.js App Router.
      </p>

      <hr />

      <p>
        <strong>Environment:</strong> {env}
      </p>
      <p>
        <strong>API URL:</strong> {apiUrl}
      </p>
    </main>
  );
}