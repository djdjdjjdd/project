import moment from 'moment';

import crypto from 'crypto';
export const hashString = (data) => {
    return crypto.createHmac(alg, 'example')
        .update(data)
        .digest('hex');
}
export const generateToken = (data, alg = 'sha512') => {
    const header = JSON.stringify({
        alg: alg,
        typ: 'JWT'
    });
    const payload = JSON.stringify({
        ...data,
        // thoi gian tao
        iat: moment().unix(),
        // thoi gian het han
        exp: moment().add(1, 'months').unix()
    });

    const headerBase64 = Buffer.from(header).toString('base64').replace('==', '').replace('=', '');
    const payloadBase64 = Buffer.from(payload).toString('base64').replace('==', '').replace('=', '');
    const signature = hashString(headerBase64 + '.' + payloadBase64);

    return `${headerBase64}.${payloadBase64}.${signature}`;
}