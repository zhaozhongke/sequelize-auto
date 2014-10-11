/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BirdLevel', { 
    birdLevelId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'bird_level_id'
    },
    level: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'level'
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'color'
    },
    minValue: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'min_value'
    },
    maxValue: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'max_value'
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
