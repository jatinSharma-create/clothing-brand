import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

// Mock user ID for development
const MOCK_USER_ID = "user_dev_123";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!MOCK_USER_ID) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const store = await prismadb.store.create({
      data: {
        name,
        userId: MOCK_USER_ID,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    if (!MOCK_USER_ID) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const stores = await prismadb.store.findMany({
      where: {
        userId: MOCK_USER_ID,
      },
    });

    return NextResponse.json(stores);
  } catch (error) {
    console.log("[STORES_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
