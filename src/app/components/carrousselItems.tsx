// carrousselItems.ts
const carouselItems = [
  {
    name: "Saison des fêtes",
    description: "Profitez des meilleures offres pour la saison des fêtes",
    image: "/moto.jpg",
  },
  {
    name: "Black Friday",
    description: "Profitez des meilleures offres du Black Friday",
    image: "/vache.jpg",
  },
  {
    name: "Qualité au rendez-vous",
    description: "Profitez des meilleurs articles à des prix raisonnables",
    image: "/loup.jpg",
  },
];

export default function getCarouselItems() {
  return carouselItems;
}
