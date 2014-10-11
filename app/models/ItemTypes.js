/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ItemTypes', { 
    itemTypeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'item_type_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'name'
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'desc'
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'avatar'
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
