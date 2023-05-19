const urlParams = new URLSearchParams(window.location.search);
const presensiID = urlParams.get('presensiID');

export let urlfetch = 'https://agita.herokuapp.com/presensi/' + presensiID;