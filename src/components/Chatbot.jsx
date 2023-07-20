import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
function Chatbot() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="fixed bottom-0 right-0 "
      onClick={() => setShow((prev) => !prev)}
    >
      <button
        className={`${
          show ? "text-xl border-1" : "text-4xl border-2"
        } w-15 h-15  rounded p-2  ${show ? "bg-red-200" : "bg-blue-200"}`}
      >
        {show ? <GrClose></GrClose> : <FaRobot></FaRobot>}
      </button>

      {show ? (
        <iframe
          allow="microphone;"
          width="350"
          height="430"
          src="https://console.dialogflow.com/api-client/demo/embedded/d21aa2f2-de11-4929-b9e1-4494146e4fe6"
        ></iframe>
      ) : null}
    </div>
  );
}

export default Chatbot;
