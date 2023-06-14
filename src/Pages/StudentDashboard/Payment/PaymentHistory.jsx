import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { BsCalendarDate } from 'react-icons/bs';
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
   const {user} = useContext(AuthContext);
   console.log(user?.email)
    const [paymentHistory, setPaymentHistory] = useState(null)

  useEffect(() => {
    fetch(`https://fluency-xpress-server.vercel.app/payments?email=${user.email}`)
    .then(res => res.json())
    .then(data => {
       const latestPayment = data.sort((a, b) => b.date - a.date)
        setPaymentHistory(latestPayment)
    })
  },[user])
    return (
        <div className="w-full">
        <SectionTitle title="Your Payment History" />
  
        <div className=" mx-auto py-6">
          <div className="bg-black text-white px-6 py-4 rounded-t-lg">
            <div className="flex items-center">
              <span className="w-1/4">Date</span>
              <span className="w-1/4">Email</span>
              <span className="w-1/4">Transaction ID</span>
              <span className="w-1/4">Amount</span>
            </div>
          </div>
          <ul className="bg-white rounded-b-lg shadow">
            {paymentHistory &&
              paymentHistory.map((payment, index) => (
                <li key={index} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center w-1/4">
                    <BsCalendarDate className="mr-2" />
                    <span className="text-gray-600 font-bold">{payment.date}</span>
                  </div>
                  <div className="w-1/4 font-bold ml-2">{payment.email}</div>
                  <div className="w-1/4 font-bold mr-4">{payment.transactionId}</div>
                  <div className="flex items-center w-1/4">
                    <span className="text-green-500 font-semibold ml-2">${payment.price}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
};

export default PaymentHistory;