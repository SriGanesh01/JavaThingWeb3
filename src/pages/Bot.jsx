function Bot() {
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <iframe
          src={import.meta.env.VITE_REACT_APP_CHATBASE_URL}
          className="w-full h-full border-0"
          title="Chatbot"
        ></iframe>
      </div>
    );
  }
  
  export default Bot;
  