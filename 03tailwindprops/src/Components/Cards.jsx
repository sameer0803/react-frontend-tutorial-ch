import React, { useCallback, useState ,useEffect,useRef} from 'react'

function Cards(props) {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  console.log(props.name);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);

  useEffect(passwordGenerator,[length,numberAllowed,charAllowed,passwordGenerator])

  const passwordRef=useRef(null);

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  },[Password])

    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-md w-full shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
          <h1 className="text-white text-center">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={Password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              ref={passwordRef}
            />
            <button className="outline-none px-3 py-1 shrink-0 bg-blue-600 text-white" onClick={copyToClipboard}> Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={15}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label className="text-center gap-x-6">Length :{length}</label>
            </div>
            <div className="flex text-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Number</label>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />

              <label htmlFor="charAllowed">Characters</label>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Cards

