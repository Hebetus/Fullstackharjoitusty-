import { useState } from 'react';

const Button = () => {
    const [amount, setAmount] = useState(0)

    const handleClick = () => {
        setAmount(amount + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Number of clicks is {amount}</button>
        </>
    )
}

export default Button