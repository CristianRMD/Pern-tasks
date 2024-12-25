Create table Tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
);
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255)  NOT NULL,
    email   VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at Timestamp DEFAULT CURRENT_TIMESTAMP,
    updated_at Timestamp DEFAULT CURRENT_TIMESTAMP
);