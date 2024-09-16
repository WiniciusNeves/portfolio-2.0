export default function Box({ propagateServerField }: any) {
    return (
      <div className="p-6 border border-gray-600 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg min-w-[300px]">
        <h3 className="text-3xl font-bold text-white mb-4">
          {propagateServerField.title}
        </h3>
        <div className="bg-gray-800 rounded-lg p-6 transition duration-300 hover:bg-gray-700">
          <p className="text-gray-300 leading-relaxed text-lg">
            {propagateServerField.content}
          </p>
        </div>
        <a href={propagateServerField.link} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded">
            GitHub
          </button>
        </a>
      </div>
    );
  }
  