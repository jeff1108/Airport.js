'use strict';

describe('Feature Test:', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('under normal conditions', function() {

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0)
    });
    // As an air traffic controller
    // To get passengers to a destination
    // I want to instruct a plane to land at
    // an airport and confirm that it has landed
    it('instructs a plane to land', function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });


    // As an air traffic controller
    // To get passengers to a destination
    // I want to instruct a plane to take off from
    // an airport and confirm that it is no longer in the airport
     it('instructs a plane to takeoff', function() {
       plane.land(airport);
       plane.takeoff();
       expect(airport.planes()).not.toContain(plane);
     });
  });

  describe('under stormy conditions', function() {
    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy
    it('blocks takeoff when weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(0)
      // can land
      plane.land(airport);
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy
    it('blocks land when weather is stormy', function() {
      spyOn(Math, 'random').and.returnValue(1)
      spyOn(airport._weather, 'isStormy').and.returnValue(true);
      expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm');
      expect(airport.planes()).toEqual([]);
    });
  });
});
