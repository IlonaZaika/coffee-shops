// app/coffee-history/page.tsx
import React from "react";

export default function CoffeeHistory() {
  return (
    <main className="px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        The History of Coffee
      </h1>
      <section className="text-lg leading-7 text-gray-800">
        <p>
          Coffee is one of the world's most beloved beverages, with a history
          that dates back to the 15th century. It is believed to have originated
          in Ethiopia, where the coffee plant was first discovered. Legend has
          it that a goat herder named Kaldi noticed his goats becoming unusually
          energetic after eating the berries of a certain plant.
        </p>
        <p className="mt-4">
          By the 16th century, coffee had spread to the Arabian Peninsula, where
          it became a popular drink in Yemen. The first coffeehouses, known as
          qahveh khaneh, appeared in cities like Mecca and Istanbul, serving as
          places for social interaction, discussion, and entertainment.
        </p>
        <p className="mt-4">
          Today, coffee is a global phenomenon, cultivated in over 70 countries
          and enjoyed by millions daily. From traditional methods to modern
          brewing techniques, coffee continues to evolve, uniting people from
          diverse cultures over a shared love for this timeless beverage.
        </p>
      </section>
    </main>
  );
}
