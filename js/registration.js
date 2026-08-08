/* ===========================================================
   TECHVERSA 2026 REGISTRATION
   PART 1
=========================================================== */

/* ===========================
   ELEMENTS
=========================== */

const form = document.getElementById("registrationForm");

const steps = document.querySelectorAll(".step");

const progressSteps = document.querySelectorAll(".progress-step");

const eventCards = document.querySelectorAll(".event-card");

const teamContainer = document.getElementById("teamContainer");

const paymentSection = document.getElementById("paymentSection");

const reviewContainer = document.getElementById("reviewContainer");

/* ===========================
   BUTTONS
=========================== */

const next1 = document.getElementById("next1");

const prevStep2 = document.getElementById("prevStep2");

const nextStep2 = document.getElementById("nextStep2");

const prevStep3 = document.getElementById("prevStep3");

const nextStep3 = document.getElementById("nextStep3");

const prevStep4 = document.getElementById("prevStep4");
const submitBtn =
document.getElementById("submitBtn");
/* ===========================
   HIDDEN FIELDS
=========================== */

const selectedEventInput =
document.getElementById("selectedEvent");

const teamSizeInput =
document.getElementById("teamSize");

const registrationFeeInput =
document.getElementById("registrationFee");

/* ===========================
   STATE
=========================== */

let currentStep = 0;

let selectedEvent = null;

let teamSize = 1;

let registrationFee = 0;

/* ===========================
   SHOW STEP
=========================== */

function showStep(index){

    steps.forEach(step=>{

        step.classList.remove("active");

    });

    progressSteps.forEach(step=>{

        step.classList.remove("active");

    });

    steps[index].classList.add("active");

    for(let i=0;i<=index;i++){

        progressSteps[i].classList.add("active");

    }

    currentStep=index;

}

/* ===========================
   VALIDATE STEP 1
=========================== */

function validateStep1(){

    const requiredFields=[

        "fullName",

        "rollNumber",

        "college",

        "course",

        "branch",

        "year",

        "mobile",

        "email"

    ];

    let valid=true;

    requiredFields.forEach(id=>{

        const input=document.getElementById(id);

        input.classList.remove("error");

        if(input.value.trim()===""){

            valid=false;

            input.classList.add("error");

        }

    });

    const mobile=document.getElementById("mobile").value;

    if(!/^[6-9]\d{9}$/.test(mobile)){

        valid=false;

        document
        .getElementById("mobile")
        .classList
        .add("error");

    }

    const email=document.getElementById("email").value;

    if(!/^\S+@\S+\.\S+$/.test(email)){

        valid=false;

        document
        .getElementById("email")
        .classList
        .add("error");

    }

    return valid;

}

/* ===========================
   EVENT CARD SELECTION
=========================== */

eventCards.forEach(card=>{

    card.addEventListener("click",()=>{

        eventCards.forEach(c=>{

            c.classList.remove("selected");

        });

        card.classList.add("selected");

        selectedEvent=

        card.dataset.event;

        teamSize=

        Number(card.dataset.team);

        registrationFee=

        Number(card.dataset.fee);

        selectedEventInput.value=

        selectedEvent;

        teamSizeInput.value=

        teamSize;

        registrationFeeInput.value=

        registrationFee;

    });

});

/* ===========================
   STEP 1 → STEP 2
=========================== */

next1.addEventListener("click",()=>{

    if(!validateStep1()){

        alert("Please complete all required fields.");

        return;

    }

    showStep(1);

});

/* ===========================
   STEP 2 ← STEP 1
=========================== */

prevStep2.addEventListener("click",()=>{

});
/* ===========================================================
   PART 2
   STEP 2 → STEP 3
   TEAM GENERATION
   REVIEW
=========================================================== */

/* ===========================
   STEP 2 VALIDATION
=========================== */

function validateStep2(){

    if(selectedEvent===null){

        alert("Please select an event.");

        return false;

    }

    return true;

}

/* ===========================
   GENERATE TEAM MEMBERS
=========================== */

function generateTeamFields(){

    teamContainer.innerHTML="";

    if(teamSize===1){

        const card=document.createElement("div");

        card.className="team-card";

        card.innerHTML=`

            <h3>Individual Participant</h3>

            <p>No additional team members are required.</p>

        `;

        teamContainer.appendChild(card);

        return;

    }

    for(let i=2;i<=teamSize;i++){

        const card=document.createElement("div");

        card.className="team-card";

        card.innerHTML=`

            <h3>Team Member ${i}</h3>

            <div class="form-grid">

                <div class="input-box">

                    <label>Full Name</label>

                    <input
                        type="text"
                        class="member-name"
                        placeholder="Member ${i} Name"
                        required>

                </div>

                <div class="input-box">

                    <label>Roll Number</label>

                    <input
                        type="text"
                        class="member-roll"
                        placeholder="Member ${i} Roll No"
                        required>

                </div>

                <div class="input-box">

                    <label>Mobile Number</label>

                    <input
                        type="tel"
                        maxlength="10"
                        class="member-mobile"
                        placeholder="Member ${i} Mobile">

                </div>

                <div class="input-box">

                    <label>Email</label>

                    <input
                        type="email"
                        class="member-email"
                        placeholder="Member ${i} Email">

                </div>

            </div>

        `;

        teamContainer.appendChild(card);

    }

}

/* ===========================
   STEP 2 → STEP 3
=========================== */

nextStep2.addEventListener("click",()=>{

    if(!validateStep2()) return;

    generateTeamFields();

    showStep(2);

});

/* ===========================
   STEP 3 ← STEP 2
=========================== */

prevStep3.addEventListener("click",()=>{

    showStep(1);

});

/* ===========================
   STEP 3 VALIDATION
=========================== */

function validateTeam(){

    if(teamSize===1) return true;

    const names=

    document.querySelectorAll(".member-name");

    const rolls=

    document.querySelectorAll(".member-roll");

    let valid=true;

    names.forEach(input=>{

        input.classList.remove("error");

        if(input.value.trim()===""){

            valid=false;

            input.classList.add("error");

        }

    });

    rolls.forEach(input=>{

        input.classList.remove("error");

        if(input.value.trim()===""){

            valid=false;

            input.classList.add("error");

        }

    });

    return valid;

}

/* ===========================
   REVIEW PAGE
=========================== */

function loadReview(){

    reviewContainer.innerHTML=`

    <div class="review-card">

        <h3>Participant</h3>

        <div class="review-row">

            <span class="review-label">Name</span>

            <span class="review-value">

            ${document.getElementById("fullName").value}

            </span>

        </div>

        <div class="review-row">

            <span class="review-label">Roll No</span>

            <span class="review-value">

            ${document.getElementById("rollNumber").value}

            </span>

        </div>

        <div class="review-row">

            <span class="review-label">College</span>

            <span class="review-value">

            ${document.getElementById("college").value}

            </span>

        </div>

        <div class="review-row">

            <span class="review-label">Event</span>

            <span class="review-value">

            ${selectedEvent}

            </span>

        </div>

        <div class="review-row">

            <span class="review-label">Team Size</span>

            <span class="review-value">

            ${teamSize}

            </span>

        </div>

        <div class="review-row">

            <span class="review-label">Registration Fee</span>

            <span class="review-value">

            ₹${registrationFee}

            </span>

        </div>

    </div>

    `;

}

/* ===========================
   STEP 3 → STEP 4
=========================== */

nextStep3.addEventListener("click",()=>{

    if(!validateTeam()){

        alert("Please complete all team member details.");

        return;

    }

    if(registrationFee===0){

        paymentSection.style.display="none";

    }else{

        paymentSection.style.display="block";

    }

    loadReview();

    showStep(3);

});

/* ===========================
   STEP 4 ← STEP 3
=========================== */

prevStep4.addEventListener("click",()=>{

    showStep(2);

});
/* ===========================================================
   PART 3
   SUBMIT
   REGISTRATION ID
   QR CODE
   SUCCESS PAGE
=========================================================== */

const successPage = document.getElementById("successPage");

const registrationIdElement =
document.getElementById("registrationId");

const qrCodeContainer =
document.getElementById("qrCode");

/* ===========================
   REGISTRATION ID
=========================== */

function generateRegistrationId(){

    const number =
    Date.now().toString().slice(-4);

    return `TV2026-${number}`;

}

/* ===========================
   QR CODE
=========================== */

function generateQRCode(id){

    qrCodeContainer.innerHTML="";

    QRCode.toCanvas(

        id,

        {

            width:220,

            margin:2

        },

        function(error,canvas){

            if(error){

                console.error(error);

                return;

            }

            qrCodeContainer.appendChild(canvas);

        }

    );

}

/* ===========================
   FORM SUBMIT
=========================== */

form.addEventListener("submit",async function(e){

    e.preventDefault();

    submitBtn.classList.add("btn-loading");

    submitBtn.disabled=true;

    const registrationId=
    generateRegistrationId();

    registrationIdElement.textContent=
    registrationId;

    const data={

        registrationId,

        fullName:
        document.getElementById("fullName").value,

        rollNumber:
        document.getElementById("rollNumber").value,

        college:
        document.getElementById("college").value,

        course:
        document.getElementById("course").value,

        branch:
        document.getElementById("branch").value,

        year:
        document.getElementById("year").value,

        mobile:
        document.getElementById("mobile").value,

        email:
        document.getElementById("email").value,

        event:selectedEvent,

        teamSize,

        fee:registrationFee

    };
try{

    /* =========================
       SAVE REGISTRATION
    ========================= */

    if(typeof submitRegistration === "function"){

        await submitRegistration(data);

    }

    /* =========================
       GENERATE QR
    ========================= */

    generateQRCode(registrationId);

    /* =========================
       RESET REGISTRATION FORM
    ========================= */

    form.reset();

    eventCards.forEach(card => {

        card.classList.remove("selected");

    });

    teamContainer.innerHTML = "";

    reviewContainer.innerHTML = "";

    paymentSection.style.display = "block";

    selectedEvent = null;

    registrationFee = 0;

    teamSize = 1;

    /* =========================
       SHOW SUCCESS PAGE
    ========================= */

    successPage.classList.add("show");

    successPage.style.display = "flex";

}
catch(error){

    console.error("Registration Error:", error);

    alert(
        "Registration failed.\n\n" +
        error.message
    );

}
finally{

    submitBtn.classList.remove("btn-loading");


    submitBtn.disabled=false;

}}
);
document.getElementById("closePopup").addEventListener("click",()=>{

    document.getElementById("successModal").classList.remove("show");

    window.location.href="index.html";

});