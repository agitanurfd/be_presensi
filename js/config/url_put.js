const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlPUT = "https://agita.herokuapp.com/upd/" + presensiId;

export function AmbilResponse(result) {
  console.log(result); //menampilkan respond API pada console
  alert(result.message); //menampilkan respond API pada alert
  window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}