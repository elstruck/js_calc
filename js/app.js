
$("input").blur(function(){
    var jobin = document.getElementById("jobincome").value;
    var sidein = document.getElementById("sidehustle").value;
    var sidein = document.getElementById("sidehustle").value;
    var expenses = document.getElementById("expenses").value;
    var moninvest = document.getElementById("moninvest").value;
    var interest = document.getElementById("interest").value;
    var totalinvest = document.getElementById("totalinvest").value;
    var leftovers = 0;
    
    if(jobin == ""){
        jobin = 0;
    }
    if(sidein == ""){
        sidein = 0;
    }
     if(expenses == ""){
        expenses = 0;
    }
    if(moninvest == ""){
        moninvest = 0;
    }
    if(totalinvest == ""){
        totalinvest = 0;
    }
    
    var totalin =  parseInt(jobin)+parseInt(sidein);
    console.log("Total Income: $" + totalin);
    
    var leftovers = totalin - parseInt(expenses) - parseInt(moninvest);
    console.log("Leftovers: $" + leftovers);
    console.log("---------------------------------");
    
    $("#results").html("Total Monthly Income: $" + totalin);
});

