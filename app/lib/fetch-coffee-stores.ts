// Yelp API integration

import { CoffeeStoreType } from "../types";

const API_KEY = process.env.YELP_API_KEY; // Store API key in .env.local

export async function fetchCoffeeStores(
  lat: number,
  lng: number
): Promise<CoffeeStoreType[]> {
  const url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${lng}&term=coffee&radius=5000`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch coffee stores");
  }

  const data = await response.json();

  return data.businesses.map((business: any) => ({
    id: business.id,
    name: business.name,
    imageUrl: business.image_url,
    href: `/coffee-store/${business.id}`,
  }));
}
