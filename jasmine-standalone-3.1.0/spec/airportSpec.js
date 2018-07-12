'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
    weather = jasmine.createSpyObj('_weather', ['isStormy'])
  });

  it('no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });
  describe('under normal conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(false)
    });

    it('can clear planes for landing', function() {
      airport.clearForLanding(plane)
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function() {
      airport.clearForLanding(plane)
      airport.clearForTakeOff(plane)
      expect(airport.planes()).toEqual([]);
    });
  });

// it('can check for stormy condition', function() {
//   expect(airport.isStormy()).toBeFalsy();
// });

  describe('under stormy conditions', function() {
    beforeEach(function() {
      weather.isStormy.and.returnValue(true)
    });

    it('does not clear planes for takeoff', function() {
      // spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForTakeOff(plane);}).toThrowError('cannot takeoff during storm')
    });

    it('does not clear planes for land', function() {
      // spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function(){ airport.clearForLanding(plane);}).toThrowError('cannot land during storm')
    });
  });
});
