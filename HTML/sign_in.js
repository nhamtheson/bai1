let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener('click', function () {
    let username = document.getElementById("txtusername").value;
    let password = document.getElementById("txtpass").value;
    alert(`${username}---${password}`);

    let name = "Nham The Son";
    let pass = "123";

    if (username === name && password === pass) {
        //thanh cong
    }
    else {
        //that bai
    }
})