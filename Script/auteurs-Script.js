function ToIndex()
{
    window.location ="loading.html";
}


function ToVakken()
{
   console.log('helllo'); window.location="vakken.html";
}

function ToLeraren()
{
    window.location ="leraren.html";
}

function ToAuteurs()
{
    window.location ="auteurs.html";
}

function ToContact()
{
    window.location="contact.html";
}

function hellotest()
{
    var d = document.getElementById("ResponsiveMenu").value;
    console.log(d);
     window.location=d+".html";
}