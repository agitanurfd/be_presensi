const urlParams = new URLSearchParams(window.location.search);
const presensiID = urlParams.get('presensiId');

export let urlfetch = 'https://agita.herokuapp.com/upd/' + presensiId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}