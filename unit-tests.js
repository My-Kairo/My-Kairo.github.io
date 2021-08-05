let assert = require('assert');
let phoneBill = require('./settings-bill');

describe('Settings bill function', function(){
    it('should set the sms cost', function(){
        let phoneBill = SettingsBill();
        phoneBill.setSettings(3.05)
        phoneBill.setSettings(2.7)
        assert.equal(3.05, phoneBill.getSettings());
    });
});