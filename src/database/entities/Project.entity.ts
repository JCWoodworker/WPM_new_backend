import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  projectId: number;

  @Column({})
  name: string;

  @Column({})
  customerId: number;

  @Column({})
  userId: number;

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