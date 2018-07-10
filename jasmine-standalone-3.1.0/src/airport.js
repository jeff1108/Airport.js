var Airport = function() {
  this.planes = []
}

var Plane = function() {}

Airport.prototype.land = function(plane) {
  this.planes.push(plane)
  return "Plane landed successfully"
}

Airport.prototype.takeoff = function(plane) {
  // if planes is empty {
  //   raise_error
  // }
  this.planes.pop(plane)
}
