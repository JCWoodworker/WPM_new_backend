import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn("uuid")
  projectId: string;

  @Column({})
  name: string;

  @Column({ nullable: true })
  customerId: number;

  @Column({})
  userId: string;

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
}