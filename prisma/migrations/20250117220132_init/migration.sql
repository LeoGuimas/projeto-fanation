-- CreateTable
CREATE TABLE "Recorte" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ordemExibicao" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "tipoRecorte" TEXT NOT NULL,
    "posicao" TEXT NOT NULL,
    "tipoProduto" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "linkImagem" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recorte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recorte_sku_key" ON "Recorte"("sku");
