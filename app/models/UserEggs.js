/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserEggs', { 
    userEggId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_egg_id'
    },
    eggId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'egg_id'
    },
    gotTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'got_time'
    },
    poundTimes: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'pound_times'
    },
    feedTimes: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'feed_times'
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
      field: 'done'
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
