// 
var numArray = [];

function nhapNumber() {
     var num = Number(document.getElementById("num_N").value);
     numArray.push(num);
     document.getElementById("text_N").innerHTML ="  " + numArray;
}
document.getElementById("btn_N").onclick = nhapNumber;


function tinhTongSoDuong() {
     var sum = 0;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) > 0) {
               sum += Number(numArray[i]);
          }
     }
     document.getElementById("text_N1").innerHTML = sum;
}
document.getElementById("btn_N1").onclick = tinhTongSoDuong;

function demSoDuong() {
     var soDuong = 0;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) > 0) {
               soDuong++
          }
     }
     document.getElementById("text_N2").innerHTML = soDuong;
}
document.getElementById("btn_N2").onclick = demSoDuong;

function soNhoNhat() {
     var soMin = numArray[0] ;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) < soMin) {
               soMin = numArray[i];
          }
     }
     document.getElementById("text_N3").innerHTML = soMin;
}
document.getElementById("btn_N3").onclick = soNhoNhat;


function soDuongNhoNhat() {
     var soMinD = numArray[0] ;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) > 0) {
               soMinD = numArray[i];
          }
     }
     document.getElementById("text_N4").innerHTML = soMinD;
}
document.getElementById("btn_N4").onclick = soDuongNhoNhat;

function timSoChan() {
     var soChan = 0 ;
     for (var i = 0; i < numArray.length; i++) {
          if (Number(numArray[i]) % 2 == 0) {
               soChan = numArray[i];
          } else {
               soChan = -1;
          }
     }
     document.getElementById("text_N5").innerHTML = soChan;
}
document.getElementById("btn_N5").onclick = timSoChan;
