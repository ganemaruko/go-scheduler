export type ProductId = "beer" | "wine" | "cocktail";

export const PRODUCT_PRICE: { [key in ProductId]: number } = {
  beer: 290,
  wine: 800,
  cocktail: 1500,
};

export const PRODUCT_DISPLAY_NAME: { [key in ProductId]: string } = {
  beer: "ビール",
  wine: "ワイン",
  cocktail: "カクテル",
};
