/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GamePlayedRecords', { 
    recordId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'record_id'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_id'
    },
    fightTo: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'fight_to'
    },
    gameResult: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'game_result'
    },
    sceneId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'scene_id'
    },
    birdId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'bird_id'
    },
    itemHashValue: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'item_hash_value'
    },
    mirrorData: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'mirror_data'
    },
    checkPoint: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'check_point'
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
