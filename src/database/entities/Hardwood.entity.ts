import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'hardwoods' })
export class HardwoodEntity {
  @PrimaryGeneratedColumn('uuid')
  hardwoodId: string;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  region: string;

  @Column({ nullable: false, type: 'int' })
  jankaHardness: number;

  @Column({ nullable: true, type: 'varchar' })
  price: number;

  @Column({ nullable: false, type: 'varchar' })
  priceType: string;

  @Column({ nullable: false, type: 'varchar' })
  imageUrl: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
