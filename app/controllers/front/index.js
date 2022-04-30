const commentModel = require('@models/comment');
const settingmodels = require('@models/setting');

exports.store = async (req, res) => {

    const {
        user_name,
        user_email,
        user_phone,
        user_comment
    } = req.body;



    const commentData = {
        full_name: user_name,
        email: user_email,
        phone: user_phone,
        comment: user_comment
    };

    const result = await commentModel.store(commentData);

    return res.redirect('/');
}


exports.index = async (req, res) => {
    const settings = await settingmodels.findAll();

    const presentedSettings = {};
    settings.forEach(item => {
        presentedSettings[item.setting_name] = item.setting_value;
    })

    res.render('front/home', {
        layout: "front",
        config: presentedSettings
    });

};

exports.portfolio = (req, res) => {
    res.render('front/portfolio', {
        layout: "front"
    });
}

exports.contact = (req, res) => {
    res.render('front/contact', {
        layout: "front"
    });
};


exports.landing = (req, res) => {
    res.render('front/landing/landing-1', {
        layout: 'landing'
    });
}

exports.ecommerce = (req, res) => {
    res.render('front/ecommerce/index', {
        layout: 'ecommerce'
    })
}
exports.Elearning = (req, res) => {
    res.render('front/Elearning/index', {
        layout: 'Elearning'
    })
}

exports.english = (req, res) => {
    res.render('front/english/index', {
        layout: 'english'
    })
}

exports.resturant = (req, res) => {
    res.render('front/resturant/index', {
        layout: 'resturant'
    });
};