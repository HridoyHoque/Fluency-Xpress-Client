import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SectionTitle from "../../components/SectionTitle/SectionTitle";



const AddClasses = () => {
const {user} = useContext(AuthContext)

    const handleAddClass = () => {
        console.log()
    } 

    return (
        
        <form onSubmit={handleAddClass}>
         <div className="mb-4"><SectionTitle title="Add a Class"></SectionTitle></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" required value={user?.displayName} readOnly name="instructorName" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="email" required name="email" readOnly value={user?.email} placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Class Image URL</span>
                    </label>
                    <input type="text" required name="photo" placeholder='Class Image' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" name='name' required placeholder='Class Name' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <input type="number" name='price' required placeholder='Price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="text" name='seats' required placeholder='Available seats' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Status</span>
                    </label>
                    <input type="text" name='status' readOnly value="pending" required className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary btn-block" type="submit" value="Add Class" />
            </div>
        </form>
    );
};

export default AddClasses;