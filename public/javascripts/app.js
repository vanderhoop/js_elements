function Model(optionsHash){
  this.options = optionsHash || {};
}

Model.prototype.get = function(property){
  return this.options[property];
}

Model.prototype.set = function(key, value){
  this.options[key] = value;
}

function make$Element(options){
  if (options){
    var $tag = $('<' + options.tagName + '>');
    $tag.attr("class", options.className);
    $tag.attr("id", options.id);
    return $tag;
  } else {
    var $div = $('<div>');
    return $div;
  }
} // make$Element


