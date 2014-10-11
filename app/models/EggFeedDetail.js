/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EggFeedDetail', { 
    eggFeedDetailId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'egg_feed_detail_id'
    },
    userEggId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_egg_id'
    },
    feedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'feed_by'
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'type'
    },
    userPayItemId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_pay_item_id'
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
