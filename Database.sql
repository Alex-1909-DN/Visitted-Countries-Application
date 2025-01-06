CREATE TABLE countries (
	id SERIAL PRIMARY KEY,
	country_code VARCHAR(20),
	country_name VARCHAR(100)
);
CREATE TABLE visited_countries (
	id SERIAL PRIMARY KEY,
	country_code VARCHAR(20)
);