import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'notes' })
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false, length: 2000 })
  content: string;

  @Column({ nullable: false })
  archived: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
