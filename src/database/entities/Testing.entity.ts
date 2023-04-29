import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'testings' })
export class TestingEntity {
  @PrimaryGeneratedColumn('uuid')
  testingId: string;

  @Column({ nullable: false, type: 'varchar' })
  testingName: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
