AFRAME.registerComponent('start-tracking', {
    init: function() {
    const text = document.getElementById('loadingText')
    const CIV = document.createElement('a-entity')

    setTimeout(() => {

      CIV.setAttribute('position', '-5 -1 -5')
      CIV.setAttribute('visible', 'false')
      CIV.setAttribute('scale', '0.0001 0.0001 0.0001')

      CIV.setAttribute('gltf-model', '#3dmodel')
      this.el.sceneEl.appendChild(CIV)

      CIV.addEventListener('model-loaded', () => {
        CIV.setAttribute('visible', 'true')
        CIV.setAttribute('animation', {
          property: 'scale',
          to: '100 100 100',
          easing: 'easeOutElastic',
          dur: 800,
        })
      })
      text.setAttribute('visible', 'false')
    }, 15000)
  }
})