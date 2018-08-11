var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
var seperator = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Andy123",
    database: "bamazon_db"
});

connection.connect(function (err, res) {
    if (err) throw err;
    console.log('connected as id: ' + connection.threadId);
    displayTable();

});

function displayTable() {
    var inventory = "SELECT * FROM products"
    connection.query(inventory, function (err, res) {
        var table = new Table({
            head: ['Item Id', 'Product', 'Department', 'Price', 'Quantity'],
            style: {
                head: [],
            },
            colAligns: ['middle', 'left', 'middle', 'left', 'middle'],

        })
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
        }
        console.log(table.toString());
        productSelect();
    });
};

function productSelect() {
    inquirer
        .prompt([
            {
                name: 'Product_ID',
                type: 'input',
                message: 'What is the id of the item you would like to purchase?',
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: 'Units',
                type: 'input',
                message: 'How many units would you like to buy?',
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            var answerId = answer.Product_ID;
            var answerUnits = answer.Units;

            var query1 = "SELECT product_name, price, item_id, stock_quantity FROM products WHERE item_id = ?"
            connection.query(query1, answerId, function (err, res) {
                var selectedProduct = res[0].product_name;
                var selectedPrice = res[0].price;
                var selectedId = res[0].item_id;
                var selectedAmt = res[0].stock_quantity;
                var newQuantity = res[0].stock_quantity - answerUnits;

                if (answerUnits > selectedAmt) {
                    console.log(seperator);
                    console.log("\nInsufficient Quantity!!");
                    console.log("\n" + seperator);

                    return displayTable();
                } else
                    var query2 = "UPDATE products SET ? WHERE ?"
                connection.query(query2,
                    [{
                        stock_quantity: newQuantity
                    }, {
                        item_id: answerId
                    }],
                    function (err, res) {
                        console.log(seperator);
                        console.log("\nYou purchased a total of " + answerUnits + " " + selectedProduct + "'s");
                        console.log("\nFor a total price of  " + "$" + (selectedPrice * answerUnits).toFixed(2));
                        console.log("\n" + seperator)

                        inquirer
                            .prompt([
                                {
                                    name: 'More',
                                    type: 'confirm',
                                    message: 'Would you like to purchase any additional items?',
                                    default: "true"
                                }])
                            .then(function (answer) {
                                
                                if (answer.More === true) {
                                    return displayTable();
                                } else
                                    console.log("Thank You!")
                                return connection.end();
                            });
                    }
                );
            });
        });
};

//displayTable();

