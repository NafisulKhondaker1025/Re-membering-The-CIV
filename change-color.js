// AFRAME.registerComponent('change-color', {
//     init: function () {
//         const container = document.getElementById('sidebar')
//         const slider = document.createElement('input')
//         slider.className = 'slider'
//         slider.setAttribute('type', 'range')
//         slider.setAttribute('min', '0')
//         slider.setAttribute('max', '255')
//         slider.setAttribute('value', '255')
//         container.appendChild(slider)
//         slider.oninput = this.update(slider.value).bind(this)
//     },
//     update: function (value) {
//       // var value = document.getElementById('slide').value
//       const hexColor = "#" + value.toString(16) + value.toString(16) + value.toString(16)
//       console.log(hexColor)
//       var mesh = this.el.getObject3D('mesh');
//       //if (!mesh) { return; }
//       mesh.traverse(function (node) {
//         if (node.isMesh) {
//           node.material.color = new THREE.Color(hexColor);
//           node.material.needsUpdate = true;
//         }
//       });
//     }
//   });

AFRAME.registerComponent('change-color', {
    init: function () {
      //this.el.addEventListener('model-loaded', this.update.bind(this));
    },
    update: function () {
      var mesh = this.el.getObject3D('mesh');
      //var opacity = 0.7;
      if (!mesh) { return; }
      mesh.traverse(function (node) {
        if (node.isMesh) {
          //node.material.opacity = opacity;
          node.material.color =  new THREE.Color('#ff0000');
          node.material.needsUpdate = true;
        }
      });
    }
  });