module.exports = (sequelize, DataTypes) => {
  const LaundryOrder = sequelize.define("LaundryOrder", {
    laundry_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    service_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    weight_kg: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    date_received: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    expected_pickup: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });
  LaundryOrder.association = (models) => {
    LaundryOrder.belongsTo(models.Customer);
    LaundryOrder.hasOne(models.Payment);
    LaundryOrder.HasMany(models.OrderStaff);
  };

  return LaundryOrder;
};
