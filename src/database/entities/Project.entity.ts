import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './User.entity';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn("uuid")
  projectId: string;

  @Column({})
  name: string;

  @Column({ nullable: true })
  customerId: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "userId", referencedColumnName: "userId"})
  user: UserEntity

  @Column({})
  description: string;

  @Column({})
  quantity: number;
  
  @Column({})
  laborHours: number;
  
  @Column({})
  stage: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}