/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', { 
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'product_id'
    },
    gameId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'game_id'
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'product_name'
    },
    price: {
      type: 'DOUBLE UNSIGNED',
      allowNull: true,
      field: 'price'
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
