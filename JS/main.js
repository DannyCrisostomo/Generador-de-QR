let qrText=document.getElementById('QrText')
let imgBox=document.getElementById('ImgBox');
let qrImage=document.getElementById('QrImage');

function GenerateQR() {
    if (qrText.value.length>0) {
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add('show-img');
    }
    else{
        qrText.classList.add('ERROR');
        setTimeout(()=>{
            qrText.classList.remove('ERROR');
        },1000)
    }
}