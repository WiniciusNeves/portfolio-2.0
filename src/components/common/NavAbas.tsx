export default function NavAbas({ propagateServerField }) {
    return (
        <div className="w-1/3">
            <button className="w-full ">
                <a href={propagateServerField.url} className={`flex items-center space-x-2 w-full py-2 hover:text-sky-300 hover:border-sky-300 hover:border-b-2 `} >
                    {propagateServerField.icon}
                    <span>{propagateServerField.name}</span>

                </a>
            </button>
        </div >
    );
}
