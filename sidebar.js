AFRAME.registerComponent('populate-sidebar', {
    init: function () {
        const sidebar = document.getElementById('sidebar')
        const main = document.getElementById('main')
        const colorbtn = document.createElement('a')
        colorbtn.setAttribute('href', 'javascript:void(0)')
        colorbtn.innerHTML = "Adjust Color"
        colorbtn.onclick = this.openSlider
        sidebar.appendChild(colorbtn)
        const slider = document.createElement('input')
        slider.className = 'slider'
        slider.id = 'slide'
        slider.setAttribute('type', 'range')
        slider.setAttribute('min', '0')
        slider.setAttribute('max', '255')
        slider.setAttribute('value', '255')
        main.appendChild(slider)
        slider.style.display = "none"
        
    
        const closebtn = document.createElement('a')
        closebtn.innerHTML = "x"
        closebtn.setAttribute('href', 'javascript:void(0)')
        closebtn.onclick = this.closeBar
        closebtn.className = 'closebtn'
        closebtn.id = 'close'
        sidebar.appendChild(closebtn)

        const openbtn = document.createElement('a')
        openbtn.setAttribute('href', 'javascript:void(0)')
        openbtn.onclick = this.openBar
        openbtn.innerHTML = "☰"
        openbtn.className = 'openbtn'
        openbtn.id = 'open'
        main.appendChild(openbtn)

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