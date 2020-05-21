module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'Test1', 
      {
       name: {
        type: DataTypes.STRING(45),
        allowNull : true
       },
       address: {
        type: DataTypes.STRING(45),
        allowNull : true           
       },
       phone: {
        type: DataTypes.STRING(11),
        allowNull : true           
       },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};