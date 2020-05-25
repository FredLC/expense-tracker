import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: uuidv4(),
            text,
            amount: +amount,
        };

        addTransaction(newTransaction);
        console.log(newTransaction);
    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='amount'>Text</label>
                    <input
                        type='text'
                        placeholder='Enter transaction'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='text'>
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type='number'
                        placeholder='Enter amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    ></input>
                </div>
                <button type='submit' className='btn'>
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;
