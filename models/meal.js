class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affordability,
		complexity,
		imageUrl,
		duration,
		ingredients,
		steps,
		isGlutenFree,
		isVegan,
		isVegiterian,
		isLactoseFree
	) {
		(this.id = id),
			(this.categoryIds = categoryIds),
			(this.title = title),
			(this.imageUrl = imageUrl),
			(this.ingredients = ingredients),
			(this.steps = steps),
			(this.duration = duration),
			(this.affordability = affordability),
			(this.complexity = complexity),
			(this.isGlutenFree = isGlutenFree),
			(this.isVegan = isVegan),
			(this.isVegiterian = isVegiterian),
			(this.isLactoseFree = isLactoseFree);
	}
}

export default Meal;
