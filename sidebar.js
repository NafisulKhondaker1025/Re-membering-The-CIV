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
        //slider.oninput = this.changeColor(slider.value)
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

    // changeColor: function (value) {
    //     const hexColor = "#" + value.toString(16) + value.toString(16) + value.toString(16)
    //     modelMesh = this.el.getObject3D('mesh')
    //     modelMesh.traverse((node) => {
    //         node.material.color = new THREE.Color(hexColor)
    //     })
    // },

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