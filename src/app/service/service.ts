import { Transaction } from './definitions';
import Transactions from '../mockData/transactionData.json';

export async function getTransactionData() {
  try {
    let data: Transaction[] = Transactions.transactions;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed.');
  }
}

export async function createTransactionData(data : Transaction) {

  try {
    const response = await fetch("https://api.sampleapis123123.com/futurama/info");
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed.');
  }
}