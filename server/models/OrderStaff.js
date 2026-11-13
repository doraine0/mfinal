module.exports = (sequelize, DataTypes) => {
  const OrderStaff = sequelize.define("OrderStaff", {
    assigned_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  OrderStaff.association = (models) => {
    OrderStaff.belongsTo(models.Staff);
    OrderStaff.belongsTo(models.LaundryOrder);
  };

  return OrderStaff;
};
