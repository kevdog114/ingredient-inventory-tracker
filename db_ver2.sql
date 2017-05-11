USE inventory;

ALTER TABLE ingredient ADD amount	DOUBLE NULL;

ALTER TABLE recipe ADD source VARCHAR(255) NULL;
ALTER TABLE recipe ADD servings INT NULL;
ALTER TABLE recipe ADD difficulty ENUM('EASY', 'MEDIUM', 'HARD') NULL;
ALTER TABLE recipe ADD total_time_min INT NULL;
ALTER TABLE recipe_ingredient_assoc ADD unit VARCHAR(25) NULL;
