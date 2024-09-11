import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { PagamentoDTO } from './dto/pagamento.dto';

@Controller('pagamento')
export class PagamentoController {
    constructor(private pagamentoService: PagamentoService){}

    @Post()
    async create(@Body() data: PagamentoDTO){
        return this.pagamentoService.create(data);
    }

    @Get()
    async findAll(){
        return this.pagamentoService.findAll();
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body() data:PagamentoDTO){
        return this.pagamentoService.update(id, data);
    }

    @Delete(":id")
    async delete(@Param('id') id: string){
        return this.pagamentoService.delete(id);
    }
}
