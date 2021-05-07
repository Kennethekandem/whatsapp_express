let cloudinary = require('cloudinary');

cloudinary.config({
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.uploads = (file: any) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(
            file,
            (            result: { url: any; public_id: any; }) => {
                resolve({ url: result.url, id: result.public_id });
            },
            { resource_type: "auto" }
        );
    });
};