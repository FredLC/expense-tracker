import React, { useState } from 'react';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
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
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
