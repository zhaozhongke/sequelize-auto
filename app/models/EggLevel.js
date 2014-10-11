/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EggLevel', { 
    eggLevelId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'egg_level_id'
    },
    level: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'level'
    },
    pregnancy: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'pregnancy'
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'color'
    },
    recordVersion: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'record_version'
    },
    recordCreateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'record_create_time'
    },
    recordUpdateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'record_update_time'
    },
    recordDeleteTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'record_delete_time'
    }
  }{
    underscored: true,
    underscoredAll:true,
    timestamps:false
});
};
