

const SectionTitle = ({title}) => {
    return (
        <div className="section-title">
            <h2 className="text-4xl font-bold text-center text-gray-800">---- {title} ----</h2>
            <div className="h-1 w-28 bg-indigo-500 mx-auto mt-4"></div>
         
        </div>
    );
};

export default SectionTitle;