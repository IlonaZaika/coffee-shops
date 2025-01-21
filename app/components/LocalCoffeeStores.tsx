"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import useTrackLocation from "../hooks/useTrackLocation";
import { CoffeeStoreType } from "../types";
import CardList from "./CardList";

export default function LocalCoffeeStores() {
  const { handleTrackLocation, isFindingLocation, currentLocation } =
    useTrackLocation();
  const [coffeeStores, setCoffeeStores] = useState<CoffeeStoreType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      if (currentLocation) {
        try {
          const response = await fetch(
            `/api/coffee-stores?lat=${currentLocation.lat}&lng=${currentLocation.lng}`
          );
          const data = await response.json();
          setCoffeeStores(data);
        } catch (err) {
          setError("Failed to fetch coffee stores");
        }
      }
    };

    fetchStores();
  }, [currentLocation]);

  return (
    <div>
      <Banner
        buttonText={isFindingLocation ? "Locating..." : "View stores nearby"}
        handleOnClick={handleTrackLocation}
      />
      {error && <p className="text-red-500">{error}</p>}
      <CardList cards={coffeeStores} />
    </div>
  );
}
