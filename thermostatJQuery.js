thermostat = new Thermostat();

$(document).ready(function() {

  $('#display').html(thermostat.getCurrentTemperature());

  $('#up').click(function() {
    thermostat.up();
    document.getElementById("display").innerHTML = thermostat.getCurrentTemperature(); //JQuery way: $('#display').html();
  });

  $('#down').click(function() {
    thermostat.down();
    document.getElementById("display").innerHTML = thermostat.getCurrentTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    document.getElementById("display").innerHTML = thermostat.getCurrentTemperature();
  });

  $('#off').click(function() {
    thermostat.powerSaving();
    $('#off').html(thermostat.mode);
    console.log(thermostat.mode);
  });





});
