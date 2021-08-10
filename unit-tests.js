let assert = require('assert');
const settingsBill = require('./settings-bill');
let phoneBill = require('./settings-bill');

describe('Settings bill function', function(){
    it('should set the sms cost', function(){
        let phoneBill = SettingsBill();
        phoneBill.setSettings(3.05)
        phoneBill.setSettings(2.7)
        assert.equal(3.05, phoneBill.getSettings());
    });
    it('should be able to set the call cost', function(){
        let phoneBill = settingsBill();
        phoneBill.setSettings(4.23);
        assert.equal(4.23, phoneBill.getSettings());
    });
    
});