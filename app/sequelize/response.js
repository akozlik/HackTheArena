module.exports = function(sequelize, Sequelize) {
	
	var Response;
	Response = sequelize.define('Response', {
		activity_id: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Parent Activity Id"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "activity_id" }
		},
		user_id: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Parent User Id"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_id" }
		},
		response_id: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Unique Response ID"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "response_id" }
		},
		response_name: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Response name"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "response_name" }
		},
		response_data: {
			type: Sequelize.JSONB,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Response name"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "response_data" }
		}
	},
	{
		tableName: 'responses',
		deletedAt: 'deleted_at',
		freezeTableName: true,
		paranoid: true,
		underscored: true,
		underscoredAll: true,
		classMethods: {
			associate: function(models) {
				Response.belongsTo(models.Activity, {foreignKey: 'activity_id', targetKey: 'activity_id'});
				Response.belongsTo(models.User, {foreignKey: 'user_id', targetKey: 'user_id'});
			}
		},
		instanceMethods: {
		}
	});

	return Response;
};