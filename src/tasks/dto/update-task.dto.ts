import { TaskStatus } from '../task-status.enum';
import { IsNotEmpty } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsNotEmpty()
  status: TaskStatus;
}
