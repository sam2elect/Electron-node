let request = require('request');

request("https://quotesondesign.com/", function(err, response, body){
    let bodyJson = JSON.parse(body);
    let randomQuote = bodyJson[0]["content"];
    document.getElementById("quote").innerHTML = randomQuote;
});

setInterval(function(){
    request("https://quotesondesign.com/", function(err, response, body){
    let bodyJson = JSON.parse(body);
    let randomQuote = bodyJson[0]["content"];
    document.getElementById("quote").innerHTML = randomQuote;
});

}, 5000);