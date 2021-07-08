AFRAME.registerComponent('populate-sidebar', {
    init: function () {
        const container = document.getElementById('sidebar')
        const colorText = document.createElement('a')
        colorText.innerHTML = "Adjust Color"
        container.appendChild(colorText)
        const slider = document.createElement('input')
        slider.className = 'slider'
        slider.id = 'slide'
        slider.setAttribute('type', 'range')
        slider.setAttribute('min', '0')
        slider.setAttribute('max', '255')
        slider.setAttribute('value', '255')
        slider.addEventListener('change', function() {this.changeColor(slider.value)}, false)
        slider.addEventListener('input', function() {this.changeColor(slider.value)}, false)
        container.appendChild(slider)
        
    
        const closebtn = document.createElement('a')
        closebtn.innerHTML = "x"
        closebtn.setAttribute('href', 'javascript:void(0)')
        closebtn.onclick = this.closeBar
        closebtn.className = 'closebtn'
        closebtn.id = 'close'
        container.appendChild(closebtn)

        const main = document.getElementById('main')
        const openbtn = document.createElement('a')
        openbtn.setAttribute('href', 'javascript:void(0)')
        openbtn.onclick = this.openBar
        openbtn.innerHTML = "☰"
        openbtn.className = 'openbtn'
        openbtn.id = 'open'
        main.appendChild(openbtn)
    },

    changeColor: function (value) {
        function pad(num){
            if (num.length<2) {
                num += '0' + num
                return num
            }    
        }
        var hexColor = parseInt(value, 10).toString(16)
        hexColor = pad(hexColor)
        hexColor = "#" + hexColor + hexColor + hexColor
        console.log(hexColor)
        var mesh = document.getElementById('model').getObject3D('mesh');
        if (!mesh) { return; }
        mesh.traverse((node) => {
            if (node.isMesh) {
            node.material.color = new THREE.Color(hexColor);
            node.material.needsUpdate = true;
            }
        });
    },

    closeBar: function () {
        document.getElementById('sidebar').style.width = "0";
        document.getElementById('main').style.display = "block"
        console.log('closed')
    },

    openBar: function () {
        document.getElementById('sidebar').style.width = "150px";
        document.getElementById('main').style.display = "none"
        console.log('opened')
    } 
})