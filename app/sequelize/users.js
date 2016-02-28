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
			type: Sequelize.JSONB,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "User seat"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_seat" }
		},
		user_google: {
			type: Sequelize.JSONB,
			allowNull: true,
			hasComment: {type: Sequelize.STRING, field: "User google credentials"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_google" }
		},
		user_facebook: {
			type: Sequelize.JSONB,
			allowNull: true,
			hasComment: {type: Sequelize.STRING, field: "User facebook credentials"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_facebook" }
		},
		user_twitter: {
			type: Sequelize.JSONB,
			allowNull: true,
			hasComment: {type: Sequelize.STRING, field: "User twitter credentials"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_twitter" }
		},
		user_data: {
			type: Sequelize.JSONB,
			allowNull: true,
			hasComment: {type: Sequelize.STRING, field: "Additional user data blob"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "user_data" }
		}
	},
	{
		tableName: 'users',
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