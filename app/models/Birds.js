/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Birds', { 
    birdId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'bird_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'name'
    },
    birdTypeId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'bird_type_id'
    },
    birdLevelId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'bird_level_id'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'status'
    },
    healthValue: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'health_value'
    },
    fortuneValue: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'fortune_value'
    },
    luckValue: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'luck_value'
    },
    price: {
      type: 'DOUBLE',
      allowNull: true,
      field: 'price'
    },
    conditionId: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'condition_id'
    },
    isOnline: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
      field: 'is_online'
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
