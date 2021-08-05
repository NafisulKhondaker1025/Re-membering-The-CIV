AFRAME.registerComponent('mods', {

    init: function () {

        let prompt = document.getElementById('requestingCameraPermissions')
        prompt.innerHTML = 'tap "Allow" to launch<br>robinet "Autoriser" pour lancer'

        let download = document.getElementById('downloadButton')
        let downloadImage = download.getElementsByTagName('IMG')[0]
        download.removeChild(downloadImage)
        download.innerHTML = "Download"
    }

})