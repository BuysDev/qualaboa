'use client'
import Filters from "@/components/filters";
import { useFinalFilter } from '@/lib/stores/filters/final-filter';

const posts = [
  {
    imagem: "https://example.com/imagem1.jpg",
    nome: "Festa no Terraço",
    autor: "João Silva",
    cidade: "São Paulo",
    estado: "SP"
  },
  {
    imagem: "https://example.com/imagem2.jpg",
    nome: "Churras na Lagoa",
    autor: "Maria Oliveira",
    cidade: "Belo Horizonte",
    estado: "MG"
  },
  {
    imagem: "https://example.com/imagem3.jpg",
    nome: "Rolê no Centro Cultural",
    autor: "Carlos Souza",
    cidade: "Recife",
    estado: "PE"
  },
  {
    imagem: "https://example.com/imagem4.jpg",
    nome: "Balada Indie",
    autor: "Ana Lima",
    cidade: "Curitiba",
    estado: "PR"
  },
  {
    imagem: "https://example.com/imagem5.jpg",
    nome: "Sarau na Praça",
    autor: "Bruno Rocha",
    cidade: "Salvador",
    estado: "BA"
  }
];

export default function Page() {
  const finalFilterCity = useFinalFilter((state) => state.City);
  const finalFilterState = useFinalFilter((state) => state.State);

  // Função para verificar se um post corresponde ao filtro
  const filteredPosts = posts.filter((post) => {
    const matchCity = finalFilterCity ? post.cidade.toLowerCase() === finalFilterCity.toLowerCase() : true;
    const matchState = finalFilterState ? post.estado.toLowerCase() === finalFilterState.toLowerCase() : true;
    return matchCity && matchState;
  });

  return (
    <div>
      <Filters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredPosts.map((post, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={post.imagem} alt={post.nome} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.nome}</h2>
              <p className="text-gray-600 mb-1">Autor: {post.autor}</p>
              <p className="text-gray-600">Local: {post.cidade}, {post.estado}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
