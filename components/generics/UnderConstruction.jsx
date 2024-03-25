const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md py-8 px-10 bg-white rounded-lg shadow-xl">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-indigo-500 mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8zm2 3a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2zm-3 1a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-800">
            Under Development
          </h2>
          <p className="mt-4 text-center text-gray-600">
            This section is currently under development. <br />
            We appreciate your patience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
