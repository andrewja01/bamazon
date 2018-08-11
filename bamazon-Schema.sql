DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(250) NOT NULL,
    department_name VARCHAR(250) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sega Genesis", "Video Game Consoles", 49.95, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Classic", "Video Game Consoles", 59.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gameboy Classic", "Video Game Consoles", 9.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hiking Backpack", "Camping & Hiking", 32.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sleeping Bag", "Camping & Hiking", 79.50, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Google Home", "Electronics", 99.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("4k TV", "Electronics", 1998.98, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bluetooth Speaker", "Electronics", 19.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BT Headphones", "Electronics", 229.95, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Steamer", "Household", 49.95, 10);

SELECT * FROM products;