import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  })
  role: 'ADMIN' | 'USER';

  @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];
}
