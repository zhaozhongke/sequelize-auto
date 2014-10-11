/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AchievementReward', { 
    achievementId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'achievement_id'
    },
    rewardId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'reward_id'
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
