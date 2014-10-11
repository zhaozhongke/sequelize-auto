/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Eggs', { 
    eggId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'egg_id'
    },
    eggLevelId: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'egg_level_id'
    },
    totalProgantValue: {
      type: 'DOUBLE',
      allowNull: true,
      field: 'total_progant_value'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'nickname'
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'desc'
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
