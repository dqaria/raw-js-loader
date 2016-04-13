/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Daqi Song
*/
var hljs = require('highlight.js');

module.exports = function(content, map) {
  this.cacheable && this.cacheable();
  this.value = map.sourcesContent[0];

  var sourceCode = map.sourcesContent[0];
  var highlightedCode = hljs.highlightAuto(sourceCode).value;

  return "module.exports = " + JSON.stringify(highlightedCode);
}
module.exports.seperable = true;