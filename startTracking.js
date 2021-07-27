AFRAME.registerComponent('start-tracking', {
    init: function() {
    const text = document.getElementById('loadingText')
    const capture = document.getElementById('capbtn')
    const container = document.getElementById('container')
    container.style.backgroundImage = "url('assets/stabilization.gif')"
 
    setTimeout(() => {
      const CIV = document.createElement('a-entity')
      CIV.id = 'model'
      CIV.setAttribute('gltf-model', '#3dmodel')
      this.el.sceneEl.appendChild(CIV) 
      CIV.setAttribute('position', '0 0 -5')
      CIV.setAttribute('rotation', '0 225 0')
      CIV.setAttribute('scale', '0.5 0.5 0.5')
      CIV.setAttribute('visible', 'true')
      text.setAttribute('visible', 'false')
      capture.setAttribute('visible', 'true')
      container.style.display = "none"
    }, 15000)
  }
})