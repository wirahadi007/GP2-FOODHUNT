import axios from 'axios';
import React from 'react'
import AdminCard from '../../components/Admin Card/AdminCard'

const AdminPage = props => {
    const [order, getOrder] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://6131f19fab7b1e001799b262.mockapi.io/orders').then(res => getOrder(res.data));
    }, [])

    return (
        <div className="px-8 my-6">
            <h1 className="text-2xl font-bold">Order Admin</h1>
            {order.map(el => <AdminCard {...el} />)}
        </div>
    )
}

export default AdminPage;