// Inserts a CROSS : <span class="material-symbols-rounded">close</span>
// Inserts a CIRCLE : <span class="material-symbols-rounded">circle</span>
let isCircle = false
function insertCircle(getTD){
    $(getTD).html("<span class='material-symbols-rounded'>circle</span>")
    isCircle = true
}
function insertCross(getTD){
    $(getTD).html("<span class='material-symbols-rounded'>close</span>")
    isCircle = false
}
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
    
}
checkTable()
$("td").click(function(){
   let currentTD = $(this)
     if(isCircle == true){
        insertCross(currentTD)
     }else{
        insertCircle(currentTD)
     }


    })
