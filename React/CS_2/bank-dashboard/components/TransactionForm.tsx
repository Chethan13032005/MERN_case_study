import React from 'react';

interface TransactionFormState {
  amount: string;
  currency: 'USD' | 'EUR';
}

interface TransactionFormProps {
  onSubmit: (amount: number, currency: 'USD' | 'EUR') => void;
}

export class TransactionForm extends React.Component<TransactionFormProps, TransactionFormState> {
  state: TransactionFormState = { amount: '', currency: 'USD' };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!this.state.amount) return;
    this.props.onSubmit(Number(this.state.amount), this.state.currency);
    this.setState({ amount: '', currency: 'USD' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          value={this.state.amount}
          onChange={e => this.setState({ amount: e.target.value })}
        />
        <select
          value={this.state.currency}
          onChange={e => this.setState({ currency: e.target.value as 'USD' | 'EUR' })}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}