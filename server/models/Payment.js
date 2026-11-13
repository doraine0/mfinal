module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    amount_paid: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    balance: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    payment_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });
  Payment.association = (models) => {
    Payment.belongsTo(models.LaundryOrder);
  };

  return Payment;
};
