exports.create = (request) => {
    let errors = [];
    if (request.full_name == '') {
        hasErorr = true;
        errors.push('نام نمی تواند خالی باشد !!!');
    }
    if (request.email == '') {
        hasErorr = true;
        errors.push('ایمیل نمی تواند خالی باشد !!!');
    }
    if (request.password == '') {
        hasErorr = true;
        errors.push('کلمه عبور نمی تواند خالی باشد !!!');
    }

    return errors;
};