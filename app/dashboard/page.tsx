export const dynamic = 'force-dynamic';

async function getMetrics() {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const res = await fetch(`${apiUrl}/api/metrics`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function DashboardPage() {
  const data = await getMetrics();

  console.log("Rendered on every request (SSR)");

  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Active Users: {data.activeUsers}</p>
      <p>Server Time: {data.time}</p>
    </div>
  );
}