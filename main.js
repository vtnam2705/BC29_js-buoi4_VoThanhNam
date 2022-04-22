// Bài tập 1
/*
    - Input: 
        + Nhập 3 số nguyên
    - Xử lý: so sánh từng cặp số 
        + Nếu a > b 
    - Output: Tiền lương nhân viên
*/

document.getElementById("btn-result").onclick = function () {
    var a = parseFloat(document.getElementById("soA").value);
    var b = parseFloat(document.getElementById("soB").value);
    var c = parseFloat(document.getElementById("soC").value);

    if (a <= b && b <= c) {
        var inKetQua = document.getElementById("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${a} - ${b} - ${c}`;
        document.getElementById("result").classList.add("alert-success");
    } else if (a <= c && c <= b) {
        var inKetQua = document.getElementById("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${a} - ${c} - ${b}`;
        document.getElementById("result").classList.add("alert-success");
    } else if (b <= a && a <= c) {
        var inKetQua = document.getElementById("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${b} - ${a} - ${c}`;
        document.getElementById("result").classList.add("alert-success");
    } else if (c <= a && a <= b) {
        var inKetQua = document.getElementById("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${c} - ${a} - ${b}`;
        document.getElementById("result").classList.add("alert-success");
    } else if (b <= a && b <= c && a >= c) {
        var inKetQua = document.getElementById("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${c} - ${b} - ${a}`;
        document.getElementById("result").classList.add("alert-success");
    } else if (a == b && b == c) {
        var inKetQua = document.getElementById("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${a} - ${b} - ${c}`;
        document.getElementById("result").classList.add("alert-success");
    }
}
// else{
// var inKetQua = document.getElementById("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${c} - ${b} - ${a}`;
// document.getElementById("result").classList.add("alert-success");
// console.log(c, b, a);
// }

// function tangDan(a, b, c) {
//     if(a <= b && b <= c) {
//         console.log(a, b, c);
//     } else if(a <= c && c <= b) {
//         console.log(a, c, b);
//     } else if(b <= a && a <= c) {
//         console.log(b, a, c);
//     } else if(c <= a && a <= b) {
//         console.log(c, a, b);
//     } else if(a == b && b == c) {
//         console.log(a, b, c);
//     } 
//     else if(a >= b && b >= c){
//         console.log(c, b, a);
//     }
// }
// tangDan(1,2,3);

// a > b && b > c
// ********************************************************************
// Bài tập 2
/*
    - Input: 
        + Lựa chọn người muốn máy tính chào hỏi
    - Xử lý: lấy giá trị vừa lựa chọn so sánh từng trường hợp 
        +  Trường hợp 1: nếu giá trị lựa chọn == "Bố" => in ra kết quả "Xin chào Bố"
        +  Trường hợp 2: nếu giá trị lựa chọn == "Mẹ" => in ra kết quả "Xin chào Mẹ"
        +  Trường hợp 3: nếu giá trị lựa chọn == "Anh trai" => in ra kết quả "Xin chào Anh trai"
        +  Trường hợp 4: nếu giá trị lựa chọn == "Em gái" => in ra kết quả "Xin chào Em gái"
        +  Trường hợp 5: nếu giá trị lựa chọn !== các giá trị trên => in ra kết quả "Welcome to CyberSoft"
    - Output: In ra câu chào.
*/
document.getElementById("btn-ketQua").onclick = function () {
    var ID = document.getElementById("selectPerson").value;
    switch (ID) {
        case "Bố":
            alert(`Xin chào ${ID} !!!`);
            break;

        case "Mẹ":
            alert(`Xin chào ${ID} !!!`);
            break;

        case "Anh trai":
            alert(`Xin chào ${ID} !!!`);
            break;

        case "Em gái":
            alert(`Xin chào ${ID} !!!`);
            break;

        default:
            alert("Welcome to CyberSoft !!!")
    }

}


// *******************************************************************
// Bài tập 3
/*
    - Input: 
        + Nhập 3 số nguyên
    - Xử lý:  
        + Nếu giá trị nhập % 2 == 0 => số chẵn
        + Nếu giá trị nhập /2 != 0 => số lẻ
    - Output: xuất ra có bao nhiêu số chẵn, số lẻ
*/

document.getElementById("btnResult").onclick = function () {
    var so1 = parseInt(document.getElementById("so-1").value);
    var so2 = parseInt(document.getElementById("so-2").value);
    var so3 = parseInt(document.getElementById("so-3").value);
    var even = 0;
    var odd = 0;

    if (so1 % 2 == 0) {
        even++;
        var inResult = document.getElementById("ketQua").innerHTML = `Có ${even} số chẵn`;
        document.getElementById("ketQua").classList.add("alert-success");
    } else {
        odd++;
        var inResult = document.getElementById("ketQua").innerHTML = `Có ${odd} số lẻ`;
        document.getElementById("ketQua").classList.add("alert-success");
    }

    if (so2 % 2 == 0) {
        even++;
        var inResult = document.getElementById("ketQua").innerHTML = `Có ${even} số chẵn`;
        document.getElementById("ketQua").classList.add("alert-success");
    } else {
        odd++;
        var inResult = document.getElementById("ketQua").innerHTML = `Có ${odd} số lẻ`;
        document.getElementById("ketQua").classList.add("alert-success");
    }

    if (so3 % 2 == 0) {
        even++;
        var inResult = document.getElementById("ketQua").innerHTML = `Có ${even} số chẵn`;
        document.getElementById("ketQua").classList.add("alert-success");
    } else {
        odd++;
        var inResult = document.getElementById("ketQua").innerHTML = `Có ${odd} số lẻ`;
        document.getElementById("ketQua").classList.add("alert-success");
    }
}

// function demChanLe(a, b, c) {
//     var even_count = 0;
//     var odd_count = 0;

//     if(a % 2 == 0) {
//         even_count++;
//     } else{
//         odd_count++;
//     }

//     if(b % 2 === 0) {
//         even_count++;
//     } else{
//         odd_count++;
//     }

//     if(c % 2 === 0) {
//         even_count++;
//     } else{
//         odd_count++;
//     }
//     return odd_count;
// }
// console.log(demChanLe(1, 3, 6));
// *******************************************************************

// Bài tập 4
/*
    - Input: 
        + Nhập 3 độ dài của mỗi cạnh
    - Xử lý:  
        + Nếu a = b = c => tam giác đều 
        + Nếu a = b >< c => tam giác cân
        + Nếu c^2 = a^2 + b^2; => tam giác vuông 
    - Output: Từ giá trị a, b, c => loại tam giác
*/

document.getElementById("btn-console").onclick = function () {
    var a = document.getElementById("canh-a").value;
    var b = document.getElementById("canh-b").value
    var c = document.getElementById("canh-c").value;

    if (a == b && b == c) {
        var inConsole = document.getElementById("inConsole").innerHTML = `Tam giác đều`;
        document.getElementById("inConsole").classList.add("alert-success");
    } else {
        var inConsole = document.getElementById("inConsole").innerHTML = `Hình tam giác`;
        document.getElementById("inConsole").classList.add("alert-success");
    }

    // Tam giác cân
    if (a == b) {
        if (b != c) {
            var inConsole = document.getElementById("inConsole").innerHTML = `Tam giác cân`;
            document.getElementById("inConsole").classList.add("alert-success");
        }
    } else if (a == c) {
        if (c != b) {
            var inConsole = document.getElementById("inConsole").innerHTML = `Tam giác cân`;
            document.getElementById("inConsole").classList.add("alert-success");
        }
    } else if(b == c) {
        if (c != a) {
            var inConsole = document.getElementById("inConsole").innerHTML = `Tam giác cân`;
            document.getElementById("inConsole").classList.add("alert-success");
        }
    }

    // Tam giác vuông
    if (c == Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))) {
        var inConsole = document.getElementById("inConsole").innerHTML = `Tam giác vuông`;
        document.getElementById("inConsole").classList.add("alert-success");
    }
}