 const api_url="https://api.quotable.io/random";
 const quote=document.getElementById("bquote");
 const author=document.getElementById("author");

 async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML=data.content;
    author.innerHTML=data.author;

 }
 getquote(api_url);

 function twitter() {
   window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"------by"+author.innerHTML,"twitter window","width=600px,height=300px")
   
};

    
