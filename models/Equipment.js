var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const EquipmentSchema = new Schema ({

})


var Equipment = mongoose.model("Character", EquipmentSchema);

// Export the User model
module.exports = Equipment;