var mongoose = require('mongoose');
var validator = require('validator');
var UserSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: true,
    validate: {
      validator(name) {
        return validator.isAlphanumeric(name)
      }
    }
  },
  email: {
    type: String,
    validate: {
      validator(email) {
        return validator.isEmail(email)
      }
    },
    unique: true
  },
  wallet: {
    type: String,
    validate: {
      validator(wallet) {
        return validator.isAlphanumeric(wallet)
      }
    },
    unique: true
  }
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');