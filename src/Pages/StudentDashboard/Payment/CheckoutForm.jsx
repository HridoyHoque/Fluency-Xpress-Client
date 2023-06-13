import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from "@tanstack/react-query";

const CheckoutForm = ({classItem}) => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const {user} = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const {data: newClasses = []} = useQuery(['newClasses'], async () => {
        const res = await fetch('http://localhost:5000/newClasses')
        return res.json();
    })

    console.log(newClasses)
    
// TODO: take the price from student selectedClasses
  const price = parseInt(classItem.price)

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
            // console.log(data);
            setClientSecret(data.clientSecret);
        })
      }
    },[price])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('')
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true);
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
        setProcessing(false);
        if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id);
            // save payment information to database
            const payment = {
                classId: classItem._id,
                seats: classItem.seats,
                instructorName: classItem.instructorName,
                enrolledClassName: classItem.name,
                email: user?.email,
                image: classItem.image,
                price,
                transactionId: paymentIntent.id,
                date: new Date(),
                status: 'Enrolled'
            }
            fetch('http://localhost:5000/payments',{
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log('last recheck of payment', data)
                if(data.result.insertedId){
                    toast.success('Please check payment history to see your payment details!')
                    fetch(`http://localhost:5000/newClasses/${classItem.itemId}`, {
                        method: 'PUT'
                    })
                    .then(res => res.json)
                    .then(data =>  {
                        console.log(data)
                    })
                  
                }
            })
        }
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
            <button className="btn btn-primary btn-sm mt-2" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        {cardError && <p className="text-red-600 mt-1">{cardError}</p>}
        {transactionId && <p className="text-blue-500">Transaction complete with transactionId: {transactionId}</p>}
        <Toaster />
       </>
    );
};

export default CheckoutForm;