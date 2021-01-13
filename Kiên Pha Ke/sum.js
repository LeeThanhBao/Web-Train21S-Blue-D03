let a = prompt("Nhập a");
let b = prompt("Nhập b");

function sum(a , b){
let dodaia = a.length;
let dodaib = b.length;
if (dodaib > dodaia)
{
    let tempt = a;
    a = b;
    b = tempt;
}
let tA; let tong = "";
let tB; let tempt = 0;
for (let i =0 ; i< dodaia; i++)
{
    tA = a.charAt(dodaia -1 -i)
    tB = b.charAt(dodaib - 1 -i)
    tA = parseInt(tA)
    tB = parseInt (tB)
   let  tinh2so = tA + tB + tempt
   if (tinh2so > 9) {
       tempt = 1; 
   }
   else {
       tempt = 0;
   }
tong = (i == dodaia - 1 )
}

}