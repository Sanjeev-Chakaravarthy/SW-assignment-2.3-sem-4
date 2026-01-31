// Hybrid Rendering (ISR)
export const revalidate = 60;

async function getNews() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  console.log("News fetched using API URL:", apiUrl);

  // Mock data (safe for demo)
  return [
    { id: 1, title: "Breaking: Kalvium Students Master Next.js" },
    { id: 2, title: "Next.js App Router Improves Performance" },
  ];
}

export default async function NewsPage() {
  const news = await getNews();

  console.log("Revalidated every 60 seconds (ISR)");
  console.log("Environment:", process.env.NODE_ENV);

  return (
    <div>
      <h2>Breaking News 📰</h2>
      <ul>
        {news.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <small>Page regenerates every 60 seconds</small>
      <small>
        Environment: {process.env.NODE_ENV} | API:{" "}
        {process.env.NEXT_PUBLIC_API_URL}
      </small>
    </div>
  );
}