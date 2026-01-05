import veggies from "../media/vegetables.jpeg"
import fruits from "../media/fruits.jpeg"
import dairy from "../media/dairy.jpeg"
import beverages from "../media/drink.jpeg"
import grains from "../media/grain.jpeg"
import offsale from "../media/offer.jpeg"

export const category = [
  {
    id: "01",
    img: veggies,
    title: "Vegetables",
    route: "/vegetables",
  },
  {
    id: "02",
    img: fruits,
    title: "Fruits",
    route: "/fruits",
  },
  {
    id: "03",
    img: dairy,
    title: "Dairy Products",
    route: "/dairy",
  },
  {
    id: "04",
    img: beverages,
    title: "Beverages",
    route: "/beverages",
  },
  {
    id: "05",
    img: grains,
    title: "Grains",
    route: "/grains",
  },
  {
    id: "06",
    img: offsale,
    title: "Hurry Up",
    route: "/discount"
  },
];