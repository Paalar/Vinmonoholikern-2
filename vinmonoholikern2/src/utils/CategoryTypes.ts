import { Dropdown } from "../interfaces/UtilityInterfaces";

const BeerCategories: Dropdown = {
  name: "Øl",
  subCategories: [
    "Barley wine",
    "Brown ale",
    "Hveteøl",
    "India pale ale",
    "Klosterstil",
    "Lys ale",
    "Lys lager",
    "Mørk lager",
    "Pale ale",
    "Porter & stout",
    "Red/amber",
    "Saison farmhouse ale",
    "Scotch ale",
    "Spesial",
    "Surøl"
  ]
}; // 15

const WineCategories: Dropdown = {
  name: "Vin",
  subCategories: [
    "Aromatisert vin",
    "Fruktvin",
    "Hvitvin",
    "Madeira",
    "Musserende vin",
    "Musserende vin, rosé",
    "Perlende vin, hvit",
    "Perlende vin, rosé",
    "Perlende vin, rød",
    "Portvin",
    "Rosévin",
    "Rødvin",
    "Sherry",
    "Sterkvin, annen",
    "Vermut"
  ]
}; // 15

const SpiritCategories: Dropdown = {
  name: "Brennevin",
  subCategories: [
    "Akevitt",
    "Bitter",
    "Brennevin annen",
    "Brennevin, nøytralt < 37,5 %",
    "Druebrennevin",
    "Fruktbrennevin",
    "Genever",
    "Gin",
    "Likør",
    "Rom",
    "Vodka",
    "Whisky"
  ]
}; // 12

const AlcoholFreeCategories: Dropdown = {
  name: "Alkoholfri",
  subCategories: [
    "Alkoholfri musserende drikk",
    "Alkoholfri vin",
    "Alkoholfritt øl"
  ]
}; // 3

const ChampagneCategories: Dropdown = {
  name: "Champagne",
  subCategories: [
    "Champagne extra brut",
    "Champagne, annen",
    "Champagne, brut",
    "Champagne, rosé",
    "Champagne, sec"
  ]
}; // 5

const OtherCategories: Dropdown = {
  name: "Annet",
  subCategories: ["Mjød", "Sake", "Sider"]
}; // 3

const productDropdownList: Dropdown[] = [
  SpiritCategories,
  WineCategories,
  BeerCategories,
  ChampagneCategories,
  OtherCategories,
  AlcoholFreeCategories
];

export default productDropdownList;
