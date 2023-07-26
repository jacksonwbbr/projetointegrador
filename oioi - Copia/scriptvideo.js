
document.querySelector('.botcap').addEventListener('click', () => {var video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(error => {
        console.log(error);
    })

    document.querySelector('.bot1').addEventListener('click', () => {var canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    var aa = context.drawImage(video, 0, 0);

    Tesseract.recognize(
        canvas.toDataURL(),
        'por',
        { logger: m => console.log(m) }).then(({ data: { text } }) => {console.log(text); lerTexto(text); addTexto(text)})
    });

    function lerTexto(texto) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = texto;
        speechSynthesis.speak(utterance);
      }

    function addTexto(texto) {
        document.getElementsByClassName("resultado")[0].innerHTML=texto
    }
})


