// Hybrid Rendering (ISR)
export const revalidate = 60;

async function getNews() {
  return [
    { id: 1, title: "Breaking: Kalvium Students Master Next.js" },
    { id: 2, title: "Next.js App Router Improves Performance" },
  ];
}

export default async function NewsPage() {
  const news = await getNews();

  console.log("Revalidated every 60 seconds (ISR)");

  return (
    <div>
      <h2>Breaking News 📰</h2>
      <ul>
        {news.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <small>Page regenerates every 60 seconds</small>
    </div>
  );
}