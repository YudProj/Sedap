import { useEffect, useState } from 'react';
import PageHeader from "../components/PageHeader";
import ordersData from "../orders.json"; 
import { Link } from 'react-router-dom';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Set data orders ke state
        setOrders(ordersData);
    }, []);

    return (
        <div id="dashboard-container" className="p-5">
            <PageHeader title="Orders" breadcrumb={["order", "order list"]} />
            <div className="mb-4">
             
                <Link
            to="/orderform"
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Add Order
          </Link>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Order List</h2>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-green-100">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Order ID</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Customer Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Total Price</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase">Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.orderId} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                                <td className="px-6 py-4 text-sm text-gray-800">{order.orderId}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{order.customerName}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Completed' ? 'bg-green-100 text-green-600' : order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800">{order.totalPrice}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{order.orderDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}