/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Scenes', { 
    sceneId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'scene_id'
    },
    sceneData: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'scene_data'
    },
    sceneHashValue: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'scene_hash_value'
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
