/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserCostFlow', { 
    userPayItemId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_pay_item_id'
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'type'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_id'
    },
    cost: {
      type: 'DOUBLE',
      allowNull: true,
      field: 'cost'
    },
    value: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'value'
    },
    count: {
      type: 'DOUBLE',
      allowNull: true,
      field: 'count'
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
