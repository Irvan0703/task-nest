import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('audit_logs')
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string;

  @Column()
  entity: string;

  @Column()
  entityId: string;

  @Column()
  performedBy: string;

  @CreateDateColumn()
  createdAt: Date;
}
