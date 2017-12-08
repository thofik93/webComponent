var qdh = (function(qdh, $){
  'use strict'

  qdh.$window = $(window)
  
  qdh.$body = $('body')

  qdh.isMobile = _isMobile()

  function _isMobile () {
    var isMobile = qdh.$window.width() <= 768 ? true : false 
    return isMobile 
  }

  return qdh

})(qdh || {}, jQuery);