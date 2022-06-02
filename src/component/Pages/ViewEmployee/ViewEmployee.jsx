import React from 'react';
import Modal_AddEmployee from '../AddEmployee/Modal_AddEmployee';
import Modal_UpdateEmployee from '../UpdateEmployee/Modal_UpdateEmployee';

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

export default function ViewEmployee() {
    return (
        <div class="overflow-x-auto">
            <div class="flex items-center justify-center overflow-hidden">
                <div class="w-full lg:w-6/6">
                    <div class="shadow-md rounded my-6">
                        <table class="min-w-max w-full table-auto">
                            <thead>
                                {/* {
                                    HeadingTable.map((item) => (
                                        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            <th class="py-3 px-6 text-center">{item.name}</th>
                                            {
                                                DataTable.map((item) => (
                                                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                                                        {item.firstname}
                                                    </tr>
                                                ))
                                            }
                                        </tr>
                                    ))
                                } */}
                                <tr>
                                    <th class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">First Name</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">Arif</td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">Last Name</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">Jagad</td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">Email</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">191111851@students.mikroskil.ac.id</td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">Address</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">Mikroskil</td>
                                </tr>
                                <tr>
                                    <th class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">Phone</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">6282167565321</td>
                                </tr>
                            </thead>
                            {/* <tbody class="text-gray-600 text-sm font-light">
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
                                        </tr>
                                    ))
                                }
                            </tbody> */
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
