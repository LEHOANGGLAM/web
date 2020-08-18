function tinh() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    if (isNaN(a) || isNaN(b) || isNaN(c))
        alert("Dữ liệu không hợp lệ")
    if (a == "")
        a = 0;
    if (b == "")
        b = 0;
    if (c == "")
        c = 0;
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                kq = "Phương trình có vô số nghiệm";
                x1 = "";
                x2 = "";
                document.getElementById("kq").innerHTML = kq;
                document.getElementById("x1").innerHTML = x1;
                document.getElementById("x2").innerHTML = x2;
            }
            else {
                kq = "Vô nghiệm";
                x1 = "";
                x2 = "";
                document.getElementById("kq").innerHTML = kq;
                document.getElementById("x1").innerHTML = x1;
                document.getElementById("x2").innerHTML = x2;
            }
        }
        else {
            kq = -c / b;
            x1 = "";
            x2 = "";
            document.getElementById("kq").innerHTML = "x1 = x2 =" + kq;
            document.getElementById("x1").innerHTML = x1;
            document.getElementById("x2").innerHTML = x2;
        }
    }
    else {
        var del = b * b - 4 * a * c;
        if (del < 0) {
            kq = "Vô nghiệm";
            x1 = "";
            x2 = "";
            document.getElementById("kq").innerHTML = kq;
            document.getElementById("x1").innerHTML = x1;
            document.getElementById("x2").innerHTML = x2;
        }
        else if (del == 0) {
            kq = -b / (2 * a);
            x1 = "";
            x2 = "";
            document.getElementById("kq").innerHTML = "x1 = x2 =" + kq;
            document.getElementById("x1").innerHTML = x1;
            document.getElementById("x2").innerHTML = x2;
        }
        else {
            kq = "";
            var x1 = (-b - Math.sqrt(del)) / (2 * a);
            var x2 = (-b + Math.sqrt(del)) / (2 * a);
            document.getElementById("kq").innerHTML = kq;
            document.getElementById("x1").innerHTML = "x1 = " + x1;
            document.getElementById("x2").innerHTML = "x2 = " + x2;
        }
    }
}