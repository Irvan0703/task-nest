import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Task } from './entities/task.entity';
import { AuditLog } from 'src/audit/audit-log.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
    private readonly dataSource: DataSource
  ) {}

  async createTaskWithAudit(
    title: string,
    description: string,
    userId: string,
  ) {
    return this.dataSource.transaction(async (manager) => {
      // 1️⃣ Insert Task
      const task = manager.create(Task, {
        title,
        description,
        user: { id: userId },
      });

      const savedTask = await manager.save(task);

      // 2️⃣ Insert Audit Log
      const audit = manager.create(AuditLog, {
        action: 'CREATE',
        entity: 'TASK',
        entityId: savedTask.id.toString(),
        performedBy: userId,
      });

      await manager.save(audit);

      return savedTask;
    });
  }

  findMyTasks(userId: string) {
    return this.taskRepo.find({
      where: { user: { id: userId } },
    });
  }

  findAll() {
     return this.taskRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
