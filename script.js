document.getElementById("bromo").addEventListener("click", myFunction);
document.getElementById("jogja").addEventListener("click", myFunction);
document.getElementById("surabaya").addEventListener("click", myFunction);
document.getElementById("kintamani").addEventListener("click", myFunction);
document.getElementById("bedugul").addEventListener("click", myFunction);
document.getElementById("bali").addEventListener("click", myFunction);


function myFunction() {
  var inputName = prompt('Masukan Nama Anda')
  var inputQty = prompt('Mau Berapa Orang ? (e.g 2)')
  alert(`Ini Detail Pesanan Anda
Nama Pemesan : ${inputName}
Jumlah : ${inputQty} Orang` )
}