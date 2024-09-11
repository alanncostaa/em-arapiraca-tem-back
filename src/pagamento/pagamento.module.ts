import { Module } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PagamentoController } from './pagamento.controller';

@Module({
  providers: [PagamentoService, PrismaService],
  controllers: [PagamentoController]
})
export class PagamentoModule {}
