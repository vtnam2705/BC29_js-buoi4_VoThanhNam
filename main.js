var getID = function(id) {
    return document.getElementById(id);
}
// Bài tập 1
/*
    - Input: 
        + Nhập 3 số nguyên
    - Xử lý: so sánh từng cặp số 
        + Nếu a > b 
    - Output: Tiền lương nhân viên
*/

getID("btn-result").onclick = function () {
    var a = parseFloat(getID("soA").value);
    var b = parseFloat(getID("soB").value);
    var c = parseFloat(getID("soC").value);

    if (a <= b && b <= c) {
        var inKetQua = getID("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${a} - ${b} - ${c}`;
        getID("result").classList.add("alert-success");
    } else if (a <= c && c <= b) {
        var inKetQua = getID("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${a} - ${c} - ${b}`;
        getID("result").classList.add("alert-success");
    } else if (b <= a && a <= c) {
        var inKetQua = getID("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${b} - ${a} - ${c}`;
        getID("result").classList.add("alert-success");
    } else if (c <= a && a <= b) {
        var inKetQua = getID("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${c} - ${a} - ${b}`;
        getID("result").classList.add("alert-success");
    } else if (a >= b && b >= c) {
        var inKetQua = getID("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${c} - ${b} - ${a}`;
        getID("result").classList.add("alert-success");
    } else if (a == b && b == c) {
        var inKetQua = getID("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${a} - ${b} - ${c}`;
        getID("result").classList.add("alert-success");
    } else if(b <= a && b <= c && c <= a) {
        var inKetQua = getID("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${b} - ${c} - ${a}`;
        getID("result").classList.add("alert-success");
    }
}
// else{
// var inKetQua = getID("result").innerHTML = `Sắp xếp theo thứ tự tăng dần: ${c} - ${b} - ${a}`;
// getID("result").classList.add("alert-success");
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
getID("btn-ketQua").onclick = function () {
    var ID = getID("selectPerson").value;
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

getID("btnResult").onclick = function () {
    var so1 = parseInt(getID("so-1").value);
    var so2 = parseInt(getID("so-2").value);
    var so3 = parseInt(getID("so-3").value);
    var even = 0;
    var odd = 0;

    if (so1 % 2 == 0) {
        even++;
        var inResult = getID("ketQua").innerHTML = `Có ${even} số chẵn`;
        getID("ketQua").classList.add("alert-success");
    } else {
        odd++;
        var inResult = getID("ketQua").innerHTML = `Có ${odd} số lẻ`;
        getID("ketQua").classList.add("alert-success");
    }

    if (so2 % 2 == 0) {
        even++;
        var inResult = getID("ketQua").innerHTML = `Có ${even} số chẵn`;
        getID("ketQua").classList.add("alert-success");
    } else {
        odd++;
        var inResult = getID("ketQua").innerHTML = `Có ${odd} số lẻ`;
        getID("ketQua").classList.add("alert-success");
    }

    if (so3 % 2 == 0) {
        even++;
        var inResult = getID("ketQua").innerHTML = `Có ${even} số chẵn`;
        getID("ketQua").classList.add("alert-success");
    } else {
        odd++;
        var inResult = getID("ketQua").innerHTML = `Có ${odd} số lẻ`;
        getID("ketQua").classList.add("alert-success");
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

getID("btn-console").onclick = function () {
    var a = getID("canh-a").value;
    var b = getID("canh-b").value
    var c = getID("canh-c").value;

    if (a == b && b == c) {
        var inConsole = getID("inConsole").innerHTML = `Tam giác đều`;
        getID("inConsole").classList.add("alert-success");
    } else {
        var inConsole = getID("inConsole").innerHTML = `Hình tam giác`;
        getID("inConsole").classList.add("alert-success");
    }

    // Tam giác cân
    if (a == b) {
        if (b != c) {
            var inConsole = getID("inConsole").innerHTML = `Tam giác cân`;
            getID("inConsole").classList.add("alert-success");
        }
    } else if (a == c) {
        if (c != b) {
            var inConsole = getID("inConsole").innerHTML = `Tam giác cân`;
            getID("inConsole").classList.add("alert-success");
        }
    } else if(b == c) {
        if (c != a) {
            var inConsole = getID("inConsole").innerHTML = `Tam giác cân`;
            getID("inConsole").classList.add("alert-success");
        }
    }

    // Tam giác vuông
    if (c == Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))) {
        var inConsole = getID("inConsole").innerHTML = `Tam giác vuông`;
        getID("inConsole").classList.add("alert-success");
    }
}