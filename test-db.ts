import prisma from './prisma';

async function main() {
  try {
    // Tente listar todos os recortes (assumindo que você já tenha a tabela Recorte criada)
    const recortes = await prisma.recorte.findMany();
    console.log('Recortes:', recortes);
  } catch (error) {
    console.error('Erro ao se comunicar com o banco de dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();