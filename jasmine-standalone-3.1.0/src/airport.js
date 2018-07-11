var Airport = function() {
  this.planes = []
}

var Plane = function() {}

Airport.prototype.land = function(plane) {


  if (this.planes.indexOf(plane) == -1) {
    this.planes.push(plane)
    return "Plane landed successfully"
  } else {
    throw new Error("Cannot land: already at airport")
  }
}

Airport.prototype.takeoff = function (plane) {
  var index = this.planes.indexOf(plane)

  if (index == -1) {
    throw new Error('Cannot takeoff: plane not here')
  } else {
    this.planes.splice(index, 1)
  }
}
