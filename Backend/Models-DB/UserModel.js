const mongoose = require('mongoose');

(async () => {
    const accountschema = mongoose.Schema({
        fullname: String,
        email: String,
        password: String,
        account_created_time: { type: Date, default: Date.now }
    });

    const usercollection = mongoose.model("UserAccounts", accountschema);

    module.exports = usercollection;
})();
