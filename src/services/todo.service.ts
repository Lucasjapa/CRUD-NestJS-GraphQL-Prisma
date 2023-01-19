import { Injectable } from '@nestjs/common';
import { CreateTodoInput, UpdateTodoInput } from 'src/dtos/todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {

  }

  async create(createTodoInput: CreateTodoInput) {
    return await this.prisma.todo.create({
      data: { title: createTodoInput.title }
    });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return this.prisma.todo.update({
      where: { id: id },
      data: { title: updateTodoInput.title }
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({
      where: { id: id }
    });
  }
}
