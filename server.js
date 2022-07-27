
var express = require('express');
var app = express();

app.get("/",(req,res)=>{

    res.send(

        "<h1>Satara CDAC</h1>"
        +"<hr/>"
        +"<h3>Group Members</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Shahbaz</li>"
        +"<li>Onkar</li>"
        +"<li>Rushikesh</li>"
        +"<li>Akshay</li>"
        +"<li>Rohit</li>"
        +"<li>Hrishi</li>"
        +"<li>Pooja</li>"
        +"<li>Akshada</li>"
        +"<li>Shubham</li>"
        +"<li>Kshitija</li>"

        +"</ol>"
    );
});

app.get("/aboutus",(req,res)=>{

    res.send(

        "<h1>Satara CDAC</h1>"
        +"<hr/>"
        +"<h3>Group Description</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>kshitija   14/03/1998</li>"
        +"<li>Rushikesh  03/04/1997</li>"
        +"<li>Onkar      28/09/1996</li>"
        +"<li>Akshada    28/05/1996</li>"
        +"<li>Hrushikesh 28/11/1996</li>"
        +"<li>Akshay sasane 28/03/1996</li>"
        +"<li>Shubham 12/02/1998</li>"
        +"<li>Rohit 04/12/1995</li>"
        +"<li>Shahbaz 24/04/1997</li>"
        +"<li>Shubham Kadam 09/08/1998</li>"
        +"</ol>"
    );
});

var server = app.listen(9000);
console.log("Satara CDAC is running on port 9000");