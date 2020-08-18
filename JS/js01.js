function getInfo(){
    var name = document.getElementById("name").value;
    var birth = document.getElementById("birth").value;
    if(name =="")
        alert("Dữ liệu không hợp lệ");
    if (birth=="" || isNaN(birth))
        alert("Dữ liệu không hợp lệ");
    var age = 2020 - Number(birth);
    document.getElementById("showname").innerHTML="Chào bạn " + name+"!";
    document.getElementById("showage").innerHTML="Tuổi của bạn là " + age;
}
