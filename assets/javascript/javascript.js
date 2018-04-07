
var stage = "start";

$(document).ready(function(){




    $(".character").on("click", function() {
        
        // want to select the div to be the player, move it to the beginning
        // of the div class ".starting-images" using appendTo. i guess this will
        // add an additional player image so i will need to hide the one first selected.
        // $("this").hide();  

        // $(this).appendTo(".starting-images");
        if (stage === "start") {
        var otherCharacters = $(".character").not(this);

        $(otherCharacters).detach().appendTo("#enemies-to-choose-from");

        console.log(otherCharacters);

        stage = "enemy";
        }

        else if (stage === "enemy")  {
        
        $("#enemies-to-choose-from").on("click", ".character", function() {
            $(this).detach().appendTo("#enemy-to-battle");
        })
        }
        
        
        
            
        });




    });



