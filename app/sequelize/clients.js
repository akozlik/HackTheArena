module.exports = function(sequelize, Sequelize) {
	
	var Client;
	Client = sequelize.define('Client', {
		client_id: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Unique Client ID"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "client_id" }
		},
		client_name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Client name"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "client_name" }
		}
	},
	{
		tableName: 'clients',
		deletedAt: 'deleted_at',
		freezeTableName: true,
		paranoid: true,
		underscored: true,
		underscoredAll: true,
		classMethods: {
			associate: function(models) {
				Client.hasMany(models.Event, {foreignKey: 'client_id', targetKey: 'client_id'});
			}
		},
		instanceMethods: {
		}
	});

	return Client;
};