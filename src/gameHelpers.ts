import { CardDeck, CatData } from "./types";

/**
 * Construct a 20-card deck based on catData
 */
export const cardsConstructor = (catsObject: CatData[]): CardDeck => {
  const cards: { id: string; url: string }[] = [];

  catsObject.forEach((cat) => {
    cards.push({
      id: cat.id,
      url: cat.url,
    });
  });

  return [...cards, ...cards];
};
