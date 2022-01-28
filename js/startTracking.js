/* This file is the first contact point for anyone opening the application. It give the appliaction 15 seconds to start tracking the ground
before spawning the structure. This give the user time to position the phone correctly to avoid tracking unnecessary objects and surfaces.
The respective position, scale and rotation of the augment is also defined here. */

AFRAME.registerComponent('start-tracking', {
    init: function() {
    const container = document.getElementById('container')                  // Call the container id on the screen
    container.style.backgroundImage = "url('./assets/stabilization.gif')"     // Set the floating hand gif
 
    setTimeout(() => {
      const CIV = document.createElement('a-entity')                        // Create the entity in the scene 
      CIV.id = 'model'                                                      // Call the 3D file of the structure
      CIV.setAttribute('gltf-model', '#3dmodel')                            // Set its attribute as a gltf file format (though actual file format is glb)
      this.el.sceneEl.appendChild(CIV)                                      // add it to the scene
      CIV.setAttribute('position', '0 0 0')                                 // Set all the model attributes
      CIV.setAttribute('rotation', '0 180 0')
      CIV.setAttribute('scale', '1 1 1')
      CIV.setAttribute('visible', 'true')
      container.style.backgroundImage = "none"
    }, 15000)                                                               // 15 second delay for user to position phone correctly
  }
})


