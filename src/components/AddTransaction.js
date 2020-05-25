import React, { useState } from 'react';

const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className='form-control'>
                    <label htmlFor='amount'>Text</label>
                    <input type='text' placeholder='Enter transaction'></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='text'>
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type='number' placeholder='Enter amount'></input>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
