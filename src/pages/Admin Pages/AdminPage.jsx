import React from 'react'
import AdminCard from '../../components/Admin Card/AdminCard'

const AdminPage = props => {
    return (
        <div className="px-8 my-4">
            <h1 className="text-2xl font-bold">Order Admin</h1>
            <AdminCard />
            <AdminCard />
            <AdminCard />
        </div>
    )
}

export default AdminPage;