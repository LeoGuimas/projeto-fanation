'use client'

import { useState } from 'react';

export default function UploadForm() {
  const [formData, setFormData] = useState({
    nome: '',
    ordemExibicao: 0,
    sku: '',
    tipoRecorte: '',
    posicao: '',
    tipoProduto: '',
    material: '',
    cor: '',
    linkImagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/recortes/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Recorte criado com sucesso!');
    } else {
      alert('Erro ao criar recorte');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
      <input type="number" name="ordemExibicao" value={formData.ordemExibicao} onChange={handleChange} placeholder="Ordem de Exibição" />
      <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" />
      <input type="text" name="tipoRecorte" value={formData.tipoRecorte} onChange={handleChange} placeholder="Tipo de Recorte" />
      <input type="text" name="posicao" value={formData.posicao} onChange={handleChange} placeholder="Posição" />
      <input type="text" name="tipoProduto" value={formData.tipoProduto} onChange={handleChange} placeholder="Tipo de Produto" />
      <input type="text" name="material" value={formData.material} onChange={handleChange} placeholder="Material" />
      <input type="text" name="cor" value={formData.cor} onChange={handleChange} placeholder="Cor" />
      <input type="text" name="linkImagem" value={formData.linkImagem} onChange={handleChange} placeholder="Link da Imagem" />
      <button type="submit">Criar Recorte</button>
    </form>
  );
}