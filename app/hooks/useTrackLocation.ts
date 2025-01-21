"use client";

import { useState } from "react";

export default function useTrackLocation() {
  const [locationErrorMsg, setLocationErrorMsg] = useState<string | null>(null);
  const [isFindingLocation, setIsFindingLocation] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by your browser");
      return;
    }

    setIsFindingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsFindingLocation(false);
      },
      (error) => {
        setLocationErrorMsg(error.message);
        setIsFindingLocation(false);
      }
    );
  };

  return {
    handleTrackLocation,
    isFindingLocation,
    currentLocation,
    locationErrorMsg,
  };
}
