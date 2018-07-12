function Weather() {
  this._chance_of_stormy = 0.5;
}

// Math.random() = 0 to 1
Weather.prototype.isStormy = function() {
  return(Math.random() > this._chance_of_stormy)
}
