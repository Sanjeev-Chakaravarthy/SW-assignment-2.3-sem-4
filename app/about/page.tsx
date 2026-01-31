// Static Rendering (SSG)
export const revalidate = false;

export default function AboutPage() {
  console.log("Rendered at build time (SSG)");

  return (
    <div>
      <h2>About Us</h2>
      <p>
        This page is statically generated at build time.
        It loads instantly and is cached forever.
      </p>
    </div>
  );
}