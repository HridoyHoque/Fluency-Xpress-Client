import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const {user} = useContext(AuthContext);
    
// TODO: take the price from student selectedClasses
 const price = 14;

    useEffect(() => {
      if(price > 0){
        fetch("http://localhost:5000/create-payment-intent", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price: price})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClientSecret(data.clientSecret);
        })
      }
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('')
            console.log('payment method', paymentMethod)
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'unknown'
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError);
        }
        console.log(paymentIntent)
    };
    return (
       <>
        <form className="mt-3" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary btn-sm mt-2" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
        {cardError && <p className="text-red-600 mt-1">{cardError}</p>}
       </>
    );
};

export default CheckoutForm;