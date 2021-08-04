AFRAME.registerComponent('start-tracking', {
    init: function() {
    const container = document.getElementById('container')
    container.style.backgroundImage = "url('assets/stabilization.gif')"
 
    setTimeout(() => {
      const CIV = document.createElement('a-entity')
      CIV.id = 'model'
      CIV.setAttribute('gltf-model', '#3dmodel')
      this.el.sceneEl.appendChild(CIV) 
      CIV.setAttribute('position', '0 0 -5')
      CIV.setAttribute('rotation', '0 225 0')
      CIV.setAttribute('scale', '1 1 1')
      CIV.setAttribute('visible', 'true')
      //text.setAttribute('visible', 'false')
      container.style.backgroundImage = "none"
    }, 15000)
  }
})