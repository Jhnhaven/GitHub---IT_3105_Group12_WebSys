
const pinkShades = [
    '#f472b6', 
    '#f43f5e'
];

let currentBgIndex = 0;
let currentMsgIndex = 0;

const msgs = [
    'John Greig Galarbe, Jhunethertynn Dejayco, Krishylla Ilagan',
    'Hello! Welcome to my webpage.'
]
const New1Message = document.getElementById('userMessage')
const changeMsgBtn = document.getElementById('changeMsgBtn');
const changeBgBtn = document.getElementById('changeBgBtn');

changeMsgBtn.addEventListener('click', () => {
    New1Message.textContent = msgs[currentMsgIndex]
    currentMsgIndex = (currentMsgIndex + 1) % msgs.length;
});


changeBgBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = pinkShades[currentBgIndex];
    currentBgIndex = (currentBgIndex + 1) % pinkShades.length;
});