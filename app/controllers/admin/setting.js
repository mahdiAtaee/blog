const settingmodels = require('@models/setting');
const settingConfig = require('./settingConfig');
const dataService = require('@services/dataService');
const commentStatuses = require('./comments/commentStatus');

exports.index = async (req, res) => {
    const settings = await settingmodels.findAll();

    const presentedSettings = {};
    settings.forEach(item => {
        presentedSettings[item.setting_name] = item.setting_value;
    })
    res.adminRender('admin/settings/index', {
        layout: "admin",
        settings: presentedSettings,
        helpers: {
            isChecked: function (item,options) {
                return parseInt(item) === 1 ? "checked" : '';
            }
        }
    });
};

exports.store = async (req, res) => {
    const configs = settingConfig.configs;
    const settings = req.body;

    const send = {
        ...configs,
        ...settings
    }

    const filterSettings = {};
    Object.keys(send).forEach(setting_name => {
        if (send[setting_name] === 'on') {
            filterSettings[setting_name] = 1
        } else {
            filterSettings[setting_name] = send[setting_name]
        }
    });
    const result = await settingmodels.update(filterSettings);

    if (result) {
        req.flash("success", ['تنظیمات با موفقیت تغییر کرد']);
    } else {
        req.flash("errors", ['مشکلی رخ داده و اطلاعات تغییر نکرد!!!']);
    }
    res.redirect('/admin/settings');
}