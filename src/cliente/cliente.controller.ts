import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDTO } from './dto/cliente.dto';

@Controller('cliente')
export class ClienteController {

    constructor (private readonly clienteService: ClienteService){}

    @Post()
    async create(@Body() data: ClienteDTO){
        return this.clienteService.create(data);
    }

    @Get()
    async findAll(){
        return this.clienteService.findAll();
    }

    @Get('/orderByCliente')
    async order(){
        return this.clienteService.contCliente();
    }

    @Get(":id")
    async findOne(@Param("id") id: string,){
        return this.clienteService.findOne(id);
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body() data:ClienteDTO){
        return this.clienteService.update(id, data);
    }

    @Delete(":id")
    async delete(@Param('id') id: string){
        return this.clienteService.delete(id);
    }
}
