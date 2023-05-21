import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string

  @Column({ nullable: false, type: 'varchar' })
  firstName: string

  @Column({ nullable: false, type: 'varchar' })
  lastName: string

  @Column({ unique: true, nullable: false, type: 'varchar' })
  username: string

  @Column({
    nullable: true,
    default: null,
    type: 'bigint',
  })
  cellPhone: number

  @Column({ nullable: false, type: 'varchar' })
  email: string

  @Column({ nullable: false, type: 'varchar' })
  password: string

  @Column({ nullable: false, type: 'varchar' })
  userType: string

  @Column({ nullable: false, type: 'varchar' })
  userIp: string

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
