/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserBirds', { 
    userBirdId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'user_bird_id'
    },
    birdId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'bird_id'
    },
    status: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'status'
    },
    kissCount: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'kiss_count'
    },
    hitCount: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'hit_count'
    },
    needCount: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'need_count'
    },
    source: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'source'
    },
    isGivenAway: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
      field: 'is_given_away'
    },
    isSelected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
      field: 'is_selected'
    },
    healthBuff: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'health_buff'
    },
    order: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      field: 'order'
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
