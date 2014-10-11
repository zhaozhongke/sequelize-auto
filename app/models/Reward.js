/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reward', { 
    rewardId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'reward_id'
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'type'
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'value'
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
