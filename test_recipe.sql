use inventory;

INSERT INTO ingredient(title, amount_type, amount) SELECT 'Pork Tenderloin', 'CONTAINERS', 4;
INSERT INTO ingredient(title, amount_type, amount) SELECT 'Mrs. Dash Seasoning', 'BULK', 2;
INSERT INTO recipe(title, source, servings, difficulty, total_time_min)
	SELECT 'Pork Tenderloin with Seasoned Rub', 'http://www.foodnetwork.com/recipes/ellie-krieger/pork-tenderloin-with-seasoned-rub-recipe', 4, 'EASY', 35;
INSERT INTO recipe_ingredient_assoc(recipe_id, ingredient_id, amount, unit) SELECT 1, 1, 1, 'Count';
INSERT INTO recipe_ingredient_assoc(recipe_id, ingredient_id, amount, unit) SELECT 1, 2, null, null;
INSERT INTO recipe_step(recipe_id, step_num, direction)
	SELECT 1, 1, 'Preheat the oven to 450 degrees F.';

INSERT INTO recipe_step(recipe_id, step_num, direction)
	SELECT 1, 2, 'In separate bowl mix dry ingredients such as garlic powder, oregano, cumin, coriander, thyme and salt. Stir mixture with a fork until all the ingredients are well combined and they form a seasoning. This will be used as a rub to ensure the pork is well seasoned throughout. Sprinkle the rub over the tenderloin with a dry hand, then rub the pork with the seasoning over both sides of the meat, pressing gently so the seasoning adheres well to the tenderloin.';

INSERT INTO recipe_step(recipe_id, step_num, direction)
	SELECT 1, 3, 'In a large skillet over medium-high heat, add the olive oil and heat. Add the minced garlic and saute, stirring, for 1 minute. Put tenderloin in the pan and cook for about 10 minutes, searing each side using tongs to turn the meat. Transfer meat to a roasting pan and bake for 20 minutes. Slice and serve.';
