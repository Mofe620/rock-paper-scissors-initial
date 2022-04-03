var username = document.querySelector("#username");
var registerField = document.querySelector("#register");
var submitBtn = document.querySelector("#submit-btn");
var gameArea = document.querySelector("#gameArea");
var systemProfile = document.querySelector("#system");
var userResult = document.querySelector("#userResult");
var weapon = document.querySelector(".weapon");
var resultTable = document.querySelector("table");
var options = ["Rock", "Paper", "Scissors"];
var userScore = 0;
var systemScore = 0;
var gameCount = 0;


function displayName() {
	if (document.querySelector("#user").value !== ""){
		var user = document.querySelector("#user").value;
		username.textContent = user;
		userResult.textContent = user;

		registerField.classList.remove("main-area")
		registerField.setAttribute("class", "fade-left col-1");
		submitBtn.style.opacity = 0;

		//submitBtn.style.opacity = 1;
		gameArea.setAttribute("class", "main-area fade-down");

		//systemProfile.classList.remove("col-3")
		systemProfile.setAttribute("class", "fade-right");
	}
}

function renderGame(){
	var choice = this.event.target.name;
	//alert(choice);
	var systemPick = Math.floor(Math.random()*3);
	//alert(options[systemPick]);
	gameCount += 1;

	var resultRow = resultTable.insertRow();
	var cell1 = resultRow.insertCell(0);
	var cell2 = resultRow.insertCell(1);
	var cell3 = resultRow.insertCell(2);
	cell1.textContent = gameCount;
	cell2.textContent = choice;
	cell3.textContent = options[systemPick];

	//ANALYSE USER and SYSTEM CHOICES
	if (choice == options[systemPick]) {
		userScore += 0;
		systemScore += 0;
	} else switch (true) {
		case (choice == 'Rock' && options[systemPick] == 'Scissors'):
		userScore += 1;
		systemScore += 0;
		break;

		case (choice == 'Rock' && options[systemPick] == 'Paper'):
		userScore += 0;
		systemScore += 1;
		break;

		case (choice == 'Paper' && options[systemPick] == 'Rock'):
		userScore += 1;
		systemScore += 0;
		break;

		case (choice == 'Paper' && options[systemPick] == 'Scissors'):
		userScore += 0;
		systemScore += 1;
		break;

		case (choice == 'Scissors' && options[systemPick] == 'Rock'):
		userScore += 0;
		systemScore += 1;
		break;

		case (choice == 'Scissors' && options[systemPick] == 'Paper'):
		userScore += 1;
		systemScore += 0;
		break;

	}

	//END GAME AFTER 10 Rounds
	if (gameCount == 10) {
		weapon.remove();

		//DISPLAY SCORE
		var resultRow = resultTable.insertRow();
		var cell4 = resultRow.insertCell(0);
		var cell5 = resultRow.insertCell(1);
		var cell6 = resultRow.insertCell(2);
		cell4.textContent = "TOTAL";
		cell5.textContent = userScore;
		cell6.textContent = systemScore;

		//DELETE SECOND (Serial No 0)
		resultTable.deleteRow(1);

		//CREATE RESTART LINK(A)
		var restart = document.createElement("a");
	    restart.setAttribute('href', "index.html")
	    restart.setAttribute('id', "restart-btn")
	    restart.textContent = "PLAY AGAIN";
	    document.body.appendChild(restart);
	}
	
}

