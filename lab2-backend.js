const messages = [
    "John Greig Galarbe, Jhunethertynn Dejayco, Krishylla Ilagan",
    "Hello, We are JJK!",
];

const pinkShades = [
    "#fbcfe8",
    "#f472b6",
    "#f43f5e",
];

let currentMsgIndex = 0;
let currentBgIndex = 0;

const userMessage = document.getElementById("userMessage");
const changeMsgBtn = document.getElementById("changeMsgBtn");
const changeBgBtn = document.getElementById("changeBgBtn");

changeMsgBtn.addEventListener("click", () => {
    userMessage.textContent = messages[currentMsgIndex];
    currentMsgIndex = (currentMsgIndex + 1) % messages.length;
});

changeBgBtn.addEventListener("click", () => {
    currentBgIndex = (currentBgIndex + 1) % pinkShades.length;
    document.body.style.backgroundColor = pinkShades[currentBgIndex];
});