module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define("Staff", {
    staff_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    staff_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Staff.association = (models) => {
    Staff.hasMany(models.OrderStaff);
  };

  return Staff;
};
