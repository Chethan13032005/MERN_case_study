import React from 'react';

export interface Transaction {
  id: string;
  amount: number;
  currency: 'USD' | 'EUR';
  date: Date;
}

interface TransactionListProps {
  transactions: Transaction[];
  onSelect: (id: string) => void;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onSelect
}) => (
  <ul>
    {transactions.map(tx => (
      <li key={tx.id} onClick={() => onSelect(tx.id)}>
        {tx.amount} {tx.currency} - {tx.date.toLocaleDateString()}
      </li>
    ))}
  </ul>
);