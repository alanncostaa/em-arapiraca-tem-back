-- AlterTable
ALTER TABLE "Pagamento" ALTER COLUMN "data" SET DEFAULT '',
ALTER COLUMN "data" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Projeto" ALTER COLUMN "data" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Tarefa" ALTER COLUMN "data" SET DATA TYPE TEXT;