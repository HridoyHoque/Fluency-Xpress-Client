import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <img
          src="https://i.ibb.co/Wnkwp5w/3828559.jpg"
          className="mx-auto" width={788}
          style={{maxHeight: "625px"}}
        />

        <Link to="/" className="btn btn-outline btn-primary mb-4">
          Go Back to Home
        </Link>
      </div>
    );
};

export default ErrorPage;