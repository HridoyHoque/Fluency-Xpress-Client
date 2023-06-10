import { MdContactMail } from 'react-icons/md';
import { FcCallback } from 'react-icons/fc';

const AllInstructorsTable = ({instructor}) => {
    const {name, email, image, _id} = instructor;
    return (
        <tr key={_id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <img src={image} className="w-16 h-16 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{email}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <a className="text-blue-500 hover:text-blue-700 mr-2">
                <MdContactMail size={24}/>
              </a>
              <a>
                <FcCallback size={24}/>
              </a>
            </td>
          </tr>
    );
};

export default AllInstructorsTable;