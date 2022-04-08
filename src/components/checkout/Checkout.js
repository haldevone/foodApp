import React from 'react'
import tomato from "../../images/tomato.png"

function Checkout(props) {

    const cardTypes = [
        "Visa",
        "MasterCard",
        "American Express",
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    function refreshPage(){
        window.location.reload(false);
    }

  return (
    <div className='relativeParent'>
        <div className='checkout'>
            <div className='checkout-left'>
                <img src={tomato} alt="tomatoes" />
            </div>
            <div className='checkout-right'>
                <h1>Kassa</h1>
                <h2>Leverans Information</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='checkout-input'>
                        <label htmlFor="">Namn</label>
                        <input type="text"  className='inputBox'/>
                    </div>
                    <div className='checkout-input'>
                        <label htmlFor="">Email</label>
                        <input type="email"  className='inputBox'/>
                    </div>
                    <div className='checkout-input'>
                        <label htmlFor="">Adress</label>
                        <input type="text"  className='inputBox'/>
                    </div>
                    <div className='checkout-input'>
                        <label htmlFor="">Postnummer</label>
                        <input type="text"  className='inputBox'/>
                    </div>
                    <h2>Betal Information</h2>
                    <div className='checkout-input'>
                        <label htmlFor="">Namn på kortet</label>
                        <input type="text"  className='inputBox'/>
                    </div>
                    <div className='checkout-input'>
                        <label htmlFor="">Kortnummer</label>
                        <input type="text" className='inputBox'/>
                    </div>
                    <div className='checkout-select'>
                        <label htmlFor="">Betalkort</label>
                        <select name="" id="">
                            {cardTypes.map(item => {
                                return <option>{item}</option>
                            })}
                        </select>
                    </div>
                    <div className='checkout-date'>
                        <label htmlFor="">Giltigt</label>
                        <input type="date" className='inputBox'/>
                        <label htmlFor="">CVV</label>
                        <input type="text" className='inputBox'/>
                    </div>
                    <div className='flex topMargin1'>
                        <button className='button buttonAccent' onClick={props.onHideCheckout}>Ångra</button>
                        <button className='button' onClick={refreshPage}>Beställ</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Checkout