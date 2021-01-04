function sisiMiring(x, y) {
    var ab = "Nilai AB : " + x;
    console.log(ab)
    var bc = "Nilai BC : " + y;
    console.log(bc)
    var ac = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    var hasil = "Panjang sisi AC pada segitiga siku-siku tersebut adalah : " + ac + " cm";
    return hasil
}
console.log(sisiMiring(8, 6))