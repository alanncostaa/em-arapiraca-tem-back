import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjetoDTO } from './dto/projeto.dto'


@Injectable()
export class ProjetoService {
    constructor(private prisma: PrismaService){}

    async create(data: ProjetoDTO){
        const projeto = await this.prisma.projeto.create({
            data,
        })

        return projeto;
    }

    async findByClient(id_Cliente: string){
        
            return await this.prisma.projeto.findMany({
            where:{
                id_Cliente,
            }
        })
    }

    
    async findAll(){
        return this.prisma.projeto.findMany();
    }

    async contProjetos(){
        return this.prisma.projeto.count();
    }

    async update(id: string, data: ProjetoDTO){
        const projetoExists = await this.prisma.projeto.findUnique({
            where: {
                id,
            }
        })

        if(!projetoExists){
            throw new Error("O Projeto não existe");
        }

        return await this.prisma.projeto.update({
            data,
            where: {
                id,
            }
        })
    }
    async delete(id: string){
        const projetoExists = await this.prisma.projeto.findUnique({
            where: {
                id,
            }
        })

        if(!projetoExists){
            throw new Error("O Projeto não existe");
        }

        return await this.prisma.projeto.delete({
            where: {
                id,
            }
        })
    }

}
