module.exports = function(sequelize, Sequelize) {
	
	var User;
	User = sequelize.define('User', {
		group_id: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Parent Group Id"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "group_id" }
		},
		user_id: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Unique User ID"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_id" }
		},
		user_email: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "User email"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_email" }
		},
		user_seat: {
			type: Sequelize.JSON,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "User seat"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_seat" }
		},
		user_data: {
			type: Sequelize.JSON,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "User data blob"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_data" }
		}
	},
	{
		tableName: 'Users',
		deletedAt: 'deleted_at',
		freezeTableName: true,
		paranoid: true,
		underscored: true,
		underscoredAll: true,
		classMethods: {
			associate: function(models) {
				User.belongsTo(models.Group, {foreignKey: 'group_id', targetKey: 'group_id'});
				User.hasMany(models.Response, {foreignKey: 'user_id', targetKey: 'user_id'});
			}
		},
		instanceMethods: {
		}
	});

	return User;
};