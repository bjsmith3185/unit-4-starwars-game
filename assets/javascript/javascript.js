
var stage = "start";

var attackPowerUser = ;
var userHP = ;

var attackPowerEnemy = ;
var enemyHP = ;





$(document).ready(function(){




    $(".character").on("click", function() {
        
        // want to select the div to be the player, move it to the beginning
// Start stage Function

        if (stage === "start") {
        var otherCharacters = $(".character").not(this);

        $(otherCharacters).detach().appendTo("#enemies-to-choose-from");

        console.log(otherCharacters);

        stage = "enemy";
        }
// Enemy stage Function

        else if (stage === "enemy")  {
        
        $("#enemies-to-choose-from").on("click", ".character", function() {
            $(this).detach().appendTo("#enemy-to-battle");
            stage = "attack";
        })
        }
                  
        });

// Attack stage Function

        // create a stage to determine when both user and enemy have been selected.
        // that stage will control when the button will be active.

    // Need to make this into a function to call with each enemy

        $("button").on("click", function() {
            if(stage === "attack");
            // get HP data from the user's selection

            // get HP data from the enemy

            // reduces the enemys HP
            enemyHP -= attackPowerUser;
            $("health-points-1").text(enemyHP);
            // reduces the users HP
            userHP -= attackPowerEnemy;
            $("health-points-2").text(userHP);

                // if statements to determine where to go next
                if (userHP <= 0) {
                    alert("You Lost....");
                  //  reset();
                } 
                if (enemyHP <= 0) {
                    alert("You Won");
                    $("#enemy-to-battle").empty();
                    stage = "2ndEnemy";
                }
        })

// 2ndEnemy stage Function

        // want to create a new stage var here called "2ndEnemy" that will operate
        // once the first enemy is defeated. it will allow the user to select another enemy
        $("#enemies-to-choose-from").on("click", ".character", function() {
            if (stage === "2ndEnemy")
            $(this).detach().appendTo("#enemy-to-battle");
            stage = "2ndEnemyAttack";
            
          // This is the attack function from above

            $("button").on("click", function() {
                if(stage === "2ndEnemyAttack");
                // get HP data from the user's selection
    
                // get HP data from the enemy
    
                // reduces the enemys HP
                enemyHP -= attackPowerUser;
                $("health-points-1").text(enemyHP);
                // reduces the users HP
                userHP -= attackPowerEnemy;
                $("health-points-2").text(userHP);
    
                    // if statements to determine where to go next
                    if (userHP <= 0) {
                        alert("You Lost....");
                      //  reset();
                    } 
                    if (enemyHP <= 0) {
                        alert("You Won");
                        $("#enemy-to-battle").empty();
                        stage = "3rdEnemy";
                    }
            })
        })
           
// 3rdEnemy stage Function

        // want to create a new stage var here called "2ndEnemy" that will operate
        // once the first enemy is defeated. it will allow the user to select another enemy
        $("#enemies-to-choose-from").on("click", ".character", function() {
            if (stage === "3rdEnemy")
            $(this).detach().appendTo("#enemy-to-battle");
            stage = "3rdEnemyAttack";
            
          // This is the attack function from above

            $("button").on("click", function() {
                if(stage === "3rdEnemyAttack");
                // get HP data from the user's selection
    
                // get HP data from the enemy
    
                // reduces the enemys HP
                enemyHP -= attackPowerUser;
                $("health-points-1").text(enemyHP);
                // reduces the users HP
                userHP -= attackPowerEnemy;
                $("health-points-2").text(userHP);
    
                    // if statements to determine where to go next
                    if (userHP <= 0) {
                        alert("You Lost....");
                      //  reset();
                    } 
                    if (enemyHP <= 0) {
                        alert("You Won the Game");
                        $("#enemy-to-battle").empty();
                        
                    }
            })
        })



    });



