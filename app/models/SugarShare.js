/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SugarShare', { 
    sugarShareId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'sugar_share_id'
    },
    recordId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'record_id'
    },
    sugarCount: {
      type: 'DOUBLE UNSIGNED',
      allowNull: true,
      field: 'sugar_count'
    },
    shareTitle: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'share_title'
    },
    shareDesc: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'share_desc'
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
