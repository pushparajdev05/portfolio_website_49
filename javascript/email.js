var btn=document.getElementById("email");
var text=document.getElementsByTagName('input');
var menu=document.getElementById('bar1');
var nav = document.getElementById('nav');

btn.addEventListener("click", () => {
    var name1 = text[0].value;
    var email = text[1].value;
    var sub = text[2].value;
    var descript = document.getElementById("area").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validation_msg = "Kindly Enter ";
    let empty = false;
    const fields = [];
    if (name1 == "") {
        fields.push("Name");
        empty = true;
    }
    if (email == "") {
        fields.push("Email");
        empty = true;
    }
    if (sub == "") {
        fields.push("Subject");
        empty = true;
    }
    if (descript == "") {
        fields.push("Message");
        empty = true;
    }
    validation_msg += fields.join(",");
    if (!empty)
    {
        if (emailPattern.test(email)) {
            SendMail(sub, name1, email, descript);
        }
        else {
            alert("kindly check the Email as it is not valid email");
        }
    }
    else
    {
        alert(validation_msg);
    }
});
function SendMail(sub, name1, email, descript) {
    emailjs.send("service_4c8ky0p", "template_1zr7yui", {
        title: sub,
        email: email,
        name: name1,
        from_name: name1,
        message:`Email : ${email} \n
        description : ${descript}`
    }).then(response => {
        console.log(response);
        if (response.status == 200 && response.text == "OK") {
            alert("Email sent successfully!")
        }
        else if (response.status == 403 && response.text == "Forbidden") {
            alert("it may be reached the limitation of sending email\n so kindly try to contact me via Email or Phone no");
        }
        else {
            alert("it may be having internal email server error \n so kindly try to contact me via Email or Phone no")
        }
    })
        .catch(error => console.error("Error sending email:", error));
}
menu.addEventListener("click",()=>{
    nav.classList.toggle("menu1")
});