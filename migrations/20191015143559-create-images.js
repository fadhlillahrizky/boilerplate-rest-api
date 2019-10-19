'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      webtoonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'webtoons',
            key: 'id'
        },    
      },
      episodeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'episodes',
            key: 'id'
        },    
      },
      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('images');
  }
};