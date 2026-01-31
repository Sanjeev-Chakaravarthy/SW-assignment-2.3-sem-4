import { NextResponse } from 'next/server';

export async function GET() {
  const env = process.env.NODE_ENV || "unknown";
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "not set";

  console.log("API called in environment:", env);
  console.log("API URL (env):", apiUrl);

  return NextResponse.json({
    environment: env,
    apiUrl,
    activeUsers: Math.floor(Math.random() * 1000),
    time: new Date().toISOString(),
  });
}