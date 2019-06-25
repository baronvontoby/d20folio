var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unqiue: true
    },
    password: {
        type: String
    },
    characters: [
        {
            type: Schema.Types.ObjectId,
            ref:'Character'
        }
    ]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;