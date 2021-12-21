// 
var numArray = [];

function nhapNumber() {
     var num = Number(document.getElementById("num_N").value);
     numArray.push(num);
     document.getElementById("text_N").innerHTML ="  " + numArray;
}
document.getElementById("btn_N").onclick = nhapNumber;

// Bài 1
function tinhTongSoDuong() {
     var sum = 0;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) > 0) {
               sum += Number(numArray[i]);
          }
     }
          sum;
          document.getElementById("text_N1").innerHTML ="Tổng số dương: " + sum;
}
document.getElementById("btn_N1").onclick = tinhTongSoDuong;

// Bài 2
function demSoDuong() {
     var soDuong = 0;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) > 0) {
               soDuong++
          }
     }
     document.getElementById("text_N2").innerHTML = "Số dương: " + soDuong;
}
document.getElementById("btn_N2").onclick = demSoDuong;

// Bài 3
function soNhoNhat() {
     var soMin = numArray[0] ;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) < soMin) {
               soMin = numArray[i];
          }
     }
     document.getElementById("text_N3").innerHTML = "Số nhỏ nhất: " +  soMin;
}
document.getElementById("btn_N3").onclick = soNhoNhat;


// Bài 4
function soDuongNhoNhat() {
     var soMinD = [] ;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) > 0) {
              soMinD.push(numArray[i])
          };
      }

      var soMin = soMinD[0];
      for (var i = 0; i < soMinD.length; i++) {
          if (soMin > Number(soMinD[i])) {
              soMin = soMinD[i];
          };
      }
     document.getElementById("text_N4").innerHTML = "Số dương nhỏ nhất: " + soMin;
}
document.getElementById("btn_N4").onclick = soDuongNhoNhat;

// Bài 5
function timSoChan() {
     var soChan = 0 ;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) % 2 == 0) {
               soChan = numArray[i];
          } else {
               soChan = -1;
          }
     }
     document.getElementById("text_N5").innerHTML ="Số chẵn cuối cùng: " + soChan;
}
document.getElementById("btn_N5").onclick = timSoChan;

// Bài 6
function doiViTri() {
     var viTriMoi = [] ;
     for (var i = 0; i < numArray.length; i++) {
          viTriMoi.push(numArray[i]);
     }
     var viTri = 0;
     var viTri1 = Number(document.getElementById("num_N6").value);
     var viTri2 = Number(document.getElementById("num_N7").value);

     viTri = viTriMoi[viTri1];
     viTriMoi[viTri1] = viTriMoi[viTri2];
     viTriMoi[viTri2] = viTri;

     document.getElementById("text_N6").innerHTML = "Mảng sau khi đổi: " + viTriMoi;
}
document.getElementById("btn_N6").onclick = doiViTri;


// Bài 7
function sapXepTangDan() {
     var sapXep = [] ;
     for (var i = 0; i < numArray.length; i++) {
          sapXep.push(numArray[i]);
     }
     
     for (let i = 0; i < sapXep.length; i++) {
         for (let j = 0; j < sapXep.length; j++) {
             if (Number(sapXep[j]) > Number(sapXep[j + 1])) {
                  var temp = sapXep[j];
                  sapXep[j] = sapXep[j + 1];
                  sapXep[j + 1] = temp;
             }  
         }  
     }

     document.getElementById("text_N7").innerHTML = "Mảng sau khi sắp xếp: " + sapXep;
}
document.getElementById("btn_N7").onclick = sapXepTangDan;


// Bài 8
function timSoNguyenToDauTien() {
     var count = 0;
     var numFirst = 0;
     for (var i = 0; i < numArray.length; i++) {
 
         if (Number(numArray[i]) >= 2) {
             for (var j = 2; j <= Math.sqrt(Number(numArray[i])); j++) {
                 if (Number(numArray[i]) % j == 0) {
                     count++;
                 }
             }
             if (count == 0) {
                  numFirst = numArray[i];
                  break;
             }
             count = 0;
         }
     }
     document.getElementById("text_N8").innerHTML = "Số nguyên tố đầu tiên: " + numFirst;
}
document.getElementById("btn_N8").onclick = timSoNguyenToDauTien;

// Bài 9
function demSoNguyen() {
     var count = 0;
     for (var i = 0; i < numArray.length; i++) {
         if (Number.isInteger(numArray[i]) == true) {
             count++;
         }
     }
     document.getElementById("text_N9").innerHTML = "Số nguyên: " + count;
}
document.getElementById("btn_N9").onclick = demSoNguyen;

// Bài 10
function soSanhAD() {
     var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong++;
        }
        if (numArray[i] < 0) {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        document.getElementById("text_N10").innerHTML = "Số dương"  + " > Số âm";
    } else if (soDuong < soAm) {
        document.getElementById("text_N10").innerHTML = "Số dương"  + " < Số âm";
    } else {
        document.getElementById("text_N10").innerHTML = "Số dương"  + " = Số âm" ;
    }
}
document.getElementById("btn_N10").onclick = soSanhAD;





 





