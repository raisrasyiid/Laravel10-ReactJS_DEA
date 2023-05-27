import Navbar from '@/Components/Homepage/Navbar';
import { Link, Head } from '@inertiajs/react';
import React from 'react';


export default function Homepage(props){
    return(
        <div className=' min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar/>
            <div>
            {props.news ? props.news.map((data, i) => {
                return ( 
                    <div key={i} className='p-4 m-2 bg-white text-black shadow-md round-md'>
                        <p className='text-2xl'>{data.title}</p>
                        <p>{data.description}</p>
                        <i className='text-sm'>{data.category}</i>
                        <i className='text-sm'>{data.author}</i>
                    </div>
                )
            }): <p>Saat ini belum ada berita tersedia</p>}
            </div>
        </div>
    )
}