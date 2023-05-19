const urlParams = new URLSearchParams(window.location.search);
const presensiID = urlParams.get('presensiId');

export let urlfetch = 'https://agita.herokuapp.com/presensi/' + presensiId;