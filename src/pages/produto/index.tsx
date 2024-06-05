import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../Services/api';
import { ProdutosProps } from '../Home';
import { BsCartPlus } from 'react-icons/bs';
import { CartContext } from '../../contexts/CartContext';
import toast from 'react-hot-toast';



export function Produto() {

    const { id } = useParams();
    const [detalhe, setDetalhe] = useState<ProdutosProps>();
    const {AddItemCart} = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function getProduto() {
            const resposta = await api.get(`/products/${id}`)
            setDetalhe(resposta.data);
        }
        getProduto()
    }, [id])

    function addItem(detalhe: ProdutosProps) {
        toast.success('Item Adicionado.');
        AddItemCart(detalhe);
        navigate('/carrinho');
    }

    return(
        <div>
            <main className='w-full max-w-7xl px-4 mx-auto my-6'>
                {detalhe && (
                    <section className='w-full'>
                        <div className='flex flex-col lg:flex-row'>
                            <img src={detalhe?.cover}
                                alt={detalhe?.description}
                                className='flex-1 w-full max-h-72 object-contain'
                             />

                             <div className='flex-1'>
                                <p className='font-bold text-2xl mt-4 mb-2'>{detalhe?.title}</p>
                                <p className='my-4'>{detalhe?.description}</p>
                                <strong className='text-zinc-700/90 text-xl'>{detalhe?.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>
                                <button className='bg-zinc-900 p-1 rounded ml-3' onClick={ () => addItem(detalhe) }>
                                    <BsCartPlus size={20} color='#fff'/>
                                </button>
                             </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}