module.exports = (sequelize, DataTypes) => {
  // 테이블명(videos)
  const Video = sequelize.define(
    "Video",
    {
      src: {
        type: DataTypes.STRING(200),
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Video.associate = (db) => {
    db.Video.belongsTo(db.Post);
  };
  return Video;
};
