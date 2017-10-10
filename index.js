//var request = require("request");
var Service, Characteristic;

module.exports = function(homebridge)
{
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-egodom", "Egodom", EgodomAccessory);
}

function EgodomAccessory(log, config)
{
  this.log = log;
  this.name = config["name"];

  this.log("name: %s" , this.name );

}

EgodomAccessory.prototype.getState = function(callback)
{
  that = this;
  this.log('EgodomAccessory.prototype.getState');

}

EgodomAccessory.prototype.setState = function(state, callback)
{
  that = this;
  this.log('EgodomAccessory.prototype.setState');
}

EgodomAccessory.prototype.getServices = function()
{
  return [this.service];
}
