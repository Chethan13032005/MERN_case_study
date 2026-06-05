import React, { useState } from 'react';
import { TransactionList} from '../components/TransactionList';
import type { Transaction } from '../components/TransactionList';
import { TransactionForm } from '../components/TransactionForm';

export const BankingDashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleNewTransaction = (amount: number, currency: 'USD' | 'EUR') => {
    const newTx: Transaction = {
      id: crypto.randomUUID(),
      amount,
      currency,
      date: new Date(),
    };
    setTransactions(prev => [...prev, newTx]);
  };

  const handleSelectTransaction = (id: string) => {
    console.log(`Transaction selected: ${id}`);
  };

  const netBalanceUSD = transactions.reduce((acc, tx) => {
    const amountInUSD = tx.currency === 'EUR' ? tx.amount * 1.09 : tx.amount;
    return acc + amountInUSD;
  }, 0);

  return (
    <div>
      <h2>Secure Banking Dashboard</h2>
      <h3>Net Balance (in USD): ${netBalanceUSD.toFixed(2)}</h3>
      
      <TransactionForm onSubmit={handleNewTransaction} />
      <TransactionList
        transactions={transactions}
        onSelect={handleSelectTransaction}
      />
    </div>
  );
};