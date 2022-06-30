//랜덤번호 지정
//번호 입력 go 버튼 누름
//맞춤, up, down
//reset버튼
//5번 기회 게임 끝 (go버튼 disabled)
//1~100 범위 밖 알려줌, 기회 소모 x
//이미 입력했던 번호 알려줌, 기회 소모 x

let cumputernumber = 0;
let playButton = document.getElementById("user-button");
let userNumber = document.getElementById("user-number");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chances = 5;
let gameover = false;
let history=[]
console.log(playButton);

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userNumber.addEventListener("focus", function(){userNumber.value = ""})

function pickRandomNum() {
    cumputernumber = Math.floor(Math.random() * 100)+1 ;
    console.log("정답", cumputernumber);
}

function play(){
    let userValue = userNumber.value;
    
    if(userValue > 100 || userValue < 0){
        resultArea.textContent = "0~100까지 숫자를 입력해 주세요"
        return;
    }
    
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다"
        return;
    }

    chances -- ;
    chanceArea.textContent = `남은 기회 : ${chances}`;
    if(userValue<cumputernumber){
        resultArea.textContent = "UP~~!~!"
    } else if (userValue>cumputernumber){
        resultArea.textContent = "DOWN~!~!~"
    } else {
        resultArea.textContent = "정답입니다!"
        gameover = true
    }

    history.push(userValue)

    if(chances < 1){
        gameover = true
    }

    if (gameover == true){
        playButton.disabled = true
    }
}
pickRandomNum();

function reset(){
    userNumber.value = "";
    pickRandomNum();
    resultArea.textContent = "마시기 싫으면 맞춰라 ㅋㅋ";
    playButton.disabled = false;
    chances = 5;
    gameover = false;
    chanceArea.textContent = "남은 기회 : 5"
    
}