import {Column,CreatedAt,DataType,Model,Table,BelongsToMany,UpdatedAt,}from "sequelize-typescript";
//   import { Group } from "../group/group.model";
//   import { Policy } from "../policy/policy.model";
//   import { UserGroup } from "../shared/userGroup.model";
//   import { UserPolicy } from "../shared/userPolicy.model";
  
  @Table({
    freezeTableName: true,
    modelName: "users",
    deletedAt: false,
  })
  export class Users extends Model {
    @Column({
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true,
    })
    id: string;
    @Column({
      type: "varchar",
      allowNull: false,
    })
    firstName: string;
  
    @Column({
      type: "varchar",
      allowNull: false,
    })
    lastName: string;
  
    @Column({
      type: "varchar",
      allowNull: false,
    })
    empCode: string;
  
    @Column({
      type: "varchar",
      allowNull: false,
    })
    mobileNo: string;
  
    @Column({
      type: "varchar",
      allowNull: false,
    })
    emailId: string;
  
    @Column({
      unique: true,
      type: "varchar",
      allowNull: false,
    })
    userId: string;
  
    @Column({
      type: "varchar",
      allowNull: false,
    })
    password: string;
  
    @Column({ defaultValue: true })
    isActive: boolean;
  
    @Column
    imagePath: string;
  
    @Column
    createdBy: string;
  
    @Column
    updatedBy: string;
  
    @Column({ defaultValue: true })
    isFirstLogin: boolean;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  
    @Column
    refreshtoken: string;
  
    @Column
    refreshtokenexpires: Date;
  
    // @BelongsToMany(() => Group, () => UserGroup)
    // groups: Group[];
  
    // @BelongsToMany(() => Policy, () => UserPolicy)
    // policies: Policy[];
  }
  