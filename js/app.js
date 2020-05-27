document.querySelector(".button").addEventListener('click', function(){
    let fKeyword = document.querySelector(".full-name").value;
    let eKeyword = document.querySelector(".email").value;
    if(fKeyword === ""){
        alert("Enter your full name");
    }else if(eKeyword === ""){
        alert("Enter your email adress")
    }else{
        console.log(fKeyword);
        console.log(eKeyword);
    }
})