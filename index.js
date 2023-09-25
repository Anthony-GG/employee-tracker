const mysql = require('mysql2');
const inquirer = require('inquirer');


let logo =`                                                                                       
-----------------------------------------------------------------------------------------------------                                            
            .7MM"""YMM                               .7MM                                             
            MM    .7                                 MM                                             
            MM   d    .7MMpMMMb.pMMMb.  .7MMpdMAo.   MM   ,pW"Wq.  .7M'   .MF' .gP"Ya   .gP"Ya      
            MMmmMM      MM    MM    MM    MM   .Wb   MM  6W'   .Wb   VA   ,V  ,M'   Yb ,M'   Yb     
            MM   Y  ,   MM    MM    MM    MM    M8   MM  8M     M8    VA ,V   8M"""""" 8M""""""     
            MM     ,M   MM    MM    MM    MM   ,AP   MM  YA.   ,A9     VVV    YM.    , YM.    ,     
            .JMMmmmmMMM .JMML  JMML  JMML.  MMbmmd'  .JMML. .Ybmd9'      ,V      .Mbmmd'  .Mbmmd'     
                                            MM                          ,V                            
                                        .JMML.                     OOb"                             
                                                                                                    
                                                                                                    
            MMP""MM""YMM                            .7MM                                              
            P'   MM   .7                              MM                                              
                MM      .7Mb,od8  ,6"Yb.   ,p6"bo    MM  ,MP' .gP"Ya  .7Mb,od8                       
                MM        MM' "' 8)   MM  6M'  OO    MM ;Y   ,M'   Yb   MM' "'                       
                MM        MM      ,pm9MM  8M         MM;Mm   8M""""""   MM                           
                MM        MM     8M   MM  YM.    ,   MM .Mb. YM.    ,   MM                           
            .JMML.    .JMML.   .Moo9^Yo. YMbmd'  .JMML. YA. .Mbmmd. .JMML.
-----------------------------------------------------------------------------------------------------                                                                                                             
`

console.log(logo);

promptUser();


//Purpose: To ask the which function they want to perform, loops after performing unless user chooses to exit
//Parameters: Inputs from the user using arrow keys on a list
//Returns: function, a decision to perform a function with aid from MYSQL
function promptUser(){

    // create the connection to database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'vinny123',
        database: 'company_db'
    });

    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: [new inquirer.Separator(), "view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "exit"],
            name: 'function',
        },
    ])
    .then((answers) => {
        // Initilizes variables corresponding to each of the input responses for readability sake
        var choice = answers.function;

        switch(choice){

            case "view all departments":
                viewAllTables("department", connection)
            break;

            case "view all roles":
                viewAllTables("role", connection)
            break;

            case "view all employees":
                viewAllTables("employee", connection)
            break;

            case "exit":
                process.exit();
            break;

            default:
                process.exit();
            break;
        }
    });
}



//Purpose: to return all data from a MYSQL table using MYSQL2 in a readable table format in the console
//Parameters: tableName, the name of the table it's retrieving the data from
            //connection, the connection to the database using MYSQL2
//Returns: a console.table function with data from the requested table
function viewAllTables(tableName, connection){


    connection.execute(
        `SELECT * from ${tableName}`, function(err, results){
            switch(tableName){
                case "department":
                    console.table(results, ["id", "name"]);
                break;

                case "role":
                    connection.execute(
                        `SELECT r.id, r.title, r.salary, d.name AS department FROM role r
                        LEFT JOIN department d ON r.department_id = d.id`,
                        function (err, roleResults) {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            console.table(roleResults, ["id", "title", "salary", "department"]);
                            promptUser();
                        }
                    );
                break;

                case "employee":
                    console.table(results, ["id", "first_name", "last_name", "role_id", "manager_id"]);
                break;

                default:
                    console.table(results);
                break;
            }

            //Closes connection so mySQL2 doesn't throw a fit and the program continues
            connection.end();

            //Prompts the user again now that the requested information has delivered
            promptUser();
        }
    )
}