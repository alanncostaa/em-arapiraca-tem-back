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

    @Get('/contPag')
    async contPag(){
        return this.pagamentoService.contPag();
    }

    @Get('/somPag')
    async somPag(){
        return this.pagamentoService.somarPag();
    }

    @Get(":id")
    async findOne(@Param("id") id_Projeto: string){
        return this.pagamentoService.findOne(id_Projeto);
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
