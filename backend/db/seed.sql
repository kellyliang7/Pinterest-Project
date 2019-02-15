DROP DATABASE IF EXISTS funterest;
CREATE DATABASE funterest; 

\c funterest;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS boards;
DROP TABLE IF EXISTS pins; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    username VARCHAR NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL, 
    age INT,
    gender VARCHAR,
    country VARCHAR
);

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id), 
    description VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    category VARCHAR NOT NULL
);

CREATE TABLE pins (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id),
    boards_id INT REFERENCES boards(id),
    description VARCHAR NOT NULL,
    image_url VARCHAR NOT NULL
);

INSERT INTO users (email, username, password_digest, age, gender, country)
VALUES 
('danlijohn@gmail.com', 'danli', 'abcd', 22, 'Female', 'United States of America'),
('hasaniarnold10@gmail.com', 'hasaniarnold', 'efgh', 22, 'Male', 'United States of America'),
('mbkim@gmail.com', 'mbkimchi', '1234', 24, 'Male','United States of America');

INSERT INTO boards (users_id, description, title, category)
VALUES 
(2, 'Recipe ideas for lunch', 'Chicken Recipes', 'Food and Drink'), 
(1, 'Bedroom Decor Inspiration', 'Bedroom Decor', 'Home Decor'),
(3, 'Mealprep ideas', 'Meal Prep', 'Food and Drink');

INSERT INTO pins (users_id, boards_id, description, image_url)
VALUES
(2, 1, 'Classic dish of chicken sauteed with broccoli', 'https://www.dinneratthezoo.com/wp-content/uploads/2016/04/chicken-and-broccoli-stir-fry-6-2-683x1024.jpg'),
(1, 2, 'Minimalist apartment decor', 'https://i2.wp.com/maindekor.com/wp-content/uploads/2018/12/Minimalist-Apartment-Decor-Tour-Make-You-Happy-Life_1.jpg?w=508'),
(3, 3, 'Spicy Chicken and Sweet Potato Bowls- Perfect for a quick meal', 'http://www.thesarcasticblonde.com/wp-content/uploads/2017/06/IMG_2999-768x1365.png');