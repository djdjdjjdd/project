export const password = (value, key) => {
    if (value.length < 8) {
        return key.message('password must be at least 8')
    }
    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        return key.message('password must contain at least 1 letter and 1 number');
    }
    return value;
};

export const OBJECT_ID_RULE = /^[0-9a-fA-F]{24}$/
export const OBJECT_ID_RULE_MESSAGE = 'Your string fails to match the Object Id pattern!'