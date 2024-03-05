var btn=document.getElementById("email");
var text=document.getElementsByTagName('input');
var menu=document.getElementById('bar1');
var nav=document.getElementById('nav');
console.log(nav);
btn.addEventListener("click",()=>{
    var name1=text[0].value;
    var email=text[1].value;
    var sub=text[2].value;
    var descript=document.getElementById("area").value;
    
    Email.send({
        SecureToken : "1ad2ea6a-37f5-467d-9972-3e6f8aaf27ad",
        To : 'pushparajdev05@gmail.com',
        From : "pushparajdev05@gmail.com",
        Subject : sub,
        Body : `name : ${name1} <br>
        Email : ${email} <br>
        description : ${descript}`
    }).then(
      message => alert("the mail has sent")
    );
});
menu.addEventListener("click",()=>{
    nav.classList.toggle("menu1")
});