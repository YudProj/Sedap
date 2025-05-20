import { useEffect, useState } from 'react';
import PageHeader from "../components/PageHeader";
import customersData from "../customers.json";
import { Link } from 'react-router-dom';

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        setCustomers(customersData);
    }, []);

    return (
        <div id="dashboard-container" className="p-5">
            <PageHeader title="Customers" breadcrumb={["customer", "customer list"]} />
            
            <div className="mb-4">
                <Link
                    to="/customerform"
                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
                >
                    Add Customer
                </Link>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-green-800">Customer List</h2>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-green-100">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Customer ID</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Phone</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.length > 0 ? (
                            customers.map((customer, index) => (
                                <tr key={customer.customerId} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-green-50`}>
                                    <td className="px-6 py-4 text-sm text-gray-800">{customer.customerId}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{customer.customerName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{customer.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">{customer.phone}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            customer.loyalty === 'Gold' ? 'bg-yellow-200 text-yellow-800' :
                                            customer.loyalty === 'Silver' ? 'bg-gray-300 text-gray-800' :
                                            customer.loyalty === 'Bronze' ? 'bg-amber-700 text  -amber-800' :
                                            'bg-gray-100 text-gray-700'
                                        }`}>
                                            {customer.loyalty}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">No customers found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
