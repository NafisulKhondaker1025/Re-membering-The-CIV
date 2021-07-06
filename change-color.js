AFRAME.registerComponent('change-color', {
    init: function () {
      const slider = document.getElementById('slide')
      slider.oninput = this.update.bind(this)
    },
    update: function () {
      var value = document.getElementById('slide').value
      const hexColor = "#" + value.toString(16) + value.toString(16) + value.toString(16)
      console.log(hexColor)
      var mesh = this.el.getObject3D('mesh');
      //if (!mesh) { return; }
      //mesh.traverse(function (node) {
        if (node.isMesh) {
          node.material.color = new THREE.Color(hexColor);
          node.material.needsUpdate = true;
        }
      //});
    }
  });