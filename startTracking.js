AFRAME.registerComponent('start-tracking', {
    init: function() {
    const text = document.getElementById('loadingText')
    const container = document.getElementById('container')
    container.style.backgroundImage = "url('assets/stabilization.gif')"
 
    setTimeout(() => {
      const CIV = document.createElement('a-entity')
      CIV.id = 'model'
      CIV.setAttribute('gltf-model', '#3dmodel')
      this.el.sceneEl.appendChild(CIV) 
      CIV.setAttribute('position', '0 0 0')
      CIV.setAttribute('rotation', '0 180 0')
      CIV.setAttribute('scale', '0.1 0.1 0.1')
      CIV.setAttribute('visible', 'true')
      CIV.setAttribute('animation', {
        property: 'scale',
        to: '2 2 2',
        easing: 'easeOutElastic',
        dur: 800,
      })
      text.setAttribute('visible', 'false')
      container.style.display = "none"
    }, 15000)
  }
})