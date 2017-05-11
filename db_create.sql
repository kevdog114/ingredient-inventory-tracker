USE inventory;

CREATE TABLE ingredient
(
	ingredient_id 		INT	NOT NULL AUTO_INCREMENT,
	title			VARCHAR(200),
	amount_type		ENUM('CONTAINERS', 'BULK'),
	PRIMARY KEY(ingredient_id)
);

CREATE TABLE recipe
(
	recipe_id		INT	NOT NULL AUTO_INCREMENT,
	title			VARCHAR(200),
	PRIMARY KEY(recipe_id)
);

CREATE TABLE recipe_ingredient_assoc
(
	recipe_id 		INT	NOT NULL,
	ingredient_id 		INT	NOT NULL,
	amount 			DOUBLE	NOT NULL,
	PRIMARY KEY(recipe_id, ingredient_id),
	FOREIGN KEY(recipe_id)		REFERENCES recipe(recipe_id),
	FOREIGN KEY(ingredient_id)	REFERENCES ingredient(ingredient_id)
);

CREATE TABLE recipe_step
(
	recipe_id		INT	NOT NULL,
	step_num		INT	NOT NULL,
	direction		TEXT	NOT NULL,
	PRIMARY KEY(recipe_id, step_num),
	FOREIGN KEY(recipe_id)		REFERENCES recipe(recipe_id)
);
