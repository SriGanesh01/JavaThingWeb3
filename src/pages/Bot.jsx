function Bot() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {/* <iframe
          src={import.meta.env.VITE_REACT_APP_CHATBASE_URL}
          className="w-full h-full border-0"
          title="Chatbot"
        ></iframe> */}

      <p>
        Ask Me anything

      </p>

      <input
        type="text"
        placeholder="Type your question..."
        className="w-3/4 p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}

export default Bot;