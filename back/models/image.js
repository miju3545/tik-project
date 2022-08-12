module.exports = (sequelize, DataTypes) => {
  // 테이블명(images)
  const Image = sequelize.define(
    "Image",
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
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
    db.Image.hasMany(db.User);
  };
  return Image;
};
