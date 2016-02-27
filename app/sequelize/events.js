module.exports = function(sequelize, Sequelize) {
	
	var Event;
	Event = sequelize.define('Event', {
		client_id: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Parent Client Id"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "client_id" }
		},
		event_id: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Unique Event ID"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "event_id" }
		},
		event_name: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Event name"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "event_name" }
		},
		event_date: {
			type: Sequelize.DATE,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Event name"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "event_date" }
		},
		event_loc: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Event location"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "event_loc" }
		},
		event_desc: {
			type: Sequelize.TEXT,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Event description"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "event_desc" }
		}
	},
	{
		tableName: 'Events',
		deletedAt: 'deleted_at',
		freezeTableName: true,
		paranoid: true,
		underscored: true,
		underscoredAll: true,
		classMethods: {
			associate: function(models) {
				Event.hasMany(models.Group, {foreignKey: 'event_id', targetKey: 'event_id'});
				Event.belongsTo(models.Client, {foreignKey: 'client_id', targetKey: 'client_id'});
			}
		},
		instanceMethods: {
		}
	});

	return Event;
};