const braviaManager = require('./device-managers/bravia'),
    broadlinkManager = require('./device-managers/broadlink'),
    skyManager = require('./device-managers/sky'),
    tivoManager = require('./device-managers/tivo'),
    yeelightManager = require('./device-managers/yeelight'),
    tplinkPlugManager = require('./device-managers/tplink-plug'),
    foscamManager = require('./device-managers/foscam');

let DeviceManagerFactory = function(deviceName) {
    this.deviceManager = null;

    // Remove instance from device name
    deviceName = deviceName.substring(0, deviceName.indexOf('-') > -1 ? deviceName.indexOf('-') : deviceName.length);

    switch (deviceName){
        case 'bravia':
            this.deviceManager = braviaManager;
            return;
        case 'broadlink':
            this.deviceManager = broadlinkManager;
            return;
        case 'sky':
            this.deviceManager = skyManager;
            return;
        case 'tivo':
            this.deviceManager = tivoManager;
            return;
        case 'yeelight':
            this.deviceManager = yeelightManager;
            return;
        case 'tplinkplug':
            this.deviceManager = tplinkPlugManager;
            return;
        case 'foscam':
            this.deviceManager = foscamManager;
            return;
    }
};

module.exports = (deviceName) => {
    return new DeviceManagerFactory(deviceName);
};