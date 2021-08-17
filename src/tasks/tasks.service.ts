import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { V4 as UUID } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: UUID,
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
