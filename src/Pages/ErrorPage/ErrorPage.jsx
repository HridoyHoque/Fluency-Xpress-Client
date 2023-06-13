import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <img
          src="https://i.ibb.co/V94BJvc/3819740.jpg"
          className="mx-auto" width={788}
        />

        <Link to="/" className="btn btn-outline btn-primary">
          Go Back to Home
        </Link>
      </div>
    );
};

export default ErrorPage;