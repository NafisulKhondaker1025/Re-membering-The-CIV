AFRAME.registerComponent('populate-sidebar', {
    init: function () {
        const container = document.getElementById('sidebar')
        const colorText = container.createElement('a')
        colorText.innerHTML = "Adjust Color"
        const slider = container.createElement('input')
        slider.className = 'slider'
        slider.setAttribute('type', 'range')
        slider.setAttribute('min', '0')
        slider.setAttribute('max', '255')
        slider.setAttribute('value', '255')
        slider.oninput = this.changeColor
        
    
        const closebtn = container.createElement('a')
        closebtn.innerHTML = "x"
        closebtn.setAttribute('href', 'javascript:void(0)')
        closebtn.addEventListener('onclick', this.closeBar)
        closebtn.className = 'closebtn'

        const main = document.getElementById('main')
        const openbtn = main.createElement('button')
        openbtn.addEventListener('onclick', this.openBar)
        openbtn.innerHTML = "☰"
        openbtn.className = 'openbtn'
    },

    changeColor: function () {
        const hexColor = "#" + slider.value.toString(16) + slider.value.toString(16) + slider.value.toString(16)
        const model = document.getElementById('model')
        const mesh = model.getObject3D('mesh')
        mesh.traverse(function (node) {
            node.material.color = new THREE.Color(hexColor)
        })
    },

    closeBar: function () {
        container.style.width = "0";
        openbtn.style.display = "inline-block"
    },

    openBar: function () {
        container.style.width = "250px";
        openbtn.style.display = "none"
    } 
})