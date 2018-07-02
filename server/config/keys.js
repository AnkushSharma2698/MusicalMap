// keys.js -- figure out a set of credentials to return
if (process.env.NODE_ENV === "production") {
    // we are in production so return the production set of keys
    module.exports = require("./prod");
} else {
    // we are in dev --return the dev set of keys
    module.exports = require("./dev");
}