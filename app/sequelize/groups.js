module.exports = function(sequelize, Sequelize) {
	
	var Group;
	Group = sequelize.define('Group', {
		event_id: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Parent Event Id"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "event_id" }
		},
		group_id: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Unique Group ID"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "group_id" }
		},
		group_name: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Group name"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "group_name" }
		},
		group_sponsor: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Group sponsor"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "group_sponsor" }
		},
		group_img: {
			type: Sequelize.STRING,
			allowNull: false,
			hasComment: {type: Sequelize.STRING, field: "Group image"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "group_img" }
		}
	},
	{
		tableName: 'Groups',
		deletedAt: 'deleted_at',
		freezeTableName: true,
		paranoid: true,
		underscored: true,
		underscoredAll: true,
		classMethods: {
			associate: function(models) {
				Group.hasMany(models.User, {foreignKey: 'group_id', targetKey: 'group_id'});
				Group.belongsTo(models.Event, {foreignKey: 'event_id', targetKey: 'event_id'});
			}
		},
		instanceMethods: {
		}
	});

	return Group;
};