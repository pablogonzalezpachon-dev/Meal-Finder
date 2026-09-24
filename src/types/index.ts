export type Category = {
  strCategory: string;
};

export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type SearchForm = {
  search: string;
};

export type MealDetails = {
  [key: string]: string;
};
// Va a existir un objeto MealDetails que va a contener propiedades string,
// y van a valer strings

// Un objeto dinamico (no es lo que nosotros deberiamos de hacer)
