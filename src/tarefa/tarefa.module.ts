import { Module } from '@nestjs/common';
import { TarefaService } from './tarefa.service';
import { TarefaController } from './tarefa.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TarefaService, PrismaService],
  controllers: [TarefaController]
})
export class TarefaModule {}
