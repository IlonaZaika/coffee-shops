import { NextResponse } from "next/server";
import { fetchCoffeeStores } from "@/app/lib/fetch-coffee-stores";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "Latitude and longitude are required" },
      { status: 400 }
    );
  }

  try {
    const coffeeStores = await fetchCoffeeStores(Number(lat), Number(lng));
    return NextResponse.json(coffeeStores);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch coffee stores" },
      { status: 500 }
    );
  }
}
