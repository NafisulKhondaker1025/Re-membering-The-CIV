AFRAME.registerComponent('start-tracking', {
    init: function() {
      //const ground = document.getElementById('ground')
        // Create new entity for the new object
        const model = document.createElement('a-entity')

        model.setAttribute('position', '0 -1 0')

        model.setAttribute('visible', 'false')
        model.setAttribute('scale', '0.0001 0.0001 0.0001')

        model.setAttribute('gltf-model', '#3dmodel')
        this.el.sceneEl.appendChild(model)

        model.addEventListener('model-loaded', () => {
          // Once the model is loaded, we are ready to show it popping in using an animation
          model.setAttribute('visible', 'true')
          model.setAttribute('animation', {
            property: 'scale',
            to: '1 1 1',
            easing: 'easeOutElastic',
            dur: 800,
          })
        })
    }
  })