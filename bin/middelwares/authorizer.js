"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizer = void 0;
const authentication_model_1 = require("../models/authentication.model");
const authorizer = (req, resp, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            resp.status(401).send({ message: `Unauthorized` });
            return;
        }
        const { id, email } = authentication_model_1.Authentication.verifyToken(token);
        resp.locals.authId = id;
        resp.locals.authEmail = email;
        next();
    }
    catch (e) {
        const error = e;
        const message = error.message.replace("jwt", "login token");
        resp.status(401).send({ message });
    }
};
exports.authorizer = authorizer;
//# sourceMappingURL=authorizer.js.map