const mysql = require('mysql2');
const inquirer = require('inquirer');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vinny123',
  database: 'company_db'
});

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

            break;

            case "exit":
                process.exit();
            break;
            
            default:
                promptUser();
                break;
        }
    });
    promptUser();
}
