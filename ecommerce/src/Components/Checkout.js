import {useNavigate} from 'react-router-dom'

function Checkout()
{
    const navigate = useNavigate();
    const submitHandler = () =>
    {
        alert("Payment Successful!!");
        navigate('/');
    }
    return(
        <div className='wrapper'>
            <h1>Checkout</h1>
            <form onSubmit={submitHandler}>
                <h4>Accounts</h4>
                <div className='input-group'>
                    <div className='input-box'>
                        <input type='text' placeholder='Full Name' required className='name'    />
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='User Name' required className='name'    />
                    </div>
                </div>
                <div className='input-group'>
                    <div className='input-box'>
                        <input type='email' placeholder='Email Address' required className='name'    />
                    </div>
                </div>
                <div className='input-group'>
                    <div className='input-box'>
                        <h4>Date of Birth</h4>
                        <input type='date'/>
                    </div>
                    <div className='input-box'>
                        <h4>Gender</h4>
                        <input type='radio' id='b1' name="gender" defaultChecked className="radio"/>
                        <label for='b1'>Male</label>
                        <input type='radio' id='b2' name="gender" className="radio"/>
                        <label for='b2'>Female</label>
                    </div>
                </div>
                <div className='input-group'>
                    <div className='input-box'>
                        <h4>Payment Details</h4>
                        <input type='radio' id='bc1' name="pay" defaultChecked className="radio"/>
                        <label for='bc1'><span>Credit Card</span></label>
                        <input type='radio' id='bc2' name="pay" className="radio"/>
                        <label for='bc2'><span>Debit Card</span></label>     
                    </div>
                </div>
                <div className='input-group'>
                    <div className='input-box'>
                        <input type='tel' placeholder='Card Number' required className="name"/>
                    </div>
                </div>
                <div className='input-group'>
                    <div className='input-box'>
                        <input type='tel' placeholder='Card CVC' required className="name"/>
                    </div>
                </div>
                <div className='input-group'>
                    <div className='input-box'>
                        <button type="submit">Pay Now</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout;