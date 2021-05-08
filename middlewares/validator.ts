let validatorCreateError = require('http-errors')

const middleware = (schema : any, property : any) => {
    return (req : any, res : any, next : any) => {
        const options = {
            errors: {
                wrap: {
                    label: ''
                }
            }
        }
        const { error } = schema.validate(req.body, options);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');

            next(validatorCreateError.UnprocessableEntity(message))

        }
    }
}

module.exports = middleware;
