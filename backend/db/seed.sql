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
    password_digest VARCHAR NOT NULL UNIQUE, 
    age INT,
    gender VARCHAR,
    country VARCHAR;
);

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id), 
    description VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    category VARCHAR NOT NULL;
);

CREATE TABLE pins (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id),
    boards_id INT REFERENCES boards(id),
    description VARCHAR NOT NULL,
    image_url VARCHAR NOT NULL;
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
(3, 'Mealprep ideas', 'Meal Prep', 'Food and Drink'),
(1, 'Coffee shops', 'coffee flatlay', 'Food and Drink');


INSERT INTO pins (users_id, boards_id, description, image_url)
VALUES
(2, 1, 'Classic dish of chicken sauteed with broccoli', 'https://www.dinneratthezoo.com/wp-content/uploads/2016/04/chicken-and-broccoli-stir-fry-6-2-683x1024.jpg'),
(1, 2, 'Minimalist apartment decor', 'https://i2.wp.com/maindekor.com/wp-content/uploads/2018/12/Minimalist-Apartment-Decor-Tour-Make-You-Happy-Life_1.jpg?w=508'),
(3, 3, 'Spicy Chicken and Sweet Potato Bowls- Perfect for a quick meal', 'http://www.thesarcasticblonde.com/wp-content/uploads/2017/06/IMG_2999-768x1365.png'),
(2, 2, 'Living Room', 'https://i.pinimg.com/originals/1d/c5/20/1dc5206439c3eb5440bda44485cb3fec.jpg'),
(3, 2, 'Indoor Jungle & Leather Couch', 'http://newdarlings.com/wp-content/uploads/2016/10/10.06.16-crop-e1475859342404.jpg'),
(1, 2, 'Bohemian Home', 'https://homedecorgardenmobel.cf/thumb/0wxy.jpg'),
(1, 2, 'Minimalist bedroom', 'https://homedecorgardenmobel.cf/thumb/0xgh.jpg'),
(1, 2, 'Plants', 'https://i.pinimg.com/564x/ac/d3/f2/acd3f29c20e456e51122cd957a596453.jpg?b=t'),
(1, 4, 'Decor', 'https://i.pinimg.com/564x/98/3e/03/983e03d5e94920ec082ca83adeb7cb1a.jpg?b=t'),
(1, 4, 'Decor', 'https://i.pinimg.com/564x/f4/f3/1d/f4f31d346b45c453a8a73a354c30f086.jpg');