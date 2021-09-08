const cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //this is testing if that works just fine
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.uploads = file => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(
            file,
            result => {
                resolve({ url: result.url, id: result.public_id });
            },
            { resource_type: "auto" }
        );
    });
};
