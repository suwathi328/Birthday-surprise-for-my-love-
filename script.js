function addNumber(num) {
  let input = document.getElementById("passcode");

  if (input.value.length < 4) {
    input.value += num;
  }

  document.getElementById("message").innerText = "";
}

function clearPass() {
  document.getElementById("passcode").value = "";
  document.getElementById("message").innerText = "";
}

function checkPass() {
  let pass = document.getElementById("passcode").value;

  if (pass === "2005") {
    document.getElementById("message").innerText = "Correct💝";
    nextPage(2);
  } else {
    document.getElementById("message").innerText = "😤 Wrong password! Try again 💕";
    document.getElementById("passcode").value = "";
  }
}

function nextPage(pageNumber) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById("page" + pageNumber).classList.remove("hidden");
}

function goYes() {
  nextPage(3);
}

function goNo() {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById("page-no").classList.remove("hidden");
}

function backToQuestion() {
  nextPage(2);
}

function openGift(num) {
  if (num === 1) {
    nextPage(5);   // Gift 1
  } 
  else if (num === 2) {
    nextPage(6);   // Gift 2
  } 
  else if (num === 3) {
    nextPage(7);   // Gift 3 (create page7 if needed)
  }
}