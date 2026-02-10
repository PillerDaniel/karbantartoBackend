import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Report from './Report';

@Entity()
export default class Category {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    name!: string;

    @OneToMany(() => Report, (report: Report) => report.category)
    reports!: Report[];
}
