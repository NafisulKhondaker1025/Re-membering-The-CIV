AFRAME.registerComponent('populate-sidebar', {
    init: function () {

        let loadImageContainer = document.getElementById('loadImageContainer')
        let loadImage = document.getElementById('loadImage')
        loadImage.setAttribute('src', 'assets/loading.gif')

        let download = document.getElementById('downloadButton')
        let downloadImage = download.getElementsByTagName('IMG')[0]
        download.removeChild(downloadImage)
        download.innerHTML = "Download"

        const sidebar = document.getElementById('sidebar')
        const main = document.getElementById('main')
        const closebtn = document.createElement('a')
        closebtn.innerHTML = "x"
        closebtn.setAttribute('href', 'javascript:void(0)')
        closebtn.onclick = this.closeBar
        closebtn.className = 'closebtn'
        closebtn.id = 'close'
        sidebar.appendChild(closebtn)
        const colorbtn = document.createElement('a')
        colorbtn.setAttribute('href', 'javascript:void(0)')
        colorbtn.innerHTML = '<img id="colorimg" src="assets/color.png">'
        colorbtn.onclick = this.openSlider
        sidebar.appendChild(colorbtn)
        const capturebtn = document.createElement('a')
        capturebtn.setAttribute('href', 'javascript:void(0)')
        capturebtn.innerHTML = '<img id="cameraimg" src="assets/camera.png">'
        capturebtn.onclick = this.openCapture
        capturebtn.className = 'capturebtn'
        sidebar.appendChild(capturebtn)

        const slider = document.createElement('input')
        slider.className = 'slider'
        slider.id = 'slide'
        slider.setAttribute('type', 'range')
        slider.setAttribute('min', '0')
        slider.setAttribute('max', '255')
        slider.setAttribute('value', '255')
        main.appendChild(slider)
        slider.style.display = "none"

        const openbtn = document.createElement('a')
        openbtn.setAttribute('href', 'javascript:void(0)')
        openbtn.onclick = this.openBar
        openbtn.innerHTML = "☰"
        openbtn.className = 'openbtn'
        openbtn.id = 'open'
        main.appendChild(openbtn)

        const donebtn = document.createElement('a')
        donebtn.setAttribute('href', 'javascript:void(0)')
        donebtn.onclick = this.done
        donebtn.innerHTML = "✓ Done"
        donebtn.className = 'donebtn'
        donebtn.id = 'done'
        donebtn.style.display = "none"
        main.appendChild(donebtn)

        function changeColor(value) {
            function pad(num){
                if (num.length<2) {
                    return ('0' + num)
                }
                else {
                    return num
                }    
            }
            var hexColor = parseInt(value, 10).toString(16)
            hexColor = pad(hexColor)
            hexColor = "#" + hexColor + hexColor + hexColor
            var mesh = document.getElementById('model').getObject3D('mesh');
            if (!mesh) { return; }
            mesh.traverse((node) => {
                if (node.isMesh) {
                node.material.color = new THREE.Color(hexColor);
                node.material.needsUpdate = true;
                }
            });
        }

        slider.addEventListener('change', function() {changeColor(slider.value)}, false)
        slider.addEventListener('input', function() {changeColor(slider.value)}, false)
    },

    openSlider: function () {
        document.getElementById('sidebar').style.width = "0";
        document.getElementById('slide').style.display = "block";
        document.getElementById('main').style.display = "block"
        document.getElementById('open').style.display = "none"
        document.getElementById('done').style.display = "block"
    },

    openCapture: function () {
        const scene = document.getElementById('scene')
        const capture = document.createElement('xrextras-capture-button')
        capture.setAttribute('capture-mode', 'standard')
        capture.id = 'capbtn'
        scene.appendChild(capture)
        document.getElementById('sidebar').style.width = "0";
        document.getElementById('main').style.display = "block"
        document.getElementById('open').style.display = "none"
        document.getElementById('done').style.display = "block"
     },
 
     done: function () {
         document.getElementById('done').style.display = "none"
         document.getElementById('open').style.display = "block"
         document.getElementById('slide').style.display = "none"
         let capture = document.getElementById('capbtn')
         if (capture) {
            capture.remove()
         }
     }, 

    closeBar: function () {
        document.getElementById('sidebar').style.width = "0";
        document.getElementById('main').style.display = "block"
    },

    openBar: function () {
        document.getElementById('sidebar').style.width = "35%";
        document.getElementById('main').style.display = "none"
    } 
})