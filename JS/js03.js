function thuchien() {
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    if (isNaN(one) || isNaN(two))
        alert("Dữ liệu không hợp lệ")
    if (one == "")
        one = 0;
    if (two == "")
        two = 0;
    var cong=document.getElementById("cong");
    var tru=document.getElementById("tru");
    var nhan=document.getElementById("nhan");
    var chia=document.getElementById("chia");
    var kq=0;
    if(cong.checked == true){  
       kq=Number(one)+Number(two);
    }
    else if(tru.checked == true){
        kq=one-two;
    }
    else if(nhan.checked == true){
        kq=one*two;
    }
    else if(chia.checked == true){
        kq=one/two;
    }
    document.getElementById("kq").value=kq;
}