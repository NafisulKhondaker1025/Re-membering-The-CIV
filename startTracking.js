AFRAME.registerComponent('start-tracking', {
    init: function() {
     // const ground = document.getElementById('ground')
     const text = document.getElementById('text')
    const CIV = document.createElement('a-entity')

    setTimeout(() => {
      console.log('it worked');
      text.setAttribute('value', 'New Text');
      CIV.setAttribute('position', '0 -1 0')
      CIV.setAttribute('visible', 'false')
      CIV.setAttribute('scale', '0.0001 0.0001 0.0001')

      CIV.setAttribute('gltf-model', '#3dmodel')
      this.el.sceneEl.appendChild(CIV)

      CIV.addEventListener('model-loaded', () => {
        CIV.setAttribute('visible', 'true')
        CIV.setAttribute('animation', {
          property: 'scale',
          to: '1 1 1',
          easing: 'easeOutElastic',
          dur: 800,
        })
      })
    }, 5000)
  }
})