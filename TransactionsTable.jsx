import React, { useState } from 'react';

const TransactionsTable = ({ transactions }) => {
    const [search, setSearch] = useState('');
    const filteredTransactions = transactions.filter(
        (txn) =>
            txn.title.toLowerCase().includes(search.toLowerCase()) ||
            txn.description.toLowerCase().includes(search.toLowerCase()) ||
            txn.price.toString().includes(search)
    );

    return (
        <div>
            <h2>Transactions</h2>
            <input 
                type="text" 
                placeholder="Search transactions..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((txn) => (
                        <tr key={txn.id}>
                            <td>{txn.title}</td>
                            <td>{txn.description}</td>
                            <td>${txn.price}</td>
                            <td>{txn.category}</td>
                            <td>{txn.sold ? 'Yes' : 'No'}</td>
                            <td>{new Date(txn.dateOfSale).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsTable;
