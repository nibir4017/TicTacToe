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


$("td").click(function(){
    
   let currentTD = $(this)
     if(isCircle == true){
        insertCross(currentTD)
     }else{
        insertCircle(currentTD)
     }
  
       checkTable();

    })
