const ButtonE1 = document.getElementById('BtnRoll');
const DiceId = document.getElementById('dice');
const RollHistory = document.getElementById('History');
let HistoryList = [];

function RollDice(){
    const NumberResult = Math.floor(Math.random() * 6) + 1;
    //console.log(NumberResult);
    const diceface = getDiceFace(NumberResult);
    //console.log(diceface);
    DiceId.innerHTML = diceface;
    HistoryList.push(NumberResult);
    UpdateRollHistory();
}

function UpdateRollHistory(){
    RollHistory.innerHTML="";
    for(let i = 0; i<HistoryList.length; i++){
        const listItem = document.createElement("li")
        listItem.innerHTML = `Roll ${i + 1}: <spam>${getDiceFace(HistoryList[i])}</spam>`;
        RollHistory.appendChild(listItem);
    }
}


function getDiceFace(NumberResult){
    switch(NumberResult){
        case 1:
            return "&#x2680;";
        case 2:
            return "&#x2681;";
        case 3:
            return "&#x2682;";
        case 4:
            return "&#x2683;";
        case 5:
            return "&#x2684;";
        case 5:
            return "&#x2685;";
        default:
            return "<br>";
    }
}


ButtonE1.addEventListener("click", () =>{
    DiceId.classList.add('Roll-animation');
    setTimeout(()=> {
        DiceId.classList.remove("Roll-animation");
        RollDice();
    } ,1000)
    // console.log("clicked");
})