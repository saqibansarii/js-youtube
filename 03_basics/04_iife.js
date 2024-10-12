// IIFE stands for Immediately Invoked Function Expression

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();


( (name) => {
    //simple IIFE
    console.log(`DB CONNECTED Two ${name}`)
})('stranger')