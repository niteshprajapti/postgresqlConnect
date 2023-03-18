
module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("certificates", {
        id: {
  
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          name: { type: Sequelize.STRING, allowNull: false },
          father_name: { type: Sequelize.STRING, allowNull: false },
          mother_name: { type: Sequelize.STRING, allowNull: false },
          gender: { type: Sequelize.STRING, allowNull: false },
          hospital_name: { type: Sequelize.STRING, allowNull: false },
          weight: { type: Sequelize.STRING, allowNull: false },
          placeofbirth: { type: Sequelize.STRING, allowNull: false },
          dob: { type: Sequelize.STRING, allowNull: false },
          address_birth: { type: Sequelize.STRING, allowNull: false },
          address: { type: Sequelize.STRING, allowNull: false },
    });
  
    return Blog;
  };