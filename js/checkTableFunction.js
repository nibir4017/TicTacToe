function checkTable(){
    let firstTR_TD1 = $("tr:nth-child(1) td:nth-child(1)").text();
    let firstTR_TD2 = $("tr:nth-child(1) td:nth-child(2)").text();
    let firstTR_TD3 = $("tr:nth-child(1) td:nth-child(3)").text();
    let secondTR_TD1 = $("tr:nth-child(2) td:nth-child(1)").text();
    let secondTR_TD2 = $("tr:nth-child(2) td:nth-child(2)").text();
    let secondTR_TD3 = $("tr:nth-child(2) td:nth-child(3)").text();
    let thirdTR_TD1 = $("tr:nth-child(3) td:nth-child(1)").text();
    let thirdTR_TD2 = $("tr:nth-child(3) td:nth-child(2)").text();
    let thirdTR_TD3 = $("tr:nth-child(3) td:nth-child(3)").text();

   
    //row wise checking start
    if((firstTR_TD1 == "close") && (firstTR_TD2 == "close" ) && (firstTR_TD3 == "close")){
        alert("Cross won")
    }else if((firstTR_TD1 == "circle") && (firstTR_TD2 == "circle" ) && (firstTR_TD3 == "circle")){
        alert("Circle Won!")
    }else if((secondTR_TD1 == "close") && (secondTR_TD2 == "close" ) && (secondTR_TD3 == "close")){
        alert("Cross won") 
    }else if((secondTR_TD1 == "circle") && (secondTR_TD2 == "circle" ) && (secondTR_TD3 == "circle")){
        alert("Circle Won!") 
    }else if((thirdTR_TD1 == "close") && (thirdTR_TD2 == "close" ) && (thirdTR_TD3 == "close")){
        alert("Cross won")  
    }else if((thirdTR_TD1 == "circle") && (thirdTR_TD2 == "circle" ) && (thirdTR_TD3 == "circle")){
        alert("Circle Won!") 
        //column by column checking start
    }else if((firstTR_TD1 == "close") && (secondTR_TD1 == "close" ) && (thirdTR_TD1 == "close")){
        alert("Cross won")
    }else if((firstTR_TD1 == "circle") && (secondTR_TD1 == "circle" ) && (thirdTR_TD1 == "circle")){
        alert("Circle Won!")
    }else if((firstTR_TD2 == "close") && (secondTR_TD2 == "close" ) && (thirdTR_TD2 == "close")){
        alert("Cross won") 
    }else if((firstTR_TD2 == "circle") && (secondTR_TD2 == "circle" ) && (thirdTR_TD2 == "circle")){
        alert("Circle Won!") 
    }else if((firstTR_TD3 == "close") && (secondTR_TD3 == "close" ) && (thirdTR_TD3 == "close")){
        alert("Cross won")  
    }else if((firstTR_TD3 == "circle") && (secondTR_TD3 == "circle" ) && (thirdTR_TD3 == "circle")){
        alert("Circle Won!") 
        //diagonal checking start
    }else if((firstTR_TD1 == "close") && (secondTR_TD2 == "close" ) && (thirdTR_TD3 == "close")){
        alert("Cross won") 
    }else if((firstTR_TD1 == "circle") && (secondTR_TD2 == "circle" ) && (thirdTR_TD3 == "circle")){
        alert("Circle Won!") 
    }else if((firstTR_TD3 == "close") && (secondTR_TD2 == "close" ) && (thirdTR_TD1 == "close")){
        alert("Cross won") 
    }else if((firstTR_TD3 == "circle") && (secondTR_TD2 == "circle" ) && (thirdTR_TD1 == "circle")){
        alert("Circle Won!")
    }else{
        console.log("empty boxes!")
    }


}