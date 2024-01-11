let qrTexto = document.getElementById('QrText');
let imgBox = document.getElementById('ImgBox');
let qrImagen = document.getElementById('QrImage');

function GenerateQR() {
    if (qrTexto.value.length > 0) {
        qrImagen.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTexto.value;
        imgBox.classList.add('show-img');
    } else {
        qrTexto.classList.add('ERROR');
        setTimeout(() => {
            qrTexto.classList.remove('ERROR');
        }, 1000);
    }
}

function DescargarQR() {
    if (qrTexto.value.length > 0) {
        let solicitudHTTP = new XMLHttpRequest();
        solicitudHTTP.responseType = 'blob';

        solicitudHTTP.onload = function () {
            let objetoBinarioGrande = new Blob([solicitudHTTP.response], { type: 'image/png' });

            // Crear un enlace temporal
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(objetoBinarioGrande);
            link.download = 'qrcode.png';

            // Simular un clic en el enlace para iniciar la descarga
            link.click();
        };

        solicitudHTTP.open('GET', "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTexto.value, true);
        solicitudHTTP.send();
    }
}
