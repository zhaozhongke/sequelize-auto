/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserPayment', { 
    paymentId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'payment_id'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_id'
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'product_id'
    },
    paymentChannel: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'payment_channel'
    },
    discount: {
      type: 'DOUBLE',
      allowNull: true,
      field: 'discount'
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'status'
    },
    doneTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'done_time'
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
