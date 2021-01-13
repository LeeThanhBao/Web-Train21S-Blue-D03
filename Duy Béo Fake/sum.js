let a = prompt("Nhập số đầu tiên: ");
let b = prompt("Nhập số thứ hai: ");

function sum(a, b) {
  let temp = 0;
  let kq = "";
  let tA;
  let tB;

  lengthA = a.length;
  lenghtB = b.length;
  if (lenghtB > lengthA) {
    swap = a;
    a = b;
    swap = b;
  }
  for (let i = 0; i < a.length; i++) {
    tA = parseInt(a.charAt(a.length - 1 - i));
    tB = parseInt(b.charAt(b.length - 1 - i));
    tB = tB ? tB : 0;
    tempResult = temp + tA + tB;
    tong2conso = tempResult.toString();
    if (tempResult > 9) {
      temp = 1;
    } else {
      temp = 0;
    }
    kq =
      i == a.length - 1
        ? tempResult + kq
        : tong2conso.charAt(tong2conso.length - 1) + kq;
  }

  return kq;
}
alert(sum(a, b));
