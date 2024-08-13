import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}
