import React from 'react';
import RowTable from './rowTable';
import '../../styles/table.css'
import { FINE_STATE } from '../../models/fineState.enum';

const Table = ({ fines, pending, search }) => {

    const pendingFines = fines.filter(fine => fine.state !== FINE_STATE.PAID)
    const paidFines = fines.filter(fine => fine.state === FINE_STATE.PAID)

    return (
        <div className="overflow-x-auto relative shadow-md rounded-md min-w-full">
            <table className="w-full text-sm text-center text-gray-500">

                <thead className="text-md uppercase -tracking-widest">

                    <tr>
                        <th scope="col" className="py-7 px-4">
                            Multa
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Fecha
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Placa
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Secretaria
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Infracción
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Estado
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Valor Neto
                        </th>
                        <th scope="col" className="py-7 px-4">
                            Curso
                        </th>
                    </tr>

                </thead>

                <tbody >
                    {search ?

                        (pending ? pendingFines : paidFines).map((fine, index) => (
                            <RowTable key={index} fine={fine} />
                        ))
                        :
                        <td colSpan={8} className='text-center text-lg py-5'>Realiza una busqueda y aquí veras los resultados</td>
                    }
                </tbody>

            </table>
        </div>

    );
}

export default Table;
