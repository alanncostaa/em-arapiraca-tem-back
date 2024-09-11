import { Injectable } from '@nestjs/common';
import { ClienteDTO } from './dto/cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PagamentoService } from 'src/pagamento/pagamento.service';

@Injectable()
export class ClienteService {
    constructor(private prisma: PrismaService){}

    async create(data: ClienteDTO){
        const cliente = await this.prisma.cliente.create({
            data,
        });

        return cliente;
    }

    async findAll(){
        return this.prisma.cliente.findMany();
    }

    async findOne(id: string){
        return this.prisma.cliente.findUnique({
            where:{
                id,
            }
        });
    }

    async update(id: string, data: ClienteDTO){
        const clienteExists = await this.prisma.cliente.findUnique({
            where: {
                id,
            }
        })

        if(!clienteExists){
            throw new Error("O Cliente não existe");
        }

        return await this.prisma.cliente.update({
            data,
            where: {
                id,
            }
        })
    }

    async delete(id: string){
        const clienteExists = await this.prisma.cliente.findUnique({
            where: {
                id,
            }
        })

        if(!clienteExists){
            throw new Error("O Cliente não existe");
        }

        return await this.prisma.cliente.delete({
            where: {
                id,
            }
        })
    }
}
