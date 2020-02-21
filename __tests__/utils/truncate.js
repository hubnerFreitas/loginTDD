const { sequelize } = require("../../src/app/models");

module.exports = () => {
  return Prommise.all(
    Object.keys(sequelize.models).map(key => {
      return sequelize.models[key].destroy({
        trucate: true,
        force: true
      });
    })
  );
};
