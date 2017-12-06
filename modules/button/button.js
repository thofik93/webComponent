var Button = (function(){
  'use strict'

  var el,
      loadingClassName = 'is-loading'
  
  function initButton(element) {
    
    el = element instanceof jQuery ? element : $(element)

    return {
      setLoading: function() {
        return el.addClass(loadingClassName)
      },
      stop: function() {
       return  el.removeClass(loadingClassName)
      }
      $el: el
    }
  }

  return {
    init: function(el) {
      return initButton(el)
    }
  }

})();