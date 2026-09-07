/* ===========================================================
   GOOGLE SHEETS API
=========================================================== */

const WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbxUyUN1s6scmL_zv4eceD7qzIgSx61N1kIh77hFIgSrZAHS_OOFpIbMRveycchB-R_p/exec";

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
