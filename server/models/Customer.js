const Laundry_Order = require("./LaundryOrder");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  //association
  Customer.associate = (models) => {
    Customer.hasMany(models.LaundryOrder);
  };

  return Customer;
};
