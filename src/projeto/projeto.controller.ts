import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { ProjetoDTO } from './dto/projeto.dto';

@Controller('projeto')
export class ProjetoController {
    constructor (private readonly projetoService: ProjetoService){}

    @Post()
    async create(@Body() data: ProjetoDTO){
        return this.projetoService.create(data);
    }

    @Get()
    async findAll(){
        return this.projetoService.findAll();
    }

    @Get('/contProjs')
    async contProj(){
        return this.projetoService.contProjetos();
    }

    @Get(":id")
    async findByClient(@Param("id") id: string,){
        return this.projetoService.findByClient(id);
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body() data:ProjetoDTO){
        return this.projetoService.update(id, data);
    }

    @Delete(":id")
    async delete(@Param('id') id: string){
        return this.projetoService.delete(id);
    }
}
