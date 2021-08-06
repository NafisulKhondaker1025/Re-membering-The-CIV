AFRAME.registerComponent('populate-sidebar', {
    init: function () {
        const sidebar = document.getElementById('sidebar')
        const main = document.getElementById('main')

        const download = document.getElementById('downloadButton')
        download.innerHTML = 'Download'

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
        colorbtn.className = 'colorbtn'
        sidebar.appendChild(colorbtn)
        const capturebtn = document.createElement('a')
        capturebtn.setAttribute('href', 'javascript:void(0)')
        capturebtn.innerHTML = '<img id="cameraimg" src="assets/camera.png">'
        capturebtn.onclick = this.openCapture
        capturebtn.className = 'capturebtn'
        sidebar.appendChild(capturebtn)
        const helpbtn = document.createElement('a')
        helpbtn.setAttribute('href', 'javascript:void(0)')
        helpbtn.innerHTML = '<img id="cameraimg" src="assets/help.png">'
        helpbtn.onclick = this.openHelp
        helpbtn.id = 'help'
        sidebar.appendChild(helpbtn)
        const engbtn = document.createElement('a')
        engbtn.setAttribute('href', 'javascript:void(0)')
        engbtn.innerHTML = 'English'
        engbtn.onclick = this.showEng
        engbtn.id = 'eng'
        sidebar.appendChild(engbtn)
        const francbtn = document.createElement('a')
        francbtn.setAttribute('href', 'javascript:void(0)')
        francbtn.innerHTML = 'Français'
        francbtn.onclick = this.showFranc
        francbtn.id = 'franc'
        sidebar.appendChild(francbtn)
        
        const container = document.getElementById('container')
        const colorHelp = document.createElement('span')
        colorHelp.id = 'colHelp'
        colorHelp.innerHTML = '❮❮❮❮ Click to adjust saturation'
        container.appendChild(colorHelp)
        const cameraHelp = document.createElement('span')
        cameraHelp.id = 'camHelp'
        cameraHelp.innerHTML = '❮❮❮❮ Click to take photo/video'
        container.appendChild(cameraHelp)
        const textCont = document.createElement('div')
        textCont.id = 'textcont'
        container.appendChild(textCont)
        const imgvid = document.createElement('span')
        imgvid.id = 'imgvid'
        imgvid.innerHTML = 'Click to take a photo/Press and hold for video'
        textCont.appendChild(imgvid)
        const sliderHelp = document.createElement('span')
        sliderHelp.id = 'sliderHelp'
        sliderHelp.innerHTML = 'Move slider to adjust saturation of model'
        textCont.appendChild(sliderHelp)

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
        openbtn.id = 'openb'
        main.appendChild(openbtn)

        const donebtn = document.createElement('a')
        donebtn.setAttribute('href', 'javascript:void(0)')
        donebtn.onclick = this.done
        donebtn.innerHTML = 'Done'
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
            let hexColor = parseInt(value, 10).toString(16)
            hexColor = pad(hexColor)
            hexColor = "#" + hexColor + hexColor + hexColor
            let mesh = document.getElementById('model').getObject3D('mesh');
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
        sidebar.style.width = "0";
        slide.style.display = "block";
        sliderHelp.style.display = "block"
        textcont.style.display = "block"
        main.style.display = "block"
        openb.style.display = "none"
        done.style.display = "block"
        eng.style.top = "110%"
        franc.style.top = "110%"
        colHelp.style.display = "none"
        camHelp.style.display = "none"
    },

    openCapture: function () {
        document.getElementById('mediarec').style.display = "block"
        textcont.style.display = "block"
        imgvid.style.display = "block"
        sidebar.style.width = "0";
        main.style.display = "block"
        openb.style.display = "none"
        done.style.display = "block"
        eng.style.top = "110%"
        franc.style.top = "110%"
        colHelp.style.display = "none"
        camHelp.style.display = "none"
     },

     openHelp: function () {
        eng.style.top = '65%'
        franc.style.top = '74%'
        colHelp.style.display = 'block'
        camHelp.style.display = 'block'
     },

     showEng: function () {
        colHelp.innerHTML = '❮❮❮❮ Click to adjust saturation'
        camHelp.innerHTML = '❮❮❮❮ Click to take a photo/video'
        imgvid.innerHTML = 'Click to take a photo, Press and hold for video'
        sliderHelp.innerHTML = 'Move slider to adjust saturation of model'
        done.innerHTML = 'Done'
        document.getElementById('downloadButton').innerHTML = 'Download'
     },

     showFranc: function () {
        colHelp.innerHTML = '❮❮❮❮ Cliquez á régler la saturation'
        camHelp.innerHTML = '❮❮❮❮ Cliquez á prendre une photo/vidéo'
        imgvid.innerHTML = 'Cliquez á prendre une photo, appuyer et maintenir pour la vidéo'
        sliderHelp.innerHTML = 'Déplacer le curseur pour ajuster la saturation du modèle'
        done.innerHTML = 'Fini'
        document.getElementById('downloadButton').innerHTML = 'Télécharger'
     },
 
     done: function () {
         done.style.display = "none"
         openb.style.display = "block"
         slide.style.display = "none"
         sliderHelp.style.display = "none"
         imgvid.style.display = "none"
         textcont.style.display = "none"
         document.getElementById('mediarec').style.display = "none"
     }, 

    closeBar: function () {
        sidebar.style.width = "0";
        main.style.display = "block"
        eng.style.top = "110%"
        franc.style.top = "110%"
        colHelp.style.display = "none"
        camHelp.style.display = "none"
    },

    openBar: function () {
        sidebar.style.width = "35%";
        main.style.display = "none"
    } 
})