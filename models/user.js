var connection = require("./connection");
var Sequelize = connection.Sequelize;
var sequelize = connection.sequelize;

var User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING(64),
    validate: {is: /^[a-f0-9]{64}$/i},
  },
  salt: {
    type: Sequelize.STRING(64),
    validate: {is: /^[a-f0-9]{64}$/i},
  },
  password: {
    type: Sequelize.STRING(512),
    validate: {is: /^[a-f0-9]{512}$/i},
  },
  username: {
    type: Sequelize.STRING
  }
});

User.associate = function(models){
  User.hasMany(models.Garment, {
    onDelete: "cascade"
  });
};

module.exports = User;