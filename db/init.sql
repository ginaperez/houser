DROP TABLE IF EXISTS houses;
DROP TABLE IF EXISTS users;

CREATE TABLE houses 
(
    house_id SERIAL PRIMARY KEY,
    house_name TEXT NOT NULL,
    loan INTEGER NOT NULL,
    monthly_mortgage INTEGER NOT NULL,
    recommended_rent INTEGER NOT NULL,
    desired_rent INTEGER NOT NULL,
    address TEXT UNIQUE NOT NULL,
    city TEXT NOT NULL,
    image TEXT
);

CREATE TABLE users 
(
    user_id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    email TEXT NOT NULL,
);