describe('Airport: ', function() {
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  })

  describe('.land', function() {
    it('confirms landing', function() {
      expect(airport.land(plane)).toBe("Plane landed successfully")
    });

    it('stores landed planes', function() {
      airport.land(plane)
      expect(airport.planes).toContain(plane)
    });

    it('return error when already at the airport',function() {
      airport.land(plane)
      expect(function() {airport.land(plane)}).toThrow(new Error("Cannot land: already at airport"))
    });
  });

  describe('.takeoff', function() {
    it('confirms takeoff', function() {
      airport.land(plane)
      airport.takeoff(plane)
      expect(airport.planes).not.toContain(plane)
    });

    it('return error when already takeoff', function() {
      airport.land(plane)
      airport.takeoff(plane)
      expect(function() {airport.takeoff(plane)}).toThrow(new Error("Cannot takeoff: plane not here"))
    })
  });
});
