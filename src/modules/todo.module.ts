import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoResolver } from 'src/graphql/resolvers/todo.resolver';
import { TodoService } from 'src/services/todo.service';

@Module({
  providers: [TodoResolver, TodoService, PrismaService]
})
export class TodoModule { }
