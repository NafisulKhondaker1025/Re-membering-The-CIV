AFRAME.registerComponent('loading', {

    init: function () {

        let prompt = document.getElementById('requestingCameraPermissions')
        prompt.innerHTML = 'press "Allow" to launch<br>appuyer "Autoriser" pour lancer'

    }

})