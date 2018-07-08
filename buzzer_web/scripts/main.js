var main = (function(){

  function _setup() {
    alert("HELLO, Josiah!! I love you, buddy!");
  }

  $(document).ready(function(){
    _setup();
  })
  return {
    setup: _setup
  }
})();
