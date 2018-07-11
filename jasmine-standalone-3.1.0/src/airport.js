var Airport = function() {
  this.planes = []
}

var Plane = function() {}

Airport.prototype.land = function(plane) {
  this.planes.push(plane)
  return "Plane landed successfully"
}

Airport.prototype.takeoff = function(plane) {
  var index = this.planes.indexOf(plane)
  if (index > -1) {
    this.planes.splice(index, 1)
  }
}
