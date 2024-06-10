const password = (value, key) => {
    if (value.length < 8) {
        return key.message('password must be at least 8')
    }
    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        return key.message('password must contain at least 1 letter and 1 number');
    }
    return value;
};

module.exports = {
    password
}