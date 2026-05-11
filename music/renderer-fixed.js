// music/renderer-fixed.js - safe, compatible renderer shim until the original is cleaned.
// This script logs that it's loaded and does nothing else; the real renderer is `renderer2.js`.
(function(){
  if (typeof console !== 'undefined') console.log('music/renderer-fixed.js loaded (noop)');
})();
