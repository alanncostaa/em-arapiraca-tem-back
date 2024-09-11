import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteController } from './cliente/cliente.controller';
import { ProjetoService } from './projeto/projeto.service';
import { ClienteService } from './cliente/cliente.service';
import { ClienteModule } from './cliente/cliente.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjetoController } from './projeto/projeto.controller';
import { ProjetoModule } from './projeto/projeto.module';
import { PagamentoController } from './pagamento/pagamento.controller';
import { PagamentoService } from './pagamento/pagamento.service';
import { PagamentoModule } from './pagamento/pagamento.module';
import { TarefaModule } from './tarefa/tarefa.module';
import { TarefaController } from './tarefa/tarefa.controller';
import { TarefaService } from './tarefa/tarefa.service';

@Module({
  imports: [ClienteModule, ProjetoModule, PagamentoModule, TarefaModule],
  controllers: [AppController, ClienteController, ProjetoController, PagamentoController, TarefaController],
  providers: [AppService, ClienteService, ProjetoService, PrismaService, PagamentoService, TarefaService],
})
export class AppModule {}

