let btn = document.getElementById("btn") ; 


btn.addEventListener("click" , function() {
    
let quote = document.getElementById("quote") ;
let person = document.getElementById("person")




    fetch("https://go-quote.azurewebsites.net/") 
    .then(response => response.json())
    .then(data => { 

    quote.textContent = data.text ; 
    person.textContent= `- ${data.author}`


    
    })  
    .catch(err => console.error("ERROR:", err));
   
    

})