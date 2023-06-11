import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="bg-base-200">
          <Link to="/dashboard/secondPage"> GO second Page</Link>
        </div>
    );
};

export default Sidebar;