// ================================
// TECHVERSA 2026 EVENTS
// ================================

const events = [

{
    id:1,
    name:"Vision Vault",
    subtitle:"PPT Presentation",
    members:"Team of 2",
    fee:"FREE",
    duration:"10 Minutes",
    difficulty:"Easy",

    description:
    "Present innovative technical ideas using PowerPoint with creativity, confidence and technical knowledge.",

    rules:[
        "Maximum 2 members per team.",
        "Presentation time is 10 minutes.",
        "Bring your PPT in a Pen Drive.",
        "Judges decision is final."
    ]
},

{
    id:2,
    name:"Brain Blitz",
    subtitle:"Technical Quiz",
    members:"Team of 4",
    fee:"FREE",
    duration:"30 Minutes",
    difficulty:"Medium",

    description:
    "A technical quiz covering programming, aptitude, AI, networking and computer science fundamentals.",

    rules:[
        "Maximum 4 members.",
        "No mobile phones.",
        "Negative marking may apply.",
        "Judges decision is final."
    ]
},

{
    id:3,
    name:"Code Quest",
    subtitle:"Find the Code Using Story",
    members:"Individual",
    fee:"FREE",
    duration:"30 Minutes",
    difficulty:"Medium",

    description:
    "Read a story, identify hidden programming logic and solve the final coding challenge.",

    rules:[
        "Individual event.",
        "No internet usage.",
        "Solve within the given time.",
        "Highest score wins."
    ]
},

{
    id:4,
    name:"Blind Byte",
    subtitle:"Blind Coding",
    members:"Individual",
    fee:"FREE",
    duration:"45 Minutes",
    difficulty:"Hard",

    description:
    "Write programs without executing them. Accuracy and logical thinking are the key.",

    rules:[
        "Individual event.",
        "No compiler usage.",
        "Time: 45 minutes.",
        "Judges decision is final."
    ]
},

{
    id:5,
    name:"Ideathon",
    subtitle:"Innovation Challenge",
    members:"Team of 3",
    fee:"₹300 / Team",
    duration:"90 Minutes",
    difficulty:"Hard",

    description:
    "Present innovative ideas to solve real-world challenges using technology.",

    rules:[
        "Exactly 3 members.",
        "Entry Fee ₹300 per team.",
        "Original ideas only.",
        "Presentation required."
    ]
},

{
    id:6,
    name:"Hackathon",
    subtitle:"Software Development",
    members:"Team of 3",
    fee:"₹300 / Team",
    duration:"3 Hours",
    difficulty:"Hard",

    description:
    "Develop an innovative software solution for the given problem statement within the allotted time.",

    rules:[
        "Exactly 3 members.",
        "Entry Fee ₹300 per team.",
        "Laptop is compulsory.",
        "Working prototype required."
    ]
}

];


// ================================
// LEARN MORE
// ================================
const modal = document.getElementById("eventModal");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".learn-btn").forEach((button,index)=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

const event=events[index];

document.getElementById("modalTitle").innerHTML=event.name;
document.getElementById("modalSubtitle").innerHTML=event.subtitle;
document.getElementById("modalMembers").innerHTML=event.members;
document.getElementById("modalFee").innerHTML=event.fee;
document.getElementById("modalDuration").innerHTML=event.duration;
document.getElementById("modalDifficulty").innerHTML=event.difficulty;
document.getElementById("modalDescription").innerHTML=event.description;

const rules=document.getElementById("modalRules");
rules.innerHTML="";

event.rules.forEach(rule=>{
rules.innerHTML+=`<li>${rule}</li>`;
});

modal.style.display="flex";

});

});

closeBtn.onclick=()=>{
modal.style.display="none";
}

window.onclick=(e)=>{
if(e.target==modal){
modal.style.display="none";
}
}
