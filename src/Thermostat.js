
function Thermostat (){
  // this.DEFAULTTEMP = 20;
  this.temperature = 20;
  this.minimumTemp = 10;
  this.maximumTemp = 25;
  this.colour = 'yellow';
  this.mode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemp()){
    return;
  }
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()){
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this.temperature === this.minimumTemp;
};

Thermostat.prototype.powerSaving = function() {
  if (this.mode) {
    this.maximumTemp = 32;
    this.mode = false;
  } else {
    this.maximumTemp = 25;
    this.mode = true;
  }
};

Thermostat.prototype.isMaximumTemp = function() {
  return this.temperature === this.maximumTemp;
};

Thermostat.prototype.resetTemp = function() {
  return (this.temperature = 20);
};

Thermostat.prototype._setColour = function() {
  switch (true) {
    case this.temperature < 18:
      this.colour = 'green';
    break;

    case this.temperature > 24:
      this.colour = 'red';
    break;

    default: this.colour = 'yellow';

  }
};

Thermostat.prototype.getColour = function() {
  this._setColour();
  return this.colour;
};
