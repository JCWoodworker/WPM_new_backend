import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm' 


@Entity({ name: 'abalongs' })
export class AbalongEntity {
	@PrimaryGeneratedColumn("uuid")
	abalongId: string;

	@Column({})
	name: string;

}