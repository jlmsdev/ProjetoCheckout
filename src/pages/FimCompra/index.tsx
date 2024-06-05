import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect } from 'react';


export function FimCompra() {
    useEffect(() => {
        toast.success('Compra finalizada com sucesso.');
    }, [])

    return(
        <div className="w-full max-h-full flex justify-center items-center mt-10 flex-col">
            <p>
                Compra Finalizada com sucesso
            </p>
            <Link to='/' className='mt-10 border p-4 rounded bg-green-800 text-white text-lg'>
                Ver mais produtos
            </Link>
        </div>
    )
}