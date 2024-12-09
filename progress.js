function joinAsGuest() {
    let hasJoinedAsGuest = false;
    let status = localStorage.getItem("userStatus");
    if(!status || !status.includes("guest")){
      console.log("Logged as guest")
    localStorage.setItem("userStatus", "guest");
      hasJoinedAsGuest = true
    }
  
  }
  joinAsGuest();
/* -------------------------------------------------------------------------- */
/*                                Progress Bar                                */
/* -------------------------------------------------------------------------- */
const steps = [
    document.getElementById('received'),
    document.getElementById('preparation'),
    document.getElementById('delivery'),
    document.getElementById('delivered')
];

let currentStep = 0; 

function updateProgressBar() {
    if (currentStep < steps.length) {
        steps[currentStep].classList.add('active');
        if (currentStep > 0) {
            steps[currentStep - 1].classList.add('completed');
        }
        currentStep++;
    }
}


setTimeout(updateProgressBar, 1000);
setTimeout(updateProgressBar, 4000); 
setTimeout(updateProgressBar, 7000); 
setTimeout(updateProgressBar, 10000); 


/* -------------------------------------------------------------------------- */
/*                                  Date/Time                                 */
/* -------------------------------------------------------------------------- */
  function updateDateTime() {
    const currentDate = new Date();
    

    const date = currentDate.toLocaleDateString();  
    const time = currentDate.toLocaleTimeString();  

    document.getElementById('order-date').textContent = date;
    document.getElementById('order-time').textContent = time;
}

updateDateTime();