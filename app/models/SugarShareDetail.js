/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SugarShareDetail', { 
    sugarShareDetailId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'sugar_share_detail_id'
    },
    sugarShareId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'sugar_share_id'
    },
    sugarCount: {
      type: 'DOUBLE',
      allowNull: true,
      field: 'sugar_count'
    },
    pkRecordId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'pk_record_id'
    },
    win: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'win'
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
