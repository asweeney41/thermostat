// 'use strict';

describe ('Thermostat',function(){
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it ('has a default temperature of 20 c',function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('Can be increased by 1 degree', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('Can be decreased by 1 degree', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it ('has a minimum temp of 10 C',function(){
    for (var i=0; i<11; i++){
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a max temperature of 25 when power saving mode is on', function(){
    thermostat.powerSaving();
    for (var i=0; i<6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('has a max temperature of 32 when power saving mode is on', function(){
    thermostat.powerSaving(false);
    for (var i=0; i<13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('can be reset to default temperature', function() {
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);

  });


describe ('Display colour based on temperature', function() {

  it('Displays green when less than 18', function () {
    thermostat.temperature = 16;
    thermostat.getColour();
    expect(thermostat.colour).toEqual('green');
  });

  it('Displays yellow when less than 25', function () {
    thermostat.temperature = 24;
    thermostat.getColour();
    expect(thermostat.colour).toEqual('yellow');
  });

  it('Displays red when over 25', function () {
    thermostat.temperature = 25;
    thermostat.getColour();
    expect(thermostat.colour).toEqual('red');
  });
});

});
