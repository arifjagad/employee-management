import React from 'react';
import ButtonDelete from '../../Items/ButtonDelete';
import Modal_AddEmployee from '../AddEmployee/Modal_AddEmployee';
import Modal_UpdateEmployee from '../UpdateEmployee/Modal_UpdateEmployee';
import Modal_ViewEmployee from '../ViewEmployee/Modal_ViewEmployee';

const HeadingTable = [
    {
        name: 'First Name'
    }, {
        name: 'Last Name'
    }, {
        name: 'Email'
    }, {
        name: 'Address'
    }, {
        name: 'Phone'
    }, {
        name: 'Action'
    }
]

const DataTable = [
    {
        firstname: 'Arif',
        lastname: 'Jagad',
        email: '191111851@students.mikroskil.ac.id',
        address: 'Mikroskil',
        phone: '6282167565321'
    }, {
        firstname: 'Tito',
        lastname: 'Ardimam',
        email: '191110945@students.mikroskil.ac.id',
        address: 'Mikroskil',
        phone: '6282167565321'
    }, {
        firstname: 'Julius',
        lastname: 'Jigo',
        email: '191112733@students.mikroskil.ac.id',
        address: 'Mikroskil',
        phone: '6282167565321'
    }, {
        firstname: 'Aristo',
        lastname: 'Adi',
        email: '191112920@students.mikroskil.ac.id',
        address: 'Mikroskil',
        phone: '6282167565321'
    }
]

export default function ViewAllEmployee() {
    return (
        <div class="overflow-x-auto">
            <div class="flex items-center justify-center overflow-hidden">
                <div class="w-full lg:w-4/6">
                    <Modal_AddEmployee/>
                </div>
            </div>
            <div class="flex items-center justify-center overflow-hidden">
                <div class="w-full lg:w-4/6">
                    <div class="shadow-md rounded my-6">
                        <table class="min-w-max w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    {
                                        HeadingTable.map(
                                            (item) => (<th class="py-3 px-6 text-center">{item.name}</th>)
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 text-sm font-light">
                                {
                                    DataTable.map((item, key) => (
                                        <tr key={key} class="border-b border-gray-200 hover:bg-gray-100">
                                            <td class="py-3 px-6 text-center font-normal">
                                                {item.firstname}
                                            </td>
                                            <td class="py-3 px-6 text-center font-normal">
                                                {item.lastname}
                                            </td>
                                            <td class="py-3 px-6 text-center font-normal">
                                                {item.email}
                                            </td>
                                            <td class="py-3 px-6 text-center font-normal">
                                                {item.address}
                                            </td>
                                            <td class="py-3 px-6 text-center font-normal">
                                                {item.phone}
                                            </td>
                                            <td class="py-3 px-6 text-center font-normal">
                                                <div class="flex item-center justify-center">
                                                    <Modal_ViewEmployee/>
                                                    <Modal_UpdateEmployee/>
                                                    <ButtonDelete/>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
