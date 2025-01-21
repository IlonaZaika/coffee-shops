// app/about/page.tsx
import React from "react";

export default function About() {
  return (
    <main className=" bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        About CoffeeConnoisseur
      </h1>
      <p className="text-lg leading-7 text-gray-800">
        Welcome to <strong>CoffeeConnoisseur</strong>, your ultimate destination
        for exploring local coffee shops and discovering the rich history of
        coffee culture. Our mission is to help coffee lovers find the best
        coffee experiences around the world while celebrating the craft and
        artistry of coffee making.
      </p>
      <p className="text-lg leading-7 text-gray-800 mt-4">
        Whether you're a casual coffee drinker or a passionate connoisseur, our
        app provides a curated selection of coffee shops, complete with reviews,
        photos, and location details.
      </p>
    </main>
  );
}
