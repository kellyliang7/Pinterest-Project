DROP DATABASE IF EXISTS funterest;
CREATE DATABASE funterest; 

\c funterest;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS boards;
DROP TABLE IF EXISTS pins; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    username VARCHAR,
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
(3, 'Mealprep ideas', 'Meal Prep', 'Food and Drink'),
(1, 'Coffee shops', 'coffee flatlay', 'Food and Drink');


INSERT INTO pins (users_id, boards_id, description, image_url)
VALUES
(3, 1, 'Food', 'https://cdn2.blovcdn.com/bloglovin/aHR0cCUzQSUyRiUyRmMwMjYyMDQuY2RuLnNhcG8uaW8lMkYxJTJGYzAyNjIwNCUyRmNsZC10aHVtYiUyRjE0MjY1MjI3MzAlMkY2ZDc3Yzk5NjVlMTdiMTUlMkYwZmJjZWM4MDQyNmY4ZmZiYzdmNzUzMWQzOTg3YTMyMSUyRmVsZSUyRjIwMTglMkY0MTc3NjItMS1lbmctR0JfMTYzOF8xLTQ3MHg1NDAuanBnJTNGc2l6ZSUzRHhs?checksum=7572e9e48d832b1af616395ac63aa89807ef0388&format=j'),
(1, 2, 'Minimalist apartment decor', 'https://i2.wp.com/maindekor.com/wp-content/uploads/2018/12/Minimalist-Apartment-Decor-Tour-Make-You-Happy-Life_1.jpg?w=508'),
(2, 2, 'Living Room', 'https://i.pinimg.com/originals/1d/c5/20/1dc5206439c3eb5440bda44485cb3fec.jpg'),
(3, 3, 'Spicy Chicken and Sweet Potato Bowls- Perfect for a quick meal', 'http://www.thesarcasticblonde.com/wp-content/uploads/2017/06/IMG_2999-768x1365.png'),
(3, 2, 'Indoor Jungle & Leather Couch', 'http://newdarlings.com/wp-content/uploads/2016/10/10.06.16-crop-e1475859342404.jpg'),
(1, 2, 'Plants', 'https://i.pinimg.com/564x/ac/d3/f2/acd3f29c20e456e51122cd957a596453.jpg?b=t'),
(2, 1, 'Avo Toast', 'https://static1.squarespace.com/static/591c084846c3c48239649d7e/t/5924386dbb7f1e518acc3613/1495545965571/1000w/'),
(1, 2, 'Bohemian Home', 'https://homedecorgardenmobel.cf/thumb/0wxy.jpg'),
(1, 2, 'Minimalist bedroom', 'https://homedecorgardenmobel.cf/thumb/0xgh.jpg'),
(1, 4, 'Decor', 'https://i.pinimg.com/564x/98/3e/03/983e03d5e94920ec082ca83adeb7cb1a.jpg?b=t'),
(1, 4, 'Decor', 'https://i.pinimg.com/564x/f4/f3/1d/f4f31d346b45c453a8a73a354c30f086.jpg'),
(3, 1, 'Food', 'http://wallflowerkitchen.com/wp-content/uploads/2017/04/Balsamic-Roasted-New-Potatoes-and-Asparagus-3.jpg'),
(3, 1, 'Food', 'https://www.halfbakedharvest.com/wp-content/uploads/2018/04/Cauliflower-Shawarma-Wraps-with-Green-Tahini-and-Feta-1.jpg'),
(3, 2, 'Closet', 'https://i.pinimg.com/564x/fa/bd/20/fabd20ebd99bbffe60a0d38d62b71c81.jpg'),
(2, 1, 'Food', 'https://i.pinimg.com/564x/45/4d/ca/454dcac169d62f8e387a6bd35a1d87b4.jpg'),
(2, 4, 'Waffle', 'https://i.pinimg.com/564x/e4/bf/f2/e4bff220071e7a328ebd3d1b4b27e9a9.jpg'),
(1, 2, 'Dog', 'https://i.pinimg.com/564x/26/ec/09/26ec09bc937e43fd3df33ce2787d6b80.jpg'),
(2, 1, 'Food', 'https://i.pinimg.com/564x/4c/1b/5f/4c1b5fac1d449fd9f4a748ea3a27b05c.jpg'),
(2, 1, 'Food', 'https://i.pinimg.com/564x/f0/d1/3d/f0d13dc8a47e76ec54074cfde0a0f8b3.jpg'),
(2, 2, 'Decor', 'https://i.pinimg.com/564x/45/79/87/457987f9a25759d3c2af25b344e6d130.jpg');
