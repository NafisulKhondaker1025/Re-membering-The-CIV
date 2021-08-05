AFRAME.registerComponent('mods', {

    init: function () {

        let prompt = document.getElementById('requestingCameraPermissions')
        prompt.innerHTML = 'press "Allow" to launch<br>appuyez "Autoriser" pour lancer'

        let download = document.getElementById('downloadButton')
        let downloadImage = download.getElementsByTagName('IMG')[0]
        download.removeChild(downloadImage)
        download.innerHTML = "Download"
    }

})