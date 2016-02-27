module.exports = function(sequelize, Sequelize) {
	
	var Activity;
	Activity = sequelize.define('Activity', {
		event_id: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Parent Event Id"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "event_id" }
		},
		activity_id: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Unique Activity ID"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "activity_id" }
		},
		activity_name: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Activity name"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "activity_name" }
		}
	},
	{
		tableName: 'Activities',
		deletedAt: 'deleted_at',
		freezeTableName: true,
		paranoid: true,
		underscored: true,
		underscoredAll: true,
		classMethods: {
			associate: function(models) {
				Activity.hasMany(models.Response, {foreignKey: 'response_id', targetKey: 'response_id'});
				Activity.belongsTo(models.Event, {foreignKey: 'event_id', targetKey: 'event_id'});
			}
		},
		instanceMethods: {
		}
	});

	return Activity;
};