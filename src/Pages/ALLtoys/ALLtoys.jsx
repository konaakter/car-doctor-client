import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStarOfDavid } from 'react-icons/fa';
import { AuthContext } from '../../Provaider/AuthProvider';


const ALLtoys = () => {
    const { user } = useContext(AuthContext)

    const loders = useLoaderData();
    const [datas, setdata] = useState(loders)
   

    return (
        <div>
            <div className=' '>

                <div>
                    <div className=' flex bg-orange-400 p-2 mb-5  text-center iteams-center justify-center'>
                        <FaStarOfDavid className=' t text-xl'></FaStarOfDavid>
                        <div className='  text-3xl font-bold'>
                            <h1>All Cars:{datas.length}</h1>

                        </div>
                        <FaStarOfDavid className='   text-xl'></FaStarOfDavid>
                    </div>
                   

                    <div className="overflow-x-auto container mx-auto">
                        <table className="min-w-full">
                            <thead className=' bg-slate-400'>
                                <tr>
                                    <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                        ID
                                    </th>
                                    <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                        Photo
                                    </th>
                                    <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                        Name
                                    </th>
                                    <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                        Date
                                    </th>
                                    <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                        Services
                                    </th>
                                    <th className="py-3 px-6 text-left text-xs font-semibold uppercase tracking-wider text-white">
                                        Veiws more
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-cyan-400">



                                {
                                    datas.map(data =>


                                        <tr className=' hover:bg-gray-200 transition-colors duration-300 delay-300' >
                                            <th>1</th>

                                            <td className="py-4 px-6 whitespace-nowrap">
                                                {
                                                    data.img && <img className=' w-64 h-48' src={data.img} alt="" />
                                                }
                                            </td>
                                            <td className="py-4 px-6 whitespace-nowrap">{data.customerName}</td>
                                            <td className="py-4 px-6 whitespace-nowrap">{data.date}</td>
                                            <td className="py-4 px-6 whitespace-nowrap">{data.service}</td>
                                            <td className="py-4 px-6 whitespace-nowrap"> <Link to={`/tabone/${data._id}`}><button className=' btn btn-warning px-5 py-2 border-2 text-white  rounded hover:bg-cyan-400 transition-colors duration-200 delay-500'>viwe details</button></Link></td>

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default ALLtoys;