function funValidater() {
    var num1 = Number(document.getElementById("inp1").value);
    var str = (num1 % 2 === 0) ? "even" : "odd";
    document.getElementById("show1").innerText = str;
}

function funSum() {
    var num2 = Number(document.getElementById("inp2").value);
    var res = 0;
    while (num2 !== 0) {
        res += num2;
        num2 > 0 ? num2 -= 1 : num2 += 1;
    }
    document.getElementById("show2").innerText = res;
}

function funStar() {
    var num3 = Number(document.getElementById("inp3").value);
    var res = "";
    for (let i = 1; i <= num3; i++) {
        var temp = "";
        for (let j = 0; j < i; j++) {
            temp += "*";
        }
        res += temp + "\n";
    }
    document.getElementById("show3").innerText = res;
}

var flag = false;
function funChecker() {
    if (!flag) {
        var str = "";
        var len = 0;
        for (let i = 0; i <= 100; i++) {
            if (i % 3 != 0 && i % 7 != 0) {
                str += i + ",\t";
                len++;
            }
        }
        document.getElementById("show4").innerText = "length : " + len + "\nnumbers :\n" + str;
        document.getElementById("btn").innerText = "Remove";
        flag = !flag;
    } else {
        document.getElementById("show4").innerText = "";
        document.getElementById("btn").innerText = "Check numbers";
        flag = !flag;
    }

}



