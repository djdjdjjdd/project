import multer from "multer";




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/storage')
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.random(Math.random * 1E9);
        cb(null, uniquePrefix + '-' + file.originalname);
    }
});

const fileFilter = function (req, file, cb) {
    const allowMimes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('file type invalid'))
    }
}
const upload = function (req, res, err) {
    if (err instanceof multer.MulterError) {

    } else if (err) {
        console.log(error)
    }
}
export const uploadImage = multer({
    storage,
    upload,
    fileFilter,
    limits: {
        fieldSize: 5 * 1024 // 5MB
    }
});
