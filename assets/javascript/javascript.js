
var stage = "start";

var attackPowerUser; // global to keep the users info ongoing
var userHP;// global to keep the users info ongoing

//var attackPowerEnemy;// should these be global
//var enemyHP;// should these be global


$(document).ready(function(){

// reset function()-----------------------------------------------

function reset() {  // maybe add a timer
    stage = "start";
    $(".character").detach().appendTo("#character-images-top");
    //alert("Select your player but clicking on the image you choose");
}
reset();  // why does this run before the html/css?
//----------------------------------------------------------------

    

          
// Start stage Function ---------------------------------------------------     
        // want to select the div to be the player, the remaining will 
        // be moved to the div below.
            
    
        $(".character").on("click", function() {
        if (stage === "start") {
            var otherCharacters = $(".character").not(this);
            $(otherCharacters).detach().appendTo("#enemies-to-choose-from");
                console.log(otherCharacters); // check the location of the enemies in the array
            // alert("Select you first enemy by clicking on the image you choose");
            stage = "enemy";
        }
// Enemy stage Function---------------------------------------------------
        // want to choose the enemy to attack first

        else if (stage === "enemy")  {
            
            $("#enemies-to-choose-from").on("click", ".character", function() {
            $(this).detach().appendTo("#enemy-to-battle");
            stage = "attack";
            })
        }
        // this ends the first .on click function, next is the attack .on click
        });

// Attack stage Function----------------------------------------------------

        // create a stage to determine when both user and enemy have been selected.
        // that stage will control when the button will be active.

    // **** Need to make this into a function to call with each enemy, 
    //      but this is still confusing to me  ***

        $("button").on("click", function(event) {
            
            if(stage === "attack") {

                event.stopPropagation();
            // get HP data from the user's selection
                userHP = $(".starting-images .character").attr("data-health-points");
                userHP = parseInt(userHP);
                console.log("User's HP = " + userHP);

            // get attackpower from users selection
             attackPowerUser = $(".starting-images .character").attr("data-attack-power");
                attackPowerUser = parseInt(attackPowerUser);
                console.log("User's attack power =  " + attackPowerUser);
            // get HP data from the enemy

            var enemyHP = $(".enemy .character").attr("data-health-points");
                enemyHP = parseInt(enemyHP);
                console.log("Enemy's HP  " + enemyHP);
            // get attackpower from enemy

            var attackPowerEnemy = $(".enemy .character").attr("data-attack-power");
                attackPowerEnemy = parseInt(attackPowerEnemy);
                console.log("Enemy's attack power  " + attackPowerEnemy);
            
            // reduces the enemys HP
            enemyHP = (enemyHP - attackPowerUser);
            $(".enemy #health-points").text(enemyHP);
                console.log("this is the enemies new hp = " + enemyHP);
            // reduces the users HP
            userHP = (userHP - attackPowerEnemy)
            $(".starting-images #health-points").text(userHP);
                console.log("this is the user's new hp = " + userHP);
                console.log("users before attack power = " + attackPowerUser);
            // increase the user attack poweer
            attackPowerUser = (attackPowerUser + attackPowerUser);
                console.log("This is the users attack power = " + attackPowerUser);

                // if statements to determine where to go next
                if (userHP <= 0) {
                    alert("You Lost....");
                     reset();
                } 
                if (enemyHP <= 0) {
                    alert("You Won");
                    $("#enemy-to-battle").empty();
                    stage = "2ndEnemy";
                }
            }
        });

// 2ndEnemy stage Function

        // want to create a new stage var here called "2ndEnemy" that will operate
        // once the first enemy is defeated. it will allow the user to select another enemy
        $("#enemies-to-choose-from").on("click", ".character", function() {
            if (stage === "2ndEnemy") {
            $(this).detach().appendTo("#enemy-to-battle");
            stage = "2ndEnemyAttack";
            }
        });
            


// This is the attack function from above stage 2

            $("button").on("click", function() {
                if(stage === "2ndEnemyAttack");

               // get HP data from the user's selection
 //           userHP = $(".starting-images .character").attr("data-health-points");
 //           userHP = parseInt(userHP);
 //           console.log("User's HP = " + userHP);

        // get attackpower from users selection
 //       var attackPowerUser = $(".starting-images .character").attr("data-attack-power");
 //           attackPowerUser = parseInt(attackPowerUser);
 //           console.log("User's attack power =  " + attackPowerUser);


            var enemyHP = $(".enemy .character").attr("data-health-points");
            enemyHP = parseInt(enemyHP);
            console.log("Enemy's HP  " + userHP);
            // get attackpower from enemy

             var attackPowerEnemy = $(".enemy .character").attr("data-attack-power");
            attackPowerEnemy = parseInt(attackPowerEnemy);
            console.log("Enemy's attack power  " + userHP);
        
            // reduces the enemys HP
            enemyHP = (enemyHP - attackPowerUser);
            $(".enemy #health-points").text(enemyHP);
                console.log("this is the enemies new hp = " + enemyHP);
            // reduces the users HP
            userHP = (userHP - attackPowerEnemy)
            $(".starting-images #health-points").text(userHP);
                console.log("this is the user's new hp = " + userHP);
                console.log("users before attack power = " + attackPowerUser);
            // increase the user attack poweer
            attackPowerUser = (attackPowerUser + attackPowerUser);
                console.log("This is the users attack power = " + attackPowerUser);

            // if statements to determine where to go next
            if (userHP <= 0) {
                alert("You Lost....");
                 reset();
                } 
            if (enemyHP <= 0) {
                alert("You Won");
                $("#enemy-to-battle").empty();
                 stage = "3rdEnemy";
                }
            });
        
        
           
// 3rdEnemy stage Function

        // want to create a new stage var here called "2ndEnemy" that will operate
        // once the first enemy is defeated. it will allow the user to select another enemy
        $("#enemies-to-choose-from").on("click", ".character", function() {
            if (stage === "3rdEnemy") {
            $(this).detach().appendTo("#enemy-to-battle");
            stage = "3rdEnemyAttack";
            }
        });
            
          // This is the attack function from above 3rd 

            $("button").on("click", function() {
                if(stage === "3rdEnemyAttack") {
                // get HP data from the user's selection
    
                // get HP data from the enemy
                var enemyHP = $(".enemy .character").attr("data-health-points");
                enemyHP = parseInt(enemyHP);
                console.log("Enemy's HP  " + userHP);
            // get attackpower from enemy

            var attackPowerEnemy = $(".enemy .character").attr("data-attack-power");
                attackPowerEnemy = parseInt(attackPowerEnemy);
                console.log("Enemy's attack power  " + userHP);
            
            // reduces the enemys HP
            enemyHP = (enemyHP - attackPowerUser);
            $(".enemy #health-points").text(enemyHP);
                console.log("this is the enemies new hp = " + enemyHP);
            // reduces the users HP
            userHP = (userHP - attackPowerEnemy)
            $(".starting-images #health-points").text(userHP);
                console.log("this is the user's new hp = " + userHP);
                console.log("users before attack power = " + attackPowerUser);
            // increase the user attack poweer
            attackPowerUser = (attackPowerUser + attackPowerUser);
                console.log("This is the users attack power = " + attackPowerUser);

                // if statements to determine where to go next
                if (userHP <= 0) {
                    alert("You Lost....");
                     reset();
                } 
                    if (enemyHP <= 0) {
                        alert("You Won the Game");
                        $("#enemy-to-battle").empty();
                        
                    }
                }
            // closes attack function
            })
        // closes 3rdstage attack
        });
        // closes document.ready
    



