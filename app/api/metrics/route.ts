import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    activeUsers: Math.floor(Math.random() * 1000),
    time: new Date().toISOString(),
  });
}