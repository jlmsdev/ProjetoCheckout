import { BsCartPlus } from 'react-icons/bs';
import { useEffect, useState, useContext } from 'react';
import { api } from '../../Services/api';
import { CartContext } from '../../contexts/CartContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


export interface ProdutosProps{
    cover: string;
    description: string;
    id: string;
    price: number;
    title: string;
}

export function Home() {
    const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
    const { AddItemCart } = useContext(CartContext);

    useEffect(() => {
        async function getProdutos() {
            const response = await api.get('/products');
            setProdutos(response.data);
        }
        getProdutos();
    }, [])

    function handleAddCartItem(produto: ProdutosProps) {
        toast.success('Produto Adicionado ao carrinho.')
        AddItemCart(produto);
    }

    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em Alta</h1>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
                    {produtos.map( (produto) => (
                        <section key={produto.id} className="w-full">
                                <Link to={`/produto/${produto.id}`}>
                                <img 
                                    src={produto.cover} 
                                    alt={produto.title} 
                                    className='w-full rounded-lg max-h-70 mb-2'
                                />
                                <p className='font-medium mt-1 mb-2'>{produto.title}</p>
                            </Link>

                            <div className='flex gap-3 items-center h-auto'>
                                <strong className='text-zinc-700/90'>
                                    {produto.price.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </strong>

                                <button onClick={ () => handleAddCartItem(produto) } className='bg-zinc-900 p-1 rounded'>
                                    <BsCartPlus size={20} color='#FFF'/>
                                </button>
                            </div>
                    </section>
                    ))}
                </div>

            </main>
        </div>
    );
}