import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
const location = useLocation()
const classItem = location.state
console.log(classItem)
    return (
        <div>
            <SectionTitle title="Make Payment"></SectionTitle>
           <Elements stripe={stripePromise}>
           <CheckoutForm classItem={classItem}></CheckoutForm>
           </Elements>
        </div>
    );
};

export default Payment;