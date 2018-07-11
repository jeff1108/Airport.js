describe('Airport: ', function() {
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  describe('lands a plane', function() {
    it('confirms landing', function() {
      expect(airport.land(plane)).toBe("Plane landed successfully")
    });
  });

  describe('stores landed planes', function() {
    it('stores landed planes', function() {
      airport.land(plane)
      expect(airport.planes).toContain(plane)
    });
  });

  describe('return error', function() {
    it('when already at the airport',function() {
      airport.land(plane)
      expect(function() {airport.land(plane)}).toThrow(new Error("Cannot land: already at airport"))
    });
  });

  describe('takeoff a plane', function() {
    it('confirms takeoff', function() {
      // airport.land(plane)
      airport.takeoff(plane)
      expect(airport.planes).not.toContain(plane)
    });
  });
});
