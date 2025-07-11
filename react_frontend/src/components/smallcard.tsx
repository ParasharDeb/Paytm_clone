export default function Smallcardcomponent({ title,  icon }: { title: string; icon: React.ReactNode }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4  cursor-pointer hover:bg-gray-50 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <div className="text-blue-500">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
               
            </div>
        </div>
    );
}