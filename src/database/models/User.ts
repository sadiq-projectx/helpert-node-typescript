import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "users",
  modelName: "User",
})
class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
    unique: true,
  })
  declare mobile: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  declare username: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare password: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare first_name: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare last_name: string | null;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  declare dob: Date | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare profile_picture: string | null;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  })
  declare is_mobile_verified: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  })
  declare is_email_verified: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  })
  declare is_active: boolean;

  @DeletedAt
  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: null,
  })
  declare deleted_at: Date | null;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: new Date(),
  })
  declare created_at: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: new Date(),
  })
  declare updated_at: Date;
}

export default User;
