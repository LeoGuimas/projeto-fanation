import { NextApiRequest, NextApiResponse } from 'next';
import prisma from './../../../prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nome, ordemExibicao, sku, tipoRecorte, posicao, tipoProduto, material, cor, linkImagem } = req.body;

    try {
      const recorte = await prisma.recorte.create({
        data: {
          nome,
          ordemExibicao,
          sku,
          tipoRecorte,
          posicao,
          tipoProduto,
          material,
          cor,
          linkImagem,
        },
      });
      res.status(201).json(recorte);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar recorte' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}