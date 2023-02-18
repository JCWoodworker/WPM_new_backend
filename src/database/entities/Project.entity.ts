import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  projectId: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ unique: true, nullable: false })
  stage: string;

  @Column({ nullable: false })
  customerId: number;

  @Column({ nullable: false})
  quantity: number;

  @Column({ nullable: false})
  laborHours: number;

  @Column({ nullable: false})
  userid: string;
}