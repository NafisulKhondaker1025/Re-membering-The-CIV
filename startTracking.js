AFRAME.registerComponent('start-tracking', {
    init: function() {
     // const ground = document.getElementById('ground')
     //const text = document.getElementById('#text')
        // Create new entity for the new object
        const CIV = document.createElement('a-entity')

        // setTimeout(() => {
        //     text.setAttribute('visisble', 'false')
        //   }, 5000)
        CIV.setAttribute('position', '0 -1 0')
        CIV.setAttribute('visible', 'false')
        CIV.setAttribute('scale', '0.0001 0.0001 0.0001')

        CIV.setAttribute('gltf-model', '#3dmodel')
        this.el.sceneEl.appendChild(CIV)

        CIV.addEventListener('model-loaded', () => {
          // Once the model is loaded, we are ready to show it popping in using an animation
          CIV.setAttribute('visible', 'true')
          CIV.setAttribute('animation', {
            property: 'scale',
            to: '1 1 1',
            easing: 'easeOutElastic',
            dur: 800,
          })
        })
    }
  })