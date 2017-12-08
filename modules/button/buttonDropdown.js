var qdh = (function(qdh){
  'use strict'

  var buttonDropdown = qdh.buttonDropdown = qdh.buttonDropdown || {}
  

  buttonDropdown.setDropdown = function() {
    console.log('make this button have a dropdown ability')
  }


  buttonDropdown = Object.assign(buttonDropdown, qdh.button)

  return qdh

})(qdh || {});