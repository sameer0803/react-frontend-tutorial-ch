import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [CharAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  //use ref hook 

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
   
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (CharAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, CharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, CharAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500 flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 top-5">
        <h1 className="text-white text-center whitespace-nowrap mb-4">
          Password Generator
        </h1>
        {/* 🛠 Added mb-4 to create spacing */}

        <div className="flex shadow rounded-lg overflow-hidden w-full">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword}
          className=" outline-none bg-blue-500 text-white px-4">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label htmlFor="length">Length:{length}</label>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="includeNumbers"
                className="w-4 h-4 accent-blue-500 cursor-pointer"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="includeNumbers" className="cursor-pointer">
                Include Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="characterInput"
                className="w-4 h-4 accent-blue-500 cursor-pointer"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="includeNumbers" className="cursor-pointer">
                Include characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
