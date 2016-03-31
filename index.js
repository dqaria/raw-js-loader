/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Daqi Song
*/
module.exports = function(content, map) {
  this.cacheable && this.cacheable();
  this.value = map.sourcesContent[0];
  return "module.exports = " + JSON.stringify(map.sourcesContent[0]);
}
module.exports.seperable = true;