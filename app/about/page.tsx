// Static Rendering (SSG)
export const revalidate = false;

export default function AboutPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "not set";

  console.log("Rendered at build time (SSG)");
  console.log("API URL (env):", apiUrl);

  return (
    <div>
      <h2>About Us</h2>
      <p>
        This page is statically generated at build time.
        It loads instantly and is cached forever.
      </p>

      <hr />

      <p>
        <strong>Active API URL:</strong> {apiUrl}
      </p>
    </div>
  );
}