import { CoffeeStoreType } from "../types";
import Card from "./Card";

interface CardListProps {
  cards: CoffeeStoreType[];
}

export default function CardList({ cards }: CardListProps) {
  const cardsData = cards ? cards : [];
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
      {cardsData.map((coffeeStore: CoffeeStoreType, idx: number) => (
        <Card
          key={`${coffeeStore.name}-${coffeeStore.id}`}
          name={coffeeStore.name}
          imageUrl={coffeeStore.imageUrl}
          href={`/coffee-store/${coffeeStore.id}?id=${idx}`}
        />
      ))}
    </div>
  );
}
