AFRAME.registerComponent('start-tracking', {
    init: function() {
      const ground = document.getElementById('ground')
      ground.addEventListener('click', event => {
        // Create new entity for the new object
        const model = document.createElement('a-entity')

        // The raycaster gives a location of the touch in the scene
        const touchPoint = event.detail.intersection.point
        model.setAttribute('position', touchPoint)

        const randomYRotation = Math.random() * 360
        model.setAttribute('rotation', '0 ' + randomYRotation + ' 0')

        model.setAttribute('visible', 'false')
        model.setAttribute('scale', '0.0001 0.0001 0.0001')

        model.setAttribute('gltf-model', '#3dmodel')
        this.el.sceneEl.appendChild(model)

        model.addEventListener('model-loaded', () => {
          // Once the model is loaded, we are ready to show it popping in using an animation
          model.setAttribute('visible', 'true')
          model.setAttribute('animation', {
            property: 'scale',
            to: '0.01 0.01 0.01',
            easing: 'easeOutElastic',
            dur: 800,
          })
        })
      })
    }
  })