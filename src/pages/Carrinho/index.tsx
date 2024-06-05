import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';


export function Carrinho() {
    const { cart, AddItemCart, removeItemCart, total } = useContext(CartContext);
    const navigate = useNavigate();

    function finalizarCompra() {
        navigate('/compra-finalizada');
        removeItemCart;
    }
    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>


            {cart.length === 0 && (
                <div className='flex flex-col justify-center items-center'>
                    <p className='font-medium mb-3'>Seu carrinho está vazio...</p>
                    <Link to='/' className='bg-slate-600 my-3 p-1 px-2 text-white font-medium rounded'>
                        Ver Produtos
                    </Link>
                </div>
            )}
            {cart.map( (item) => (
                <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
                    <img 
                    src={item.cover}
                    alt={item.title}
                    className="w-28"
                    />
                    <strong className='w-2/12'>{item.title}</strong>
                    <strong>Preço {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</strong>

                    <div className="flex items-center justify-center gap-3">
                        <button onClick={ ()=> removeItemCart((item)) } className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">-</button>
                        <span>{item.amount}</span>
                        <button onClick={ ()=> AddItemCart(item) } className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">+</button>
                    </div>

                    <strong className="float-right">
                        Subtotal: {item.total.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </strong>
                </section>
            ) )}
                {cart.length !== 0 && (
                <p className="font-bold mt-4">
                    Total: {total}
                </p>
                )}

                <div className='mt-4 flex justify-end'>
                    <button onClick={finalizarCompra} className='cursor-pointer p-1 px-4 py-2 border border-slate-200 rounded text-white bg-green-800'>
                        Finalizar Compra
                    </button>
                </div>
        </div>  
    );
}