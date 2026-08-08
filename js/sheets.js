/* ===========================================================
   GOOGLE SHEETS API
=========================================================== */

const WEB_APP_URL =
"https://script.google.com/macros/s/AKfycby4JtBEx6NoVt6PLdOdrYEtUCVMYMtMVA39_OxHTH-Mno2Hw4qjBI2kDt-WFewIJ_8V/exec";

async function submitRegistration(data){

    const formData = new FormData();

    formData.append("data", JSON.stringify(data));

    try{

        const response = await fetch(WEB_APP_URL,{

            method:"POST",

            body:formData

        });

        const result = await response.json();

        return result;

    }

    catch(error){

        console.error(error);

        throw error;

    }

}