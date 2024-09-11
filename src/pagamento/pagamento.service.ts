import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PagamentoDTO } from './dto/pagamento.dto';

@Injectable()
export class PagamentoService {
    constructor(private prisma: PrismaService){}

    async create(data: PagamentoDTO){

        const pagamento = await this.prisma.pagamento.create({
            data,
        })

        return pagamento;

    }

    async findAll(){
        return this.prisma.pagamento.findMany();
    }

    
    

    async update(id: string, data: PagamentoDTO){
        const pagamentoExists = await this.prisma.pagamento.findUnique({
            where: {
                id,
            }
        })

        if(!pagamentoExists){
            throw new Error("O pagamento não existe");
        }

        return await this.prisma.pagamento.update({
            data,
            where: {
                id,
            }
        })
    }

    async delete(id: string){
        const pagamentoExists = await this.prisma.pagamento.findUnique({
            where: {
                id,
            }
        })

        if(!pagamentoExists){
            throw new Error("O Pagamento não existe");
        }

        return await this.prisma.pagamento.delete({
            where: {
                id,
            }
        })
    }

}
