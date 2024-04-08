class Meal {
  constructor(
    private id,
    private categoryIds,
    private title,
    private affordability,
    private complexity,
    private imageUrl,
    private duration,
    private ingredients,
    private steps,
    private isGlutenFree,
    private isVegan,
    private isVegetarian,
    private isLactoseFree,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
