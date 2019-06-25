var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    imageUrl: String,

    race: {
        type: String,
        enum: ['Elf', 'Dwarf', 'Human']
    },
    class: {
        type: String,
        enum: ['Warrior', 'Mystic', 'Rogue']
    },
    level: {
        type: Number,
        default: 1
    },
    STR: Number,
    DEX: Number,
    CON: Number,
    INT: Number,
    WIS: Number,
    CHA: Number,

    equipment: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Equipment'
        }
    ]
});

var Character = mongoose.model("Character", CharacterSchema);

// Export the User model
module.exports = Character;