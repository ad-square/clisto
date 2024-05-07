interface Store {
  id: number;
  title: string;
  location: string;
  logoImgUrl: string;
  bannerImgUrl: string;
}

export const stores = [
  {
    id: 1,
    title: "Fashionista",
    location: "New York",
    logoImgUrl: "https://picsum.photos/200",
    bannerImgUrl: "https://picsum.photos/500/200",
  },
  {
    id: 2,
    title: "ElectroMart",
    location: "San Francisco",
    logoImgUrl: "https://picsum.photos/97",
    bannerImgUrl: "https://picsum.photos/500/200",
  },
  {
    id: 3,
    title: "GroceryKing",
    location: "Chicago",
    logoImgUrl: "https://picsum.photos/30",
    bannerImgUrl: "https://picsum.photos/500/200",
  },
  {
    id: 4,
    title: "FurnitureLand",
    location: "Los Angeles",
    logoImgUrl: "https://picsum.photos/45",
    bannerImgUrl: "https://picsum.photos/500/200",
  },
  {
    id: 5,
    title: "TechSpot",
    location: "Seattle",
    logoImgUrl: "https://picsum.photos/198",
    bannerImgUrl: "https://picsum.photos/500/200",
  },
];
