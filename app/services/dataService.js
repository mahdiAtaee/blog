const mj = require('jalali-moment');

exports.toPersianTime = (data, format = 'YYYY/M/D') => {
    return mj(data).locale('fa').format(format);
};