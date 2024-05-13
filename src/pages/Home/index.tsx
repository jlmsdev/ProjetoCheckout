import { BsCartPlus } from 'react-icons/bs';

export function Home() {
    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em Alta</h1>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
                    <section className="w-full">
                        <img 
                            src="https://i.zst.com.br/thumbs/12/27/31/-267166030.jpg" 
                            alt="Pods" 
                            className='w-full rounded-lg max-h-70 mb-2'
                        />
                        <p className='font-medium mt-1 mb-2'>AirPods Pro</p>

                        <div className='flex gap-3 items-center'>
                            <strong className='text-zinc-700/90'>R$ 1.600,00</strong>

                            <button className='bg-zinc-900 p-1 rounded'>
                                <BsCartPlus size={20} color='#FFF'/>
                            </button>
                        </div>

                    </section>
                </div>

            </main>
        </div>
    );
}