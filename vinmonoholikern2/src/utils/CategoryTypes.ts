import { Dropdown } from "../interfaces/UtilityInterfaces";

const beer: Dropdown = {
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

const wine: Dropdown = {
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

const spirit: Dropdown = {
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

const alcoholFree: Dropdown = {
  name: "Alkoholfri",
  subCategories: [
    "Alkoholfri musserende drikk",
    "Alkoholfri vin",
    "Alkoholfritt øl"
  ]
}; // 3

const champagne: Dropdown = {
  name: "Champagne",
  subCategories: [
    "Champagne extra brut",
    "Champagne, annen",
    "Champagne, brut",
    "Champagne, rosé",
    "Champagne, sec"
  ]
}; // 5

const other: Dropdown = {
  name: "Annet",
  subCategories: ["Mjød", "Sake", "Sider"]
}; // 3

export const productDropdownList: Dropdown[] = [
  spirit,
  wine,
  beer,
  champagne,
  other,
  alcoholFree
];

export const productTypes = [
  "Akevitt",
  "Portvin",
  "Vodka",
  "Druebrennevin",
  "Whisky",
  "Likør",
  "Genever",
  "Gin",
  "Bitter",
  "Fruktbrennevin",
  "Vermut",
  "Aromatisert vin",
  "Brennevin, annet",
  "Sherry",
  "Rødvin",
  "Hvitvin",
  "Perlende vin, rosé",
  "Rosévin",
  "Champagne, brut",
  "Champagne, sec",
  "Musserende vin, rosé",
  "Champagne, rosé",
  "Musserende vin",
  "Perlende vin, rød",
  "Porter & stout",
  "Perlende vin, hvit",
  "Rom",
  "Klosterstil",
  "India pale ale",
  "Spesial",
  "Mørk lager",
  "Saison farmhouse ale",
  "Hveteøl",
  "Pale ale",
  "Lys ale",
  "Sterkvin, annen",
  "Barley wine",
  "Fruktvin",
  "Sider",
  "Lys lager",
  "Brown ale",
  "Alkoholfri musserende drikk",
  "Champagne extra brut",
  "Sake",
  "Surøl",
  "Madeira",
  "Alkoholfritt øl",
  "Red/amber",
  "Mjød",
  "Brennevin, nøytralt < 37,5 %",
  "Champagne, annen",
  "Scotch ale",
  "Alkoholfri vin"
].sort();
