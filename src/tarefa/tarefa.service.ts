import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TarefaDTO } from './dto/tarefa.dto';

@Injectable()
export class TarefaService {
    constructor (private prisma: PrismaService){}

    async create(data: TarefaDTO){

        const tarefa = await this.prisma.tarefa.create({
            data,
        })

        return tarefa;

    }

    async findAll(){
        return this.prisma.tarefa.findMany();
    }

    async update(id: string, data: TarefaDTO){
        const tarefaExists = await this.prisma.tarefa.findUnique({
            where: {
                id,
            }
        })

        if(!tarefaExists){
            throw new Error("O tarefa não existe");
        }

        return await this.prisma.tarefa.update({
            data,
            where: {
                id,
            }
        })
    }

    async delete(id: string){
        const tarefaExists = await this.prisma.tarefa.findUnique({
            where: {
                id,
            }
        })

        if(!tarefaExists){
            throw new Error("O tarefa não existe");
        }

        return await this.prisma.tarefa.delete({
            where: {
                id,
            }
        })
    }
}
