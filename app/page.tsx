import Image from "next/image";
import Banner from "../components/banner.client";
import Card from "../components/card.server";

export default function Home() {
  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          <Card
            name="Starbucks"
            imageUrl="/static/hero-image.png"
            href={`/coffee-store/Starbucks`}
          />
        </div>
      </main>
    </div>
  );
}
