import { Transaction } from './definitions';
import Transactions from '../mockData/transactionData.json';

export async function login(id:string, password: string) {

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch("http://localhost:3010/auth/login", {
      method: "POST",
      body: JSON.stringify({ id: id, password: password }),
      headers: myHeaders,
    });
  } catch (error) {
    console.error('login fail', error);
    throw new Error('Failed.');
  }
}

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